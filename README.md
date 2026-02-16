# 3D-website
This repository contains a small example website that uses Three.js and Vite. It's intended for students and new developers who want a minimal starting point for 3D web experiments.

**Prerequisites**
- Node.js (LTS recommended, e.g. 16 or later). Use `node -v` to check your version.
- npm (comes with Node) or Yarn.

If you use `nvm`, a quick install/selection looks like:

```bash
nvm install --lts
nvm use --lts
```

**Quick Start (development)**
1. Clone the repo:

```bash
git clone <repo-url>
cd 3D-website
```

2. The working Vite project is inside the `story` folder. Install dependencies and start the dev server:

```bash
cd story
npm install
npm run dev
```

3. Open the URL shown by Vite (usually `http://localhost:3000`) in your browser.

**Build & Preview (production-like)**

```bash
cd story
npm run build
npm run preview
```

**Repository Structure**
- `story/` - Vite project containing the working example and `package.json`.
	- `index.html` - the page served by Vite.
	- `main.js` - the app entry point that creates the Three.js scene.
	- `style.css` - basic styles for the demo.
- `js/three.js` - a copy of Three.js (if present). The `story` project depends on `three` from npm by default.
- `tmp.html` - a scratch/testing HTML file.

If you want to edit the scene, start by opening `story/main.js` and `story/index.html`.

**Notes for Students / New Developers**
- This project uses Vite for fast development and HMR (hot module replacement).
- If you prefer to use the local `js/three.js` file instead of the npm package, update the script import in `story/index.html` (or import the file from `main.js`) accordingly.
- Keep changes small and test often by saving files while the dev server is running.

**Contributing / Workflow**
- Make a feature branch: `git checkout -b feat/your-idea`
- Install deps and run the dev server locally before opening a PR.
- Keep commits focused and add a short description of what you changed.

**Troubleshooting**
- If `npm install` fails, check your Node.js version and network connectivity.
- If the dev server port is in use, Vite will suggest another port — open the suggested URL.
