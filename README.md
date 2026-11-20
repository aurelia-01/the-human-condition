# The Human Condition — An Archive from 2046

[进入展览 · Enter the exhibition](https://ztilla.com/experiences/human-condition/) · [ZTILLA 作品目录](https://ztilla.com/archive) · [MANI 展馆](https://maniengine.com/t/614paRvZRsEu)

从 ZTILLA 的作品目录打开本作，在门页进入 MANI 展馆。门页在浏览器中保存参观记录。

## 作品文件

- `index.html` 是从 Claude 导出的原版开场，包含门的图像、动画和进入展馆的链接。GitHub Pages 直接发布这个文件。
- `engine/scene-original.html` 保存此次发布前的 MANI 导出。`engine/scene.html` 存放展馆导出，供后续维护。
- `engine/assets/models/` 保存导出引用的项目模型。`engine/assets/manifest.json` 记录原始地址、文件大小和 SHA-256。
- `SHA256SUMS` 可用于核对所列作品文件的完整性。

线上展馆由 MANI 提供。原始导出保留了 MANI 模型与运行库的线上地址，运行需要网络连接。

## 发布与回程

ZTILLA 首页的 **Projects · 人类处境** 和 Archive 中的作品共用一条目录记录。门页部署在 `/experiences/human-condition/`，推门会在新标签页打开 MANI 的公开世界。离馆时，展馆把已参观的记录编号带回门页。

右上角的 **导览 / Guided tour** 从入口大厅开始，依次前往 12 件作品。点展品、拖动视角、滚轮或按移动键会暂停导览。点 **Resume · 继续** 可重新跟随。

`deployment/catalog.sql` 是 ZTILLA 作品目录的记录。若要重新发布门页，先在仓库根目录运行 `node deployment/prepare.mjs`，再使用有 ZTILLA 区域权限的 Cloudflare 账户运行 `wrangler deploy --config deployment/wrangler.jsonc`。展馆由 MANI 编辑器独立发布到同一分享链接。
