# GitHub Pages Backup and Clean Installation

This backup contains the complete static portfolio source and one tested GitHub Pages workflow: `.github/workflows/deploy.yml`. The workflow installs the project’s own declared pnpm version, runs tests and type checks, builds the Vite site, and deploys the generated `dist` folder.

> Do **not** create or keep `.github/workflows/static.yml`. That generic workflow uploads the repository root, which causes GitHub Pages to show the README instead of the portfolio.

## Recommended installation: GitHub Desktop

GitHub Desktop preserves hidden folders automatically, so this is the simplest long-term method. Create an empty GitHub repository, clone it with GitHub Desktop, copy **all** extracted backup files into the cloned folder, then commit and push. The included `.github/workflows/deploy.yml` will be pushed correctly.

## Website-only installation: GitHub in a browser

GitHub's browser upload does not reliably include hidden folders such as `.github`. Use the following process:

1. Create a new empty GitHub repository. Keep the default branch named `main`.
2. Extract this backup ZIP file. Upload and commit all the **visible** files and folders, such as `client`, `package.json`, and `README.md`. Do not upload the ZIP itself.
3. On GitHub, select **Add file → Create new file**.
4. Name the new file exactly `.github/workflows/deploy.yml`.
5. Open the visible `DEPLOY-WORKFLOW-COPY.md` file in the backup, copy the YAML content from its code block, and paste it into GitHub's editing area.
6. Commit the new workflow file directly to `main`.
7. Open **Settings → Pages** and set **Source** to **GitHub Actions**.
8. Open the **Actions** tab. Wait for **Deploy static portfolio to GitHub Pages** to finish with a green tick.
9. Open `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`. It may take a short time to update after the green tick appears.

The portfolio is public. Its visible email address, phone number, and certificate previews will be accessible to visitors.
