# Sai Prakash Reddy: 3D portfolio

Live at **https://prakash6018.github.io**

A single-page 3D portfolio built with React 18, Vite, TypeScript, Tailwind CSS, Three.js (react-three-fiber + drei) and Framer Motion.

- **Hero**: interactive 3D desktop PC you can rotate.
- **Experience**: animated vertical timeline.
- **Skills**: floating 3D tech balls, plus the full skill list.
- **Projects**: tilt cards for professional work and open-source repos.
- **Contact**: rotating 3D planet over a starfield; the form opens your email app.

## Run locally

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Edit content

Almost everything you'd change lives in two files:

- `src/constants/config.ts`: name, hero text, section copy, email, phone and links.
- `src/constants/index.ts`: services, tech balls, skill groups, experience timeline and projects.

Project cards use a screenshot when `image` is set, otherwise a gradient cover from `cover`.
Keep the number of tech balls at 13 or fewer: each ball is its own WebGL canvas, and browsers stop rendering after about 16.

## Deploy

`.github/workflows/deploy.yml` builds every push and deploys `main` to GitHub Pages.
In the repo's **Settings → Pages**, **Source** must be set to **GitHub Actions**.

## Credits

- Based on the MIT-licensed [3D portfolio template](https://github.com/ladunjexa/reactjs18-3d-portfolio) by Liron Abutbul (see `LICENSE-TEMPLATE`).
- "Gaming Desktop PC" by [Yolala1232](https://sketchfab.com/Yolala1232) and "Stylized planet" by [cmzw](https://sketchfab.com/cmzw), licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).
