(function(){
  var C = [0, 100];
  var K = 1.5;
  var EYE = 1.7, SPEED = 1.8 * K, TURN = Math.PI / 2 * K;
  var W = window;
  function wingPoint(a, r){ var t = a * Math.PI / 180; return [C[0] + r * Math.cos(t), C[1] + r * Math.sin(t)]; }
  function view(sx, sz, dist){ var dx = C[0] - sx, dz = C[1] - sz, L = Math.hypot(dx, dz); return [sx + dx / L * dist, sz + dz / L * dist]; }
  function wait(ms, tk){ return function(){ if (tk !== token || !running || editing) return Promise.resolve(); return new Promise(function(r){ setTimeout(r, ms / K); }); }; }
  function call(fn){ return function(){ try { fn(); } catch (e) {} return Promise.resolve(); }; }
  function stagger(fns, ms){ return function(tk){ var p = Promise.resolve(); fns.forEach(function(f){ p = p.then(function(){ if (tk !== token || !running || editing) return; try { f(); } catch (e) {} return new Promise(function(r){ setTimeout(r, ms / K); }); }); }); return p; }; }
  var EX = function(n){ return W[n] || {}; };

  var STOPS = [
    { at: [0, 100], look: [0, 130], text: 'Welcome to the Museum of the Recorded Human. Walk into the six rooms around you, and see what people left behind when they first lived with machines.', zh: '欢迎来到被记录的人类博物馆。走进你周围的六个展厅，看看第一代和机器一起生活的人，留下了什么。', hold: 9000 },
    { wing: 315, text: 'Floating Evidence. Step in and watch how words and images change as they travel.', zh: '漂浮的证据：走进来，看看文字和图片在传递中是怎样被改变的。', hold: 4500 },
    { slot: [38.89, 68.18], dist: 6.0, text: 'The Last Human Message. A hesitation, polished into politeness, then rewritten into agreement. — Whose intention is left in the final words?', zh: '最后的人类信息：一句犹豫，被润色成礼貌，又被重写成了同意。最后留下的文字里，还是谁的意思？', act: stagger([function(){ EX('EX011').show && EX('EX011').show(0); }, function(){ EX('EX011').show && EX('EX011').show(1); }, function(){ EX('EX011').show && EX('EX011').show(2); }, function(){ EX('EX011').compare && EX('EX011').compare(); }], 1800), hold: 4000 },
    { slot: [31.82, 61.11], dist: 6.8, text: 'The Fragile Truth. Layer by layer, the original disappeared. Clear them, and look again. — What can an image still prove?', zh: '脆弱的真相：一层又一层，原始的画面消失了。拨开它们，再看一次。一张图片，还能证明什么？', act: stagger([1,2,3,4,5,6,7,8].map(function(){ return function(){ EX('EX012').peel && EX('EX012').peel(4); }; }), 700), hold: 4000 },
    { wing: 0, text: 'Weather Chamber. Step in and look for the feelings a message carries, and the ones it leaves behind.', zh: '天气之室：走进来，找找一条消息带走了哪些心情，又落下了哪些。', hold: 4000 },
    { slot: [50, 105], dist: 6.0, text: 'The Weather of Emotion. The same short message could carry calm, exhaustion, or nothing we can read. — Can a message hold the feeling behind it?', zh: '情绪的天气：同一句简短的消息，可能是平静，可能是疲惫，也可能我们什么也读不出来。一条消息，能装下它背后的感受吗？', act: stagger([function(){ EX('EX005').set && EX('EX005').set('A'); }, function(){ EX('EX005').set && EX('EX005').set('B'); }, function(){ EX('EX005').set && EX('EX005').set('C'); }], 3000), hold: 3000 },
    { wing: 45, text: 'Reconstruction Lab. This room is still being restored. Come back soon.', zh: '重建实验室：这个展厅还在修复中，下次再来。', hold: 5000 },
    { wing: 135, text: 'Identity Chamber. Step in and see how one person, and one body, are recorded in many ways.', zh: '身份之室：走进来，看看一个人、一个身体，是怎样被记录成许多样子的。', hold: 4000 },
    { slot: [-38.89, 131.82], dist: 4.8, lookY: 2.2, text: 'The Multiple Selves. Each version of a person stayed. None replaced the others. — How many versions of you can a digital world keep?', zh: '多重自我：每一个版本的自己都留了下来，谁也没有取代谁。一个数字世界，能保存你的多少个版本？', act: stagger([0,1,2,3].map(function(i){ return function(){ EX('EX001').add && EX('EX001').add(i); }; }), 1400), hold: 3500 },
    { slot: [-31.82, 138.89], dist: 5.0, lookY: 1.7, text: 'The Quantified Body. Movement, rest and heartbeat, turned into numbers someone else could read. — What is lost when a body becomes its measurements?', zh: '被量化的身体：动作、休息和心跳，变成了别人可以读取的数据。当身体只剩下测量数据，失去的是什么？', act: stagger([0,1,2,3].map(function(i){ return function(){ EX('EX006').add && EX('EX006').add(i); }; }), 1600), hold: 4000 },
    { wing: 180, text: 'Machine Archive. Step in and watch how machines sort what reaches you.', zh: '机器档案：走进来，看看机器是怎样替你筛选你能看到的东西的。', hold: 3500 },
    { slot: [-50, 100], dist: 5.0, lookY: 2.4, text: 'The Algorithmic Filter. Choose one thing, and the world begins to repeat it back to you. — Who chose what you see next?', zh: '算法过滤：选择一样东西，世界就开始不断地把它重复给你。你接下来看到的，是谁选的？', act: stagger([1,1,1,1,1,1].map(function(i){ return function(){ EX('EX008').choose && EX('EX008').choose(i); }; }), 1000), hold: 3500 },
    { wing: 225, text: 'Archive Vault. This room is still being restored. Come back soon.', zh: '档案库：这个展厅还在修复中，下次再来。', hold: 4500 },
    { at: [0, 100], look: [0, 70], text: 'You have seen their records. Before you leave, think about the records you left today. Then press Leave the museum to see the records you found.', zh: '你看过了他们的记录。离开之前，想一想你今天又留下了哪些记录。然后按右下角“离开博物馆”，去看看你找到的记录。', hold: 8000 }
  ];

  // UI
  var cap = document.createElement('div');
  cap.style.cssText = 'position:fixed;left:50%;bottom:64px;transform:translateX(-50%);max-width:760px;width:80%;padding:12px 18px;background:rgba(10,14,22,.78);color:#f3efe6;font:16px/1.45 Georgia,serif;text-align:center;border-radius:8px;z-index:9999;display:none;pointer-events:none';
  var btn = document.createElement('button');
  btn.textContent = '▶ Guided Tour · 导览';
  btn.style.cssText = 'position:fixed;right:12px;top:52px;z-index:10000;padding:6px 12px;background:#1d2633;color:#fff;border:1px solid #6d7d92;border-radius:6px;font:13px sans-serif;cursor:pointer';
  document.body.appendChild(cap); document.body.appendChild(btn);

  var running = false, x = 0, z = 70, yaw = Math.PI / 2, token = 0;
  function look(){ if (editing) return; W.LAB && W.LAB.goto([x, EYE, z], [x + Math.cos(yaw) * 5, EYE, z + Math.sin(yaw) * 5]); }
  var editing = W.__MANI_EDITOR_PREVIEW__ === true;
  var steppers = [], lastTime = null;
  function onFrame(ev){
    var time = ev && typeof ev.time === 'number' ? ev.time : performance.now();
    var playing = !ev || ev.playing !== false;
    var dt = lastTime === null ? 0.016 : Math.min(0.05, Math.max(0, (time - lastTime) / 1000)); lastTime = time;
    if (editing || !playing || !steppers.length) return;
    var list = steppers; steppers = [];
    list.forEach(function(s){ if (s.my !== token) { s.res(); return; } if (s.step(dt)) steppers.push(s); else s.res(); });
  }
  try { W.LAB.labelScene().addEventListener('archive-frame', onFrame); } catch (e) {}
  W.addEventListener('m3d:edit-mode', function(e){ editing = !!(e && e.detail && e.detail.editing); btn.style.display = editing ? 'none' : ''; if (editing) stop(); });
  function frames(step, tk){ return new Promise(function(res){ if (editing || !running || tk !== token) { res(); return; } steppers.push({ step: step, res: res, my: tk }); }); }
  function norm(a){ while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; }
  function turnTo(tx, tz, tk){ var target = Math.atan2(tz - z, tx - x); return frames(function(dt){ var d = norm(target - yaw); var s = TURN * dt; if (Math.abs(d) <= s) { yaw = target; look(); return false; } yaw += Math.sign(d) * s; look(); return true; }, tk); }
  function walkTo(tx, tz, tk){ if (tk !== token) return Promise.resolve(); if (Math.hypot(tx - x, tz - z) > 0.5) cap.style.display = 'none'; return turnTo(tx, tz, tk).then(function(){ return frames(function(dt){ var dx = tx - x, dz = tz - z, L = Math.hypot(dx, dz), s = SPEED * dt; if (L <= s) { x = tx; z = tz; look(); return false; } x += dx / L * s; z += dz / L * s; look(); return true; }, tk); }); }
  function faceTo(tx, ty, tz, tk){ var target = Math.atan2(tz - z, tx - x); return turnTo(tx, tz, tk).then(function(){ return frames(function(){ yaw = target; if (W.LAB) W.LAB.goto([x, EYE, z], [tx, ty, tz]); return false; }, tk); }); }
  var audio = null, muted = false;
  var mute = document.createElement('button');
  mute.textContent = 'Narration: ON';
  mute.style.cssText = 'position:fixed;right:12px;top:86px;z-index:10000;padding:4px 10px;background:#1d2633;color:#fff;border:1px solid #6d7d92;border-radius:6px;font:12px sans-serif;cursor:pointer;display:none';
  document.body.appendChild(mute);
  mute.addEventListener('click', function(){ muted = !muted; mute.textContent = muted ? 'Narration: OFF' : 'Narration: ON'; if (audio) audio.muted = muted; });
  function stopAudio(){ if (audio) { try { audio.pause(); } catch (e) {} audio = null; } }
  function playFor(i){ stopAudio(); var list = W.TOUR_AUDIO || []; var url = list[i]; if (!url) return Promise.resolve(); mute.style.display = 'block'; audio = new Audio(url); audio.muted = muted; var a = audio; return new Promise(function(res){ a.onended = res; a.onerror = res; a.play().catch(res); }); }
  function say(s){ cap.innerHTML = s.text + '<div style="opacity:.75;font-size:14px;margin-top:6px">' + s.zh + '</div>'; cap.style.display = 'block'; }
  function resetAll(){ ['EX001','EX006','EX005','EX008','EX011','EX012'].forEach(function(n){ try { W[n] && W[n].reset && W[n].reset(); } catch (e) {} }); }
  function go(path, tk){ if (path.length) { cap.style.display = 'none'; } var p = Promise.resolve(); path.forEach(function(pt){ p = p.then(function(){ return (running && tk === token) ? walkTo(pt[0], pt[1], tk) : null; }); }); return p; }

  function routeTo(s, cur){
    // always via the atrium: current wing mouth -> centre -> target wing mouth -> target
    var pts = [];
    if (s.at) { pts.push(s.at); return pts; }
    if (s.wing !== undefined) { if (cur.wing !== s.wing) { pts.push(C.slice()); } pts.push(wingPoint(s.wing, 30)); return pts; }
    pts.push(view(s.slot[0], s.slot[1], s.dist));
    return pts;
  }

  function start(){
    if (running || editing) return; running = true; token++; btn.textContent = '■ Stop tour · 停止导览';
    resetAll();
    var tk = token;
    x = 0; z = 70; yaw = Math.PI / 2;
    var cur = { wing: null }, mouth = null, p = Promise.resolve();
    STOPS.forEach(function(s, si){
      p = p.then(function(){
        if (!running || tk !== token) return;
        var path = routeTo(s, cur);
        if (s.slot === undefined && s.wing === undefined && mouth) path.unshift(mouth); // leave wing before going back to centre
        return go(path, tk).then(function(){
          if (!running || tk !== token) return;
          if (s.wing !== undefined) { cur.wing = s.wing; mouth = wingPoint(s.wing, 30); var o = wingPoint(s.wing, 46); return faceTo(o[0], EYE, o[1], tk); }
          if (s.slot) return faceTo(s.slot[0], s.lookY || 1.9, s.slot[1], tk);
          if (s.look) return faceTo(s.look[0], EYE, s.look[1], tk);
        }).then(function(){
          if (!running || tk !== token) return;
          say(s);
          var a = s.act ? s.act(tk) : Promise.resolve();
          return Promise.all([a, playFor(si)]).then(wait(s.hold || 4000, tk));
        }).then(function(){
          if (s.slot && running && tk === token) { return walkTo(mouth[0], mouth[1], tk); }
        });
      });
    });
    p.then(function(){ if (tk === token) stop(); });
  }
  function stop(){ running = false; token++; var l = steppers; steppers = []; l.forEach(function(s){ s.res(); }); btn.textContent = '▶ Guided Tour · 导览'; cap.style.display = 'none'; stopAudio(); }
  btn.addEventListener('click', function(){ running ? stop() : start(); });

  function hideOld(){
    var hid = 0;
    document.querySelectorAll('button').forEach(function(b){
      if (b === btn || b === mute) return;
      var t = (b.textContent || '').trim();
      if (/Guided Tour$/.test(t) || /^Narration:/.test(t) || /^■ Stop tour$/.test(t)) { b.style.display = 'none'; hid++; return; }
      var t = (b.textContent || '').trim();
      if (/^(▶\s*)?Museum Tour$/.test(t) || /^Sound:/.test(t) || /^Voice:/.test(t)) { b.style.display = 'none'; hid++; }
    });
    try { W.speechSynthesis && W.speechSynthesis.cancel(); } catch (e) {}
    return hid;
  }
  var n = 0, t = setInterval(function(){ hideOld(); if (++n > 40) clearInterval(t); }, 500);
  W.WalkTour5 = { start: start, stop: stop };
  W.WalkTour = W.WalkTour5;
  try { W.WalkTour4 && W.WalkTour4.stop && W.WalkTour4.stop(); } catch (e) {}
  // unified UI wording
  function relabel(){
    document.querySelectorAll('span, button').forEach(function(el){
      if (el.children.length) return;
      var t = el.textContent;
      if (/^Exhibits visited/.test(t)) el.textContent = t.replace('Exhibits visited', 'Records found').replace('已到访', '已找回');
      else if (t === 'Reset') el.textContent = 'Reset · 重置';
    });
  }
  setInterval(relabel, 400);
  var tw = 0, tt = setInterval(function(){
    var L = W.LAB;
    if (L && L.toast && !L.toast.__relabel) {
      var orig = L.toast;
      var f = function(msg){ if (typeof msg === 'string') { var m = msg.match(/^Exhibit (\d\d) recorded/); if (m) msg = 'Record ' + m[1] + ' found · 已找回第 ' + m[1] + ' 份记录'; } return orig.apply(L, [msg].concat([].slice.call(arguments, 1))); };
      f.__relabel = true; if (orig.__muted012) f.__muted012 = true; L.toast = f; clearInterval(tt);
    }
    if (++tw > 80) clearInterval(tt);
  }, 100);
})();
