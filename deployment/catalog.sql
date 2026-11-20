INSERT INTO projects
  (id, slug, label, description, href, status, position_x, position_y, animation_delay_ms, sort_order, is_featured)
VALUES
  ('8d09970a-069a-4db5-bf5c-dc74e3f42131', 'human-condition', 'Projects · 人类处境', 'The Human Condition — An Archive from 2046. 推开档案馆的门，进入三维展厅。', '/experiences/human-condition/', 'published', '50%', '44%', 700, 80, 1)
ON CONFLICT(slug) DO NOTHING;
