(function(){
  var W = window, C = [0, 100];
  var G = [
    { id: '012', s: [31.82, 61.11], done: function(){ return W.EX012 && W.EX012.clarity && W.EX012.clarity() >= 100; },
      t: '012 · The Fragile Truth 脆弱的真相',
      a: 'This photo has been shared many, many times. Every share added a new layer: cropped, AI-edited, called fake… What really happened is buried at the bottom. Walk forward, or click, to peel the layers away and see how it looked at the start.',
      az: '这张照片被转发了很多很多次。每转一次，就多一层说法：被剪裁、被 AI 修过、被说成是假的……真正发生的事，被压在了最下面。往前走，或者点一下，把这些层一张张揭掉，看看它最开始的样子。',
      b: 'It was just two strangers sharing an umbrella. Nothing else happened. The further an image travels, the further it can drift from what really happened.',
      bz: '原来只是两个陌生人一起撑一把伞，之后什么也没发生。一张图被传得越多，离真正发生的事可能就越远。' },
    { id: '005', s: [50, 105],
      t: '005 · The Weather of Emotion 情绪的天气',
      a: 'Someone sent: “I’m fine.” Were they really? Feelings hide in many places: the time a message was sent, what happened that day, what was left unsaid. Press A, B and C below and watch how the weather in the room changes behind the same words.',
      az: '有人发了一句“I’m fine（我没事）”。真的没事吗？心情会藏在很多地方：发消息的时间、那天发生的事、没说出口的话。点下面的 A、B、C，看看同一句话背后，房间里的天气会怎么变。',
      b: 'The same words can hide sunshine, rain, or fog. A phone can keep the message, but not how the person felt when they sent it.',
      bz: '同一句话，背后可能是晴天、下雨，也可能起了雾。手机能存下这句话，却存不下说话人当时的心情。' },
    { id: '008', s: [-50, 100],
      t: '008 · The Algorithmic Filter 算法过滤',
      a: 'At first the wall shows every kind of pattern. Pick the one you like best, and click it a few more times.',
      az: '墙上一开始什么图案都有。挑一个你最喜欢的，多点几次试试。',
      b: 'The more you click it, the more of it appears, and the other patterns quietly fade away. Part of the world you see is the world you clicked.',
      bz: '你点得越多，它出现得越多，别的图案就慢慢看不见了。你看到的世界，有一部分是你自己点出来的。' },
    { id: '011', s: [38.89, 68.18],
      t: '011 · The Last Human Message 最后的人类信息',
      a: 'Someone wanted to say: “This plan isn’t working, let’s not do it yet.” First AI polished it, then AI rewrote it. Press ORIGINAL, AI EDIT and AI GENERATE in turn. By the end, does it still mean the same thing?',
      az: '有人想说“这个方案不太行，先别做”。这句话先交给 AI 润色，再让 AI 重写一遍。依次点“原文、AI 润色、AI 生成”，看看传到最后，意思还一样吗？',
      b: 'After polishing it still says “wait”. After rewriting it says “let’s try it”. Every version reads smoothly, but the meaning has flipped.',
      bz: '润色以后还是“先别做”，重写以后却变成了“可以先试试”。每一句都很通顺，可意思已经反过来了。' },
    { id: '001', s: [-38.89, 131.82], done: function(){ return W.EX001 && W.EX001.count && W.EX001.count() >= 3; },
      t: '001 · The Multiple Selves 多重自我',
      a: 'This is one person. At work, with friends, online, in their own imagination, they seem a little different each time. Click the identities below and see how many faces grow.',
      az: '这是同一个人。上班的时候、在朋友面前、在网上、在自己的想象里，他好像都不太一样。点下面的身份，看看他会长出几张脸。',
      b: 'Every face is still them. None replaced the others. The internet kept a record of each version.',
      bz: '这几张脸都是他，谁也没有取代谁。网络把每一个版本的他都记了下来。' },
    { id: '006', s: [-31.82, 138.89], done: function(){ return W.EX006 && W.EX006.count && W.EX006.count() >= 3; },
      t: '006 · The Quantified Body 被量化的身体',
      a: 'A watch, a phone, a laptop: every day they record this body. Click a type of data and see what it adds to the body.',
      az: '手表、手机、电脑，每天都在记录这个身体。点一种数据，看看它会给身体加上什么。',
      b: 'Steps, heartbeat, sleep, posture: the body becomes a string of numbers. Next to each one: who recorded it, when, and what it was taken to mean.',
      bz: '步数、心率、睡眠、姿态，身体被拆成了一串数字。每个数字旁边都写着：谁记的、什么时候记的、它被解读成了什么。' }
  ];

  var panel = document.createElement('div');
  panel.style.cssText = 'position:fixed;left:50%;bottom:60px;transform:translateX(-50%);width:min(820px,86vw);padding:16px 22px;background:rgba(12,16,24,.86);color:#f1ece2;border:1px solid rgba(201,164,92,.55);border-radius:10px;z-index:10002;display:none;pointer-events:none;font:15px/1.5 Georgia,serif';
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

  function tick(){
    var now = performance.now(), dt = (now - last) / 1000; last = now;
    if (!arrowsMade) arrowsMade = makeArrows();
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
  W.ExhibitGuide = { reset: function(){ G.forEach(function(g){ state[g.id] = { t: 0, clicks: 0, end: false }; }); } };
})();
