(function(){
  var GATE_URL = 'https://claude.ai/artifact/4hzcjY79eftX8qm9Mp8Z9C';
  var KEY = 'thc_visited';
  var W = window;
  var visited = {};
  var slots = [];
  var ui = document.createElement('div');
  ui.style.cssText = 'position:fixed;left:10px;right:10px;bottom:8px;z-index:10001;display:flex;justify-content:space-between;align-items:center;pointer-events:none;font:12px sans-serif';
  var left = document.createElement('div');
  left.style.cssText = 'pointer-events:auto;background:rgba(20,26,36,.85);color:#fff;border:1px solid #6d7d92;border-radius:6px;padding:5px 10px';
  var count = document.createElement('span');
  var reset = document.createElement('button');
  reset.textContent = 'Reset';
  reset.style.cssText = 'margin-left:8px;background:none;border:0;color:#9fc3ff;text-decoration:underline;cursor:pointer;font:12px sans-serif';
  var leave = document.createElement('button');
  leave.textContent = 'Leave the museum · 离开博物馆';
  leave.style.cssText = 'pointer-events:auto;background:rgba(20,26,36,.85);color:#fff;border:1px solid #6d7d92;border-radius:6px;padding:6px 12px;cursor:pointer;font:12px sans-serif';
  left.appendChild(count); left.appendChild(reset); ui.appendChild(left); ui.appendChild(leave);
  document.body.appendChild(ui);

  function ids(){ return Object.keys(visited).sort(); }
  function update(){ var n = ids().length; count.textContent = 'Exhibits visited ' + n + ' / 12 · 已到访 ' + n + ' / 12'; }
  function save(){ try { W.localStorage.setItem(KEY, JSON.stringify(ids())); } catch (e) {} }
  try { (JSON.parse(W.localStorage.getItem(KEY) || '[]') || []).forEach(function(id){ visited[id] = true; }); } catch (e) {}
  update();
  reset.addEventListener('click', function(){ visited = {}; try { W.localStorage.removeItem(KEY); } catch (e) {} update(); });
  leave.addEventListener('click', function(){
    var list = ids();
    var url = GATE_URL + (list.length ? '#collected-' + list.join('-') : '');
    try { W.top.location.href = url; } catch (e) { W.open(url, '_blank'); }
  });

  function loadSlots(){
    var R = W.RING; if (!R || !R.wings) return false;
    slots = [];
    R.wings.forEach(function(w){ (w.slots || []).forEach(function(s){ var p = s.p || s.pos || s.position; if (p && s.ex) slots.push({ id: String(s.ex).slice(-2), x: p[0], z: p[2] }); }); });
    return slots.length > 0;
  }
  function hideOld(){
    document.querySelectorAll('button, div, span').forEach(function(el){
      if (ui.contains(el)) return;
      var t = (el.textContent || '').trim();
      if (el.tagName === 'BUTTON' && (/^Reset visits$/.test(t) || /^Leave the archive/.test(t))) { el.style.display = 'none'; if (el.parentElement && el.parentElement !== document.body) el.parentElement.style.display = 'none'; }
      if (el.tagName === 'SPAN' && /^Archives visited/.test(t)) { el.style.display = 'none'; }
    });
  }
  var n = 0, h = setInterval(function(){ hideOld(); if (++n > 30) clearInterval(h); }, 500);

  setInterval(function(){
    if (!slots.length && !loadSlots()) return;
    var L = W.LAB; if (!L || !L.player) return;
    var p = L.player(); if (!p) return;
    var changed = false;
    slots.forEach(function(s){
      if (visited[s.id]) return;
      var dx = p.x - s.x, dz = p.z - s.z;
      if (dx * dx + dz * dz < 64) { visited[s.id] = true; changed = true; try { L.toast('Exhibit ' + s.id + ' recorded · 已记录'); } catch (e) {} }
    });
    if (changed) { save(); update(); }
  }, 300);
})();
