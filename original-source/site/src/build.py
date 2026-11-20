"""Rebuild index.html from src/template.html + images/ + src/column-capital.svg.
Run from the project folder:  python3 src/build.py"""
import base64, json, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
t = (root / 'src/template.html').read_text(encoding='utf-8')
cap = (root / 'src/column-capital.svg').read_text(encoding='utf-8')
imgs = {}
for n in range(1, 13):
    k = f'{n:02d}'
    b = (root / f'images/archive-{k}.jpg').read_bytes()
    imgs[k] = 'data:image/jpeg;base64,' + base64.b64encode(b).decode()
out = t.replace('__CAP__', cap).replace('__IMGS__', json.dumps(imgs))
(root / 'index.html').write_text(out, encoding='utf-8')
print('index.html rebuilt:', len(out), 'bytes')
