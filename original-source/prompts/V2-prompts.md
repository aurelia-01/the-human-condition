# 今晚发给 MANI AI 的 V2 提示词（已成功 Applied）

用法：在 V2 编辑器的 MANI AI 面板粘贴 → Send → 等 "Applied N change(s)" → Save → Test → Publish。

---

## PendingExhibitsA（002 / 003 / 004）

Add a NEW runtime module named PendingExhibitsA (do not modify other modules). Read window.MUSEUM.wings; each wing has slots [{ex, pos:[x,y,z]}]. Build simple, clean, clickable installations on/around the slots for exhibits "002", "003" and "004" (each installation fits within a 6 m radius of its slot, stays off the walking centreline and doorways). Use the museum palette (warm white, pale stone, glass, champagne metal, warm light). Clicking works in Test/Walk mode with the mouse (raycast from the camera through the pointer on pointerdown/click; ignore Sprites; also accept a click when the player presses E while looking at the object within 6 m). Also: hide (visible=false) the groups "IdentitySculpturesV2 · 001 Multiple Selves" and "IdentitySculpturesV2 · 006 The Quantified Body" and any of their labels/lights. Keep everything lightweight, updates via the scene's normal frame update, pause when the editor is in edit mode, and expose window.EXHIBIT_EVENTS = an EventTarget; dispatch new CustomEvent('interact',{detail:{ex:'002'}}) etc. whenever the visitor interacts with an exhibit.

002 ATTENTION AUCTION HOUSE: a low round dais (radius 4 m) with a seated simple human silhouette in the centre, and 6 glowing bidding pillars around it in a half-ring (1 m diameter, 1.6 m tall, emissive tops), labelled Social, Entertainment, News, Work, Ads, AI. All pillars pulse softly. Click a pillar: it rises by 0.6 m (up to 3 clicks), its glow brightens, the others dim and sink slightly; a thin beam connects the winning pillar to the figure's head. A small panel above shows the attention split as six percentage bars. A "Reset" plate resets.

003 CULTURAL MUTATION TREE: a sculptural tree 6 m tall of champagne metal: trunk, 5 main branches, each with 6-8 square image "leaves" (0.45 m planes, double-sided) using canvas textures (abstract variations of one motif, each branch a different palette). At the base a glowing plinth labelled ORIGINAL. Click a leaf: it floats toward the viewer, enlarges to 1.8 m for 4 s with caption "Variant B-3", then returns. Click a branch or the trunk: that branch's leaves glow and sway.

004 THE CHOICE MACHINE: a retro-futurist arcade cabinet (2.4 m tall, 1.4 m wide, pale satin shell, champagne trim) with a big glowing wheel of 7 segments: Career, Love, Learning, Money, Identity, Stability, Freedom, a pointer, a small screen, a big red SPIN button plus RE-SPIN and CHANGE PRIORITY. SPIN/RE-SPIN: wheel spins 3-4 s and lands on a random segment; screen shows "The machine suggests: <Segment>". CHANGE PRIORITY reshuffles segment sizes. Lights chase around the cabinet edge while spinning.

---

## PendingExhibitsB（007 / 009 / 010 + 引导面板 + 计数 + 离开按钮）

Add a NEW runtime module named PendingExhibitsB (do not modify other modules). Same conventions as PendingExhibitsA (slots from window.MUSEUM.wings, within 6 m of slot, mouse click + E key, ignore Sprites in raycasts and set raycast to a no-op on any Sprite you create, normal frame update, paused in edit mode). Reuse window.EXHIBIT_EVENTS and dispatch CustomEvent('interact',{detail:{ex}}) on every interaction.

007: pale seated human figure facing a 2.6 m translucent milky AI figure; 4 floor buttons memory / comfort / conversation / empathy; each press adds face features (eyes, nose, lips, then up to 12 drifting face fragments), features drift and re-form; Reset plate.

009: freestanding wall 8 x 3.5 m with 6 framed cases (2x3), each a canvas image pair Version A / Version B (Pikachu tail tip, Monopoly man monocle, Curious George tail, C-3PO leg, "Luke, I am your father" / "No, I am your father", "56个星座" / "56个民族"). Click cycles A → B → A+B ghost overlay → A.

010: 5x5 transparent glass maze (opacity 0.06, 2.4 m tall), entrance toward hall centreline, glowing EXIT arch on far side; walls block walking; within 1.5 m a wall glows pale blue with grid lines then fades; "Reveal Rules" pedestal button makes all walls glow 3 s.

GUIDE PANEL for all 12: within 9 m of a slot show bottom-centre panel: number, English title, Chinese title on its own line, English line and Chinese line on separate lines (texts = see template.html A array; 002 The Attention Auction / 注意力拍卖场, 003 The Culture Tree / 文化变异树, 007 The Face That Keeps Forming / 不断成形的面孔 …).

RECORDS + EXIT: found on interact, or (001/005/006/008/011/012) standing within 5 m for 2 s. Top-left "Records found n / 12" + "已找回 n / 12"; toast "Record 0X found" / "已找回第 0X 份记录". Top-right button "Leave the museum · 离开博物馆" → 'https://claude.ai/artifact/4hzcjY79eftX8qm9Mp8Z9C' + '#collected-01-05-12' (found ids), try window.top.location.href, else window.open.

---

## 剩余作品提示词模板（还没发）

Add a NEW runtime module named RemainingExhibitsC (do not modify other modules). Same conventions as PendingExhibitsA/B (slots from window.MUSEUM.wings, within 6 m of slot, mouse click + E, Sprites raycast no-op, normal frame update, paused in edit mode, dispatch window.EXHIBIT_EVENTS 'interact' {ex}).
005: a glowing screen showing "I'm fine." and below it the line "我没事。"; buttons A / B / C; A = light blue drizzle, B = heavy dark rain, C = rain stops, warm sunlight; change the Weather Chamber rain density and light colour.
008: 8 screens with different patterns; click one → others gradually turn into the same pattern; Reset button.
011: a large glass panel with buttons Original / AI-edited / AI-generated, each showing a short message version.
012: a short corridor of 5 image panels getting clearer as you walk forward; the last one shows only an image of two strangers sharing an umbrella, no text.
