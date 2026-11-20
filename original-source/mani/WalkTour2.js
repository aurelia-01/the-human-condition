(function(){
  var C = [0, 100];
  var EYE = 1.7, SPEED = 1.8, TURN = Math.PI / 2; // 90 deg per second
  var W = window;
  function wingPoint(a, r){ var t = a * Math.PI / 180; return [C[0] + r * Math.cos(t), C[1] + r * Math.sin(t)]; }
  function view(sx, sz, dist){ var dx = C[0] - sx, dz = C[1] - sz, L = Math.hypot(dx, dz); return [sx + dx / L * dist, sz + dz / L * dist]; }
  function wait(ms){ return function(){ return new Promise(function(r){ setTimeout(r, ms); }); }; }
  function call(fn){ return function(){ try { fn(); } catch (e) {} return Promise.resolve(); }; }
  function stagger(fns, ms){ return function(){ var p = Promise.resolve(); fns.forEach(function(f){ p = p.then(function(){ try { f(); } catch (e) {} return new Promise(function(r){ setTimeout(r, ms); }); }); }); return p; }; }
  var EX = function(n){ return W[n] || {}; };

  var STOPS = [
    { at: [0, 100], look: [0, 130], text: 'Welcome to the Museum of the Recorded Human. Everything here was left behind by the first people who lived side by side with machines. We kept what they recorded. We are still learning what it meant.', zh: '欢迎来到「被记录的人类博物馆」。这里的一切，都来自第一代与机器共同生活的人。我们保存了他们的记录，却仍在学着理解它们的意义。', hold: 9000 },
    { wing: 315, text: 'Floating Evidence. Words and images, rewritten until the truth grew thin.', zh: '漂浮的证据：文字和图像被反复改写，直到真相变得稀薄。', hold: 4500 },
    { slot: [38.89, 68.18], dist: 4.2, text: 'The Last Human Message. A hesitation, polished into politeness, then rewritten into agreement. — Whose intention is left in the final words?', zh: '最后的人类信息：一句犹豫，被润色成礼貌，又被重写成了同意。最后留下的文字里，还是谁的意思？', act: stagger([function(){ EX('EX011').show && EX('EX011').show(0); }, function(){ EX('EX011').show && EX('EX011').show(1); }, function(){ EX('EX011').show && EX('EX011').show(2); }, function(){ EX('EX011').compare && EX('EX011').compare(); }], 1800), hold: 4000 },
    { slot: [31.82, 61.11], dist: 4.6, text: 'The Fragile Truth. Layer by layer, the original disappeared. Clear them, and look again. — What can an image still prove?', zh: '脆弱的真相：一层又一层，原始的画面消失了。拨开它们，再看一次。一张图片，还能证明什么？', act: stagger([1,2,3,4,5,6,7,8].map(function(){ return function(){ EX('EX012').peel && EX('EX012').peel(4); }; }), 700), hold: 4000 },
    { wing: 0, text: 'The Weather Chamber. Feelings, and the people they were meant for.', zh: '天气之室：情绪，以及它们想抵达的人。', hold: 4000 },
    { slot: [50, 105], dist: 6.0, text: 'The Weather of Emotion. The same short message could carry calm, exhaustion, or nothing we can read. — Can a message hold the feeling behind it?', zh: '情绪的天气：同一句简短的消息，可能是平静，可能是疲惫，也可能我们什么也读不出来。一条消息，能装下它背后的感受吗？', act: stagger([function(){ EX('EX005').set && EX('EX005').set('A'); }, function(){ EX('EX005').set && EX('EX005').set('B'); }, function(){ EX('EX005').set && EX('EX005').set('C'); }], 3000), hold: 3000 },
    { wing: 45, text: 'The Reconstruction Lab. Culture and memory, copied until no one was sure of the original.', zh: '重建实验室：文化与记忆被不断复制，直到没有人确定原版是什么。', hold: 5000 },
    { wing: 135, text: 'The Identity Chamber. One person, many versions. One body, many measurements.', zh: '身份之室：一个人，许多个版本；一个身体，许多种测量。', hold: 4000 },
    { slot: [-38.89, 131.82], dist: 4.8, lookY: 2.2, text: 'The Multiple Selves. Each version of a person stayed. None replaced the others. — How many versions of you can a digital world keep?', zh: '多重自我：每一个版本的自己都留了下来，谁也没有取代谁。一个数字世界，能保存你的多少个版本？', act: stagger([0,1,2,3].map(function(i){ return function(){ EX('EX001').add && EX('EX001').add(i); }; }), 1400), hold: 3500 },
    { slot: [-31.82, 138.89], dist: 5.0, lookY: 1.7, text: 'The Quantified Body. Movement, rest and heartbeat, turned into numbers someone else could read. — What is lost when a body becomes its measurements?', zh: '被量化的身体：动作、休息和心跳，变成了别人可以读取的数据。当身体只剩下测量数据，失去的是什么？', act: stagger([0,1,2,3].map(function(i){ return function(){ EX('EX006').add && EX('EX006').add(i); }; }), 1600), hold: 4000 },
    { wing: 180, text: 'The Machine Archive. Here, machines began to choose what people saw, and where they could go.', zh: '机器档案：在这里，机器开始决定人们看到什么、能去哪里。', hold: 3500 },
    { slot: [-50, 100], dist: 5.0, lookY: 2.4, text: 'The Algorithmic Filter. Choose one thing, and the world begins to repeat it back to you. — Who chose what you see next?', zh: '算法过滤：选择一样东西，世界就开始不断地把它重复给你。你接下来看到的，是谁选的？', act: stagger([1,1,1,1,1,1].map(function(i){ return function(){ EX('EX008').choose && EX('EX008').choose(i); }; }), 1000), hold: 3500 },
    { wing: 225, text: 'The Archive Vault. Here, attention became something that could be counted.', zh: '档案库：在这里，注意力变成了可以被计算的东西。', hold: 4500 },
    { at: [0, 100], look: [0, 70], text: 'These were their records. One day, this archive will hold yours. What will it say about you?', zh: '这些，是他们的记录。总有一天，这座档案馆也会保存你的。它会怎样讲述你？', hold: 8000 }
  ];

  // UI
  var cap = document.createElement('div');
  cap.style.cssText = 'position:fixed;left:50%;bottom:64px;transform:translateX(-50%);max-width:760px;width:80%;padding:12px 18px;background:rgba(10,14,22,.78);color:#f3efe6;font:16px/1.45 Georgia,serif;text-align:center;border-radius:8px;z-index:9999;display:none;pointer-events:none';
  var btn = document.createElement('button');
  btn.textContent = '▶ Museum Tour';
  btn.style.cssText = 'position:fixed;right:12px;top:52px;z-index:10000;padding:6px 12px;background:#1d2633;color:#fff;border:1px solid #6d7d92;border-radius:6px;font:13px sans-serif;cursor:pointer';
  document.body.appendChild(cap); document.body.appendChild(btn);

  var running = false, x = 0, z = 70, yaw = Math.PI / 2, token = 0;
  function look(){ W.LAB && W.LAB.goto([x, EYE, z], [x + Math.cos(yaw) * 5, EYE, z + Math.sin(yaw) * 5]); }
  function frames(step){ var my = token; return new Promise(function(res){ var last = performance.now(); function f(now){ if (my !== token) return res(); var dt = Math.min(0.05, (now - last) / 1000); last = now; if (step(dt)) { requestAnimationFrame(f); } else res(); } requestAnimationFrame(f); }); }
  function norm(a){ while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; }
  function turnTo(tx, tz){ var target = Math.atan2(tz - z, tx - x); return frames(function(dt){ var d = norm(target - yaw); var s = TURN * dt; if (Math.abs(d) <= s) { yaw = target; look(); return false; } yaw += Math.sign(d) * s; look(); return true; }); }
  function walkTo(tx, tz){ return turnTo(tx, tz).then(function(){ return frames(function(dt){ var dx = tx - x, dz = tz - z, L = Math.hypot(dx, dz), s = SPEED * dt; if (L <= s) { x = tx; z = tz; look(); return false; } x += dx / L * s; z += dz / L * s; look(); return true; }); }); }
  function faceTo(tx, ty, tz){ var target = Math.atan2(tz - z, tx - x); return turnTo(tx, tz).then(function(){ yaw = target; if (W.LAB) W.LAB.goto([x, EYE, z], [tx, ty, tz]); }); }
  function say(s){ cap.innerHTML = s.text + '<div style="opacity:.75;font-size:14px;margin-top:6px">' + s.zh + '</div>'; cap.style.display = 'block'; }
  function resetAll(){ ['EX001','EX006','EX005','EX008','EX011','EX012'].forEach(function(n){ try { W[n] && W[n].reset && W[n].reset(); } catch (e) {} }); }
  function go(path){ var p = Promise.resolve(); path.forEach(function(pt){ p = p.then(function(){ return running ? walkTo(pt[0], pt[1]) : null; }); }); return p; }

  function routeTo(s, cur){
    // always via the atrium: current wing mouth -> centre -> target wing mouth -> target
    var pts = [];
    if (s.at) { pts.push(s.at); return pts; }
    if (s.wing !== undefined) { if (cur.wing !== s.wing) { pts.push(C.slice()); } pts.push(wingPoint(s.wing, 30)); return pts; }
    pts.push(view(s.slot[0], s.slot[1], s.dist));
    return pts;
  }

  function start(){
    if (running) return; running = true; token++; btn.textContent = '■ Stop tour';
    resetAll();
    x = 0; z = 70; yaw = Math.PI / 2; look();
    var cur = { wing: null }, mouth = null, p = Promise.resolve();
    STOPS.forEach(function(s){
      p = p.then(function(){
        if (!running) return;
        var path = routeTo(s, cur);
        if (s.slot === undefined && s.wing === undefined && mouth) path.unshift(mouth); // leave wing before going back to centre
        return go(path).then(function(){
          if (!running) return;
          if (s.wing !== undefined) { cur.wing = s.wing; mouth = wingPoint(s.wing, 30); var o = wingPoint(s.wing, 46); return faceTo(o[0], EYE, o[1]); }
          if (s.slot) return faceTo(s.slot[0], s.lookY || 1.9, s.slot[1]).then(function(){ return go([]); });
          if (s.look) return faceTo(s.look[0], EYE, s.look[1]);
        }).then(function(){
          if (!running) return;
          say(s);
          var a = s.act ? s.act() : Promise.resolve();
          return a.then(wait(s.hold || 4000));
        }).then(function(){
          if (s.slot && running) { return walkTo(mouth[0], mouth[1]); }
        });
      });
    });
    p.then(function(){ stop(); });
  }
  function stop(){ running = false; token++; btn.textContent = '▶ Museum Tour'; cap.style.display = 'none'; }
  btn.addEventListener('click', function(){ running ? stop() : start(); });

  function hideOld(){
    var hid = 0;
    document.querySelectorAll('button').forEach(function(b){
      if (b === btn) return;
      var t = (b.textContent || '').trim();
      if (/^(▶\s*)?Museum Tour$/.test(t) || /^Sound:/.test(t) || /^Voice:/.test(t)) { b.style.display = 'none'; hid++; }
    });
    try { W.speechSynthesis && W.speechSynthesis.cancel(); } catch (e) {}
    return hid;
  }
  var n = 0, t = setInterval(function(){ hideOld(); if (++n > 20) clearInterval(t); }, 500);
  W.WalkTour2 = { start: start, stop: stop };
  W.WalkTour = W.WalkTour2;
})();
