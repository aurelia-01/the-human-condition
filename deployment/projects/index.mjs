const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, ch => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[ch]);

const covers = new Map([
  ['human-condition', '/projects/images/human-condition.jpg?v=archive-door'],
  ['golden-apple', '/projects/images/golden-apple.jpg']
]);

function projectCard(project) {
  if (!/^\/experiences\/[a-z\d][a-z\d-]*(?:\/[a-z\d._-]+)*\/?$/i.test(project.href)) return '';
  const image = covers.get(project.slug);
  const cover = image ? `<img src="${image}" alt="" width="640" height="360">` : '';
  return `<li><a class="card" href="${escapeHtml(project.href)}">
    <div class="cover">${cover}</div>
    <div class="caption"><h2>${escapeHtml(project.label)}</h2><span aria-hidden="true">↗</span></div>
    <p>${escapeHtml(project.description)}</p>
  </a></li>`;
}

function page(projects) {
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#10110f"><title>Projects · 作品目录 — ZTILLA</title>
<link rel="canonical" href="https://ztilla.com/projects/">
<style>
:root{color-scheme:dark;background:#10110f;color:#efeee8;font-family:Arial,"PingFang SC","Microsoft YaHei",sans-serif}
*{box-sizing:border-box}body{margin:0}a{color:inherit;text-decoration:none}
main,nav{width:min(1160px,calc(100% - 88px));margin:auto}
nav{height:88px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #383a34}
.brand{letter-spacing:.2em;font-size:15px}.home{font-size:13px;color:#c9c9be}nav a:hover{text-decoration:underline}
header{display:flex;align-items:baseline;gap:24px;margin:58px 0 30px}
h1{font:normal clamp(52px,8vw,100px)/1 Georgia,serif;margin:0;letter-spacing:-.045em}
header span{color:#bbbcb1;letter-spacing:.16em;font-size:15px}
ul{list-style:none;padding:0;margin:0 0 70px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(22px,4vw,52px)}
.card{display:block;padding-bottom:24px;border-bottom:1px solid #383a34}
.cover{background:#262721;aspect-ratio:16/9;overflow:hidden}.cover:empty{display:none}.cover img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .35s}
.card:hover .cover img,.card:focus-visible .cover img{transform:scale(1.025)}
.caption{margin:19px 0 6px;display:flex;align-items:baseline;gap:16px;justify-content:space-between}
h2{font-size:clamp(19px,2.15vw,28px);font-weight:450;letter-spacing:-.02em;margin:0}
.caption span{color:#c3b892;font-size:21px}p{font-size:14px;line-height:1.65;margin:0;color:#b6b8ac}
a:focus-visible{outline:2px solid #d7c29c;outline-offset:6px}
@media(max-width:680px){main,nav{width:calc(100% - 40px)}nav{height:65px}header{margin-top:40px;gap:16px}ul{grid-template-columns:1fr;gap:32px}}
@media(prefers-reduced-motion:reduce){.cover img{transition:none}}
</style></head><body>
<nav aria-label="主导航"><a class="brand" href="/">ZTILLA</a><a class="home" href="/">← 首页 / Home</a></nav>
<main><header><h1 lang="en">Projects</h1><span>作品目录</span></header>
<ul aria-label="作品">${projects.map(projectCard).join('')}</ul></main></body></html>`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method !== 'GET' && request.method !== 'HEAD') return new Response(null,{status:405,headers:{Allow:'GET, HEAD'}});
    if (url.pathname === '/projects/open') return Response.redirect(new URL('/projects/', url), 302);
    if (url.pathname !== '/projects/' && url.pathname !== '/projects') return new Response('Not found', {status:404});
    const {results} = await env.DB.prepare(
      "SELECT slug,label,description,href FROM projects WHERE status='published' AND href LIKE '/experiences/%' ORDER BY sort_order DESC, created_at DESC"
    ).all();
    return new Response(request.method === 'HEAD' ? null : page(results), {headers:{
      'content-type':'text/html; charset=utf-8',
      'cache-control':'no-cache',
      'x-content-type-options':'nosniff',
      'content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; img-src 'self'; base-uri 'none'; frame-ancestors 'self'; form-action 'none'"
    }});
  }
};
