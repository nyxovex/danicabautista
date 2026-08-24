# Updating Danica’s GitHub Portfolio

This folder is a **source-code update package** for the existing `nyxovex/danicabautista` repository. It includes the correct GitHub Pages workflow and the approved 2026 date, selected-work, credential-image, and interaction updates.

## Safest update method: GitHub Desktop

Open the existing repository in GitHub Desktop. Copy the contents of this package into that repository, allowing Finder to replace matching files. Do not copy `node_modules`, `dist`, `.git`, or any hidden Manus folders. In GitHub Desktop, review the changed files, enter a message such as `Update portfolio content and credentials`, and click **Commit to main** then **Push origin**.

GitHub Actions will then automatically run the tests, type check, build, and publish the static site. Open the **Actions** tab on GitHub and wait for **Deploy static portfolio to GitHub Pages** to show a green tick.

## Browser-only update method

On the GitHub repository page, use **Add file → Upload files** and upload the visible files and the `client` folder from this package. GitHub’s browser uploader can omit hidden folders such as `.github`; therefore, leave the repository’s existing `.github/workflows/deploy.yml` in place. If it has ever been removed, recreate it using `DEPLOY-WORKFLOW-COPY.md`.

## Important checks

The workflow must remain at `.github/workflows/deploy.yml`. Do not create `static.yml`, and do not add `version: 10` under `pnpm/action-setup@v4`, because that previous combination prevents GitHub Actions from starting the build.
