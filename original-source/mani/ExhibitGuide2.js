(function(){
  var W = window, C = [0, 100];
  var G = [
    { id: '012', s: [31.82, 61.11], done: function(){ return W.EX012 && W.EX012.clarity && W.EX012.clarity() >= 100; },
      t: "012 · The Fragile Truth  脆弱的真相", a: "Walk forward and see what it looked like at the very beginning.", az: "往前走，看看它最开始的样子。", b: null, bz: null },
    { id: '005', s: [50, 105],
      t: "005 · The Weather of Emotion  情绪的天气", a: "One message: “I’m fine.” Press A, B and C to see the day behind it, and watch the weather in the room.", az: "一条消息：“我没事。”按 A、B、C，看看这句话背后是怎样的一天，再看看房间里的天气。", b: "Look at the message again. It never changed. Notice how much of the feeling the record left out.", bz: "再看一眼那条消息，它一个字都没变。留意一下，这条记录漏掉了多少心情。" },
    { id: '008', s: [-50, 100],
      t: "008 · The Algorithmic Filter  算法过滤", a: "Choose the pattern you like most. Keep choosing it, and watch the room.", az: "选一个你最喜欢的图案，然后一直选它，看看整个房间会怎样。", b: "Look around. See which patterns are still here, and which ones you can no longer see.", bz: "环顾四周，看看还剩下哪些图案，又有哪些你已经看不到了。" },
    { id: '011', s: [38.89, 68.18],
      t: "011 · The Last Human Message  最后的人类信息", a: "Read what the person first wrote. Then open the AI-edited and AI-generated versions, and follow what happens to their decision.", az: "先读这个人最初写下的话，再打开 AI 润色和 AI 生成的版本，跟着看看他的决定变成了什么。", b: "Press COMPARE. Find the words where the meaning turned around.", bz: "按“对比”，找出意思被反过来的那几个词。" },
    { id: '001', s: [-38.89, 131.82], done: function(){ return W.EX001 && W.EX001.count && W.EX001.count() >= 3; },
      t: "001 · The Multiple Selves  多重自我", a: "Choose an identity, and watch a new face grow from the same person.", az: "选一个身份，看看同一个人身上会长出怎样的新面孔。", b: "Look at where the faces overlap. Find the parts they still share.", bz: "看看这些面孔重叠的地方，找找它们之间还共有的部分。" },
    { id: '006', s: [-31.82, 138.89], done: function(){ return W.EX006 && W.EX006.count && W.EX006.count() >= 3; },
      t: "006 · The Quantified Body  被量化的身体", a: "Choose a type of data, and see how the body is broken into parts that can be measured.", az: "选一种数据，看看身体是怎样被拆成一个个可以测量的部分的。", b: "Read the data around the body. Find which parts of you were recorded, why they were read this way, and which parts became objective numbers.", bz: "读一读身体周围的数据，找找自己身体的哪些部分被记录了，为什么会被这样解读，又有哪些部分被当成了客观的数字。" }
  ];

  var panel = document.createElement('div');
  panel.style.cssText = 'position:fixed;left:50%;bottom:60px;transform:translateX(-50%);width:min(820px,86vw);padding:16px 22px;background:rgba(12,16,24,.86);color:#f1ece2;border:1px solid rgba(201,164,92,.55);border-radius:10px;z-index:10003;display:none;pointer-events:none;font:15px/1.5 Georgia,serif';
  var title = document.createElement('div'); title.style.cssText = 'font:600 13px/1.4 sans-serif;letter-spacing:1px;color:#c9a45c;margin-bottom:6px';
  var en = document.createElement('div');
  var zh = document.createElement('div'); zh.style.cssText = 'opacity:.8;font-size:14px;margin-top:6px';
  panel.appendChild(title); panel.appendChild(en); panel.appendChild(zh);
  document.body.appendChild(panel);

  var state = {}; G.forEach(function(g){ state[g.id] = { t: 0, clicks: 0, end: false }; });
  var active = null, last = performance.now();
  document.addEventListener('pointerdown', function(){ if (active) state[active.id].clicks++; }, true);

  function show(g){
    var st = state[g.id];
    title.textContent = g.t;
    if (st.end && !g.b) { panel.style.display = 'none'; return; }
    if (st.end) { en.textContent = g.b; zh.textContent = g.bz; panel.style.borderColor = 'rgba(127,183,184,.8)'; }
    else { en.textContent = g.a; zh.textContent = g.az; panel.style.borderColor = 'rgba(201,164,92,.55)'; }
    panel.style.display = 'block';
  }
  function hideTourCaptions(on){
    document.querySelectorAll('div').forEach(function(d){
      if (d === panel || panel.contains(d)) return;
      if (d.style && d.style.bottom === '64px' && d.style.position === 'fixed') d.style.visibility = on ? 'hidden' : '';
    });
  }

  // 012 floor arrows
  var arrows = [];
  function makeArrows(){
    var ed = W.__M3D_EDITOR__, T = W.THREE;
    if (!ed || !ed.scene || !T) return false;
    var s = G[0].s, dx = C[0] - s[0], dz = C[1] - s[1], L = Math.hypot(dx, dz); dx /= L; dz /= L;
    var shape = new T.Shape();
    shape.moveTo(0, 0.55); shape.lineTo(0.45, 0.05); shape.lineTo(0.16, 0.05); shape.lineTo(0.16, -0.5);
    shape.lineTo(-0.16, -0.5); shape.lineTo(-0.16, 0.05); shape.lineTo(-0.45, 0.05); shape.lineTo(0, 0.55);
    var geo = new T.ShapeGeometry(shape);
    [4.4, 5.6, 6.8].forEach(function(dist, i){
      var mat = new T.MeshBasicMaterial({ color: 0xc9a45c, transparent: true, opacity: 0.8, side: T.DoubleSide, depthWrite: false });
      var m = new T.Mesh(geo, mat);
      m.name = 'GUIDE012_ARROW_' + i;
      m.rotation.x = -Math.PI / 2;
      m.rotation.z = Math.atan2(dx, dz);
      m.position.set(s[0] + dx * dist, 0.05, s[1] + dz * dist);
      m.scale.set(1.3, 1.3, 1.3);
      ed.scene.add(m);
      arrows.push({ m: m, i: i });
    });
    return true;
  }
  var arrowsMade = false;

  function hidePlates(){
    var ed = W.__M3D_EDITOR__; if (!ed || !ed.scene) return;
    ['EX001_CAPTION', 'EX006_CAPTION'].forEach(function(n){ var o = ed.scene.getObjectByName(n); if (o) o.visible = false; });
  }

  function hideOldGuide(){
    document.querySelectorAll('div').forEach(function(d){ if (d !== panel && d.style && d.style.position === 'fixed' && d.style.bottom === '60px' && d.style.zIndex === '10002') d.style.visibility = 'hidden'; });
  }
  function tick(){
    hideOldGuide();
    var now = performance.now(), dt = (now - last) / 1000; last = now;
    hidePlates();
    var t = now / 1000;
    var done012 = G[0].done();
    arrows.forEach(function(a){ a.m.visible = !done012; a.m.material.opacity = 0.35 + 0.5 * Math.max(0, Math.sin(t * 3 - a.i * 0.9)); });
    var L = W.LAB, p = L && L.player ? L.player() : null;
    var near = null, best = 1e9;
    if (p) G.forEach(function(g){ var d = Math.hypot(p.x - g.s[0], p.z - g.s[1]); if (d < 9.5 && d < best) { best = d; near = g; } });
    if (near !== active) { active = near; }
    if (active) {
      var st = state[active.id];
      st.t += dt;
      if (active.done) { st.end = !!active.done(); }
      else if (!st.end && (st.clicks >= 3 || st.t > 12)) st.end = true;
      show(active); hideTourCaptions(true);
    } else { panel.style.display = 'none'; hideTourCaptions(false); }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  W.ExhibitGuide2 = { reset: function(){ G.forEach(function(g){ state[g.id] = { t: 0, clicks: 0, end: false }; }); } };
})();
