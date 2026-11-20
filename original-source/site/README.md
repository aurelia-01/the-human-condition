# The Human Condition — entrance page

Museum-gate landing page for *The Human Condition* (Cambridge EduX Hackathon 2026).
One self-contained file: `index.html` (images are embedded).

## Change the 3D world link
Open `src/template.html`, find `const WORLD_URL = '';` and paste the published
MANI Engine link between the quotes. Then run `python3 src/build.py`.

## Replace an archive photo
Put a new JPG at `images/archive-NN.jpg` (4:3 looks best), then run `python3 src/build.py`.

## How "collected" works
The 3D world sends visitors back to this page with the archives they passed, e.g.
`https://www.atillz.com/human-condition/#collected-01-02-05`.
Those photos turn from faded to solid and are remembered in the visitor's browser.

## Deploy
- **GitHub Pages:** push this folder to a repository, Settings → Pages → deploy from the main branch.
  The page is then at `https://<user>.github.io/<repo>/`.
- **atillz.com (WordPress):** upload `index.html` with the hosting File Manager to
  `public_html/human-condition/` → `www.atillz.com/human-condition/`.
