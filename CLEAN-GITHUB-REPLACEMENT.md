# Clean GitHub Pages Replacement

This package contains one workflow only: `.github/workflows/deploy.yml`. It builds the portfolio and publishes the `dist` folder. Do **not** create or keep `.github/workflows/static.yml`, because that workflow publishes the repository files and shows this README instead of the portfolio.

## Replace the old files

1. On GitHub, open the repository **nyxovex/danicabautista**.
2. Open the `.github` folder, then `workflows`, then the file named `static.yml`.
3. Click the bin / **Delete this file** button. Write `remove wrong Pages workflow` as the message, then commit the deletion.
4. Return to the repository’s main **Code** page.
5. Delete the remaining old project files, or use GitHub Desktop to replace them with the extracted files from this package. Keep the repository name unchanged.
6. Upload every file and folder from this fresh package, including the hidden `.github` folder. GitHub’s web uploader can include it if the extracted package is selected as a whole.
7. Commit the upload to the `main` branch.

## Turn on the correct publication method

1. Open **Settings**, then **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the **Actions** tab. Wait for **Deploy static portfolio to GitHub Pages** to finish with a green tick.
4. Open `https://nyxovex.github.io/danicabautista/` and refresh once. The glassmorphic portfolio should appear instead of this documentation page.

The portfolio is public. Its visible email address, phone number, and certificate previews will be accessible to visitors.
