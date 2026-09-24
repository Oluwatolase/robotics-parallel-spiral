# Publish as an installable web app with GitHub Pages

This package contains no executable launcher.

## 1. Create a repository
Create a GitHub repository, for example:

`robotics-parallel-spiral`

Public is simplest for GitHub Free Pages.

## 2. Upload these files to the repository root
Upload everything from this folder:

- index.html
- styles.css
- app.js
- manifest.webmanifest
- sw.js
- icons/
- .nojekyll

## 3. Turn on GitHub Pages
In the repository:

Settings → Pages

Under **Build and deployment**:
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`
- Save

GitHub will show a public URL similar to:

`https://YOUR-USERNAME.github.io/robotics-parallel-spiral/`

## 4. Install in Microsoft Edge
Open the GitHub Pages URL in Edge.

Then use either:
- the install/app icon in the address bar, or
- `...` → `More tools` → `Apps` → `Install this site as an app`

You can then pin it to Start or the taskbar.

## Notes
- GitHub Pages provides HTTPS, which supports normal PWA/service-worker behavior.
- The app stores pathway progress locally in the browser.
- Core files are cached for offline use after the first successful load.
- No .bat, .exe, PowerShell, or other local executable is included.
