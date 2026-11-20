(function(){
  var W = window, S = [31.82, 61.11], C = [0, 100];
  var made = false, arrows = [];
  function protoNamed(obj, name){ var p = Object.getPrototypeOf(obj); while (p) { if (p.constructor && p.constructor.name === name) return p.constructor; p = Object.getPrototypeOf(p); } return null; }
  function build(){
    var ed = W.__M3D_EDITOR__; if (!ed || !ed.scene) return false;
    var basic = null, anyMesh = null;
    ed.scene.traverse(function(o){
      if (!o.isMesh || !o.geometry || !o.material || Array.isArray(o.material)) return;
      if (!anyMesh) anyMesh = o;
      if (!basic && o.material.type === 'MeshBasicMaterial') basic = o;
    });
    var src = basic || anyMesh; if (!src) return false;
    var Geo = protoNamed(src.geometry, 'BufferGeometry') || src.geometry.constructor;
    var Attr = src.geometry.getAttribute('position').constructor;
    var Mesh = src.constructor;
    var dx = C[0] - S[0], dz = C[1] - S[1], L = Math.hypot(dx, dz); dx /= L; dz /= L;
    var fx = -dx, fz = -dz;          // forward: towards the exhibit
    var rx = -fz, rz = fx;           // right
    var pts = [[0, 0.55], [0.45, 0.05], [0.16, 0.05], [0.16, -0.5], [-0.16, -0.5], [-0.16, 0.05], [-0.45, 0.05]];
    var tris = [[0,1,6],[2,3,4],[2,4,5]];
    [4.4, 5.6, 6.8].forEach(function(dist, i){
      var cx = S[0] + dx * dist, cz = S[1] + dz * dist, k = 1.3;
      var v = [];
      tris.forEach(function(t){ t.forEach(function(j){ var a = pts[j][0] * k, b = pts[j][1] * k; v.push(cx + rx * a + fx * b, 0.16, cz + rz * a + fz * b); }); });
      var g = new Geo();
      g.setAttribute('position', new Attr(new Float32Array(v), 3));
      g.computeVertexNormals && g.computeVertexNormals();
      var m = src.material.clone();
      if (m.map) m.map = null;
      if (m.color) m.color.setHex(0xc9a45c);
      if (m.emissive) m.emissive.setHex(0xc9a45c);
      m.transparent = true; m.opacity = 0.8; m.side = 2; m.depthWrite = false; m.needsUpdate = true;
      var mesh = new Mesh(g, m);
      mesh.name = 'GUIDE012_ARROW_' + i;
      mesh.position.set(0, 0, 0); mesh.rotation.set(0, 0, 0); mesh.scale.set(1, 1, 1);
      ed.scene.add(mesh);
      arrows.push({ m: mesh, i: i });
    });
    return true;
  }
  function tick(){
    if (!made) { try { made = build(); } catch (e) { made = true; } }
    var done = W.EX012 && W.EX012.clarity && W.EX012.clarity() >= 100;
    var t = performance.now() / 1000;
    arrows.forEach(function(a){ a.m.visible = !done; a.m.material.opacity = 0.3 + 0.55 * Math.max(0, Math.sin(t * 3 - a.i * 0.9)); });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
