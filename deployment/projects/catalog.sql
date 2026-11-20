INSERT INTO projects (id,slug,label,description,href,status,position_x,position_y,animation_delay_ms,sort_order,is_featured)
VALUES ('d800517a-8308-442c-84ae-65fe39027f32','projects','Projects','Interactive works · 互动作品目录','/projects/','published','50%','44%',700,75,1)
ON CONFLICT(slug) DO NOTHING;
UPDATE projects SET href='/projects/open' WHERE slug='projects' AND id='d800517a-8308-442c-84ae-65fe39027f32';
UPDATE projects SET label='人类处境 · The Human Condition', is_featured=0, updated_at=CURRENT_TIMESTAMP
WHERE slug='human-condition' AND href='/experiences/human-condition/' AND label='Projects · 人类处境';
