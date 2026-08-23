# Publish Danica’s Portfolio on GitHub Pages

You will use the included `.github/workflows/deploy.yml` file. It builds the portfolio and publishes it whenever you update the `main` branch.

## Before you begin

1. Download and unzip `Danica-Bautista-portfolio-github.zip`.
2. Sign in to [GitHub](https://github.com/).
3. On a Mac, press **Command + Shift + .** in Finder to show hidden files. You must include the `.github` folder when uploading.

## Put the website on GitHub

1. On GitHub, click the **+** button in the upper-right corner, then choose **New repository**.
2. Name it something simple, such as `danica-portfolio`.
3. Choose **Public** if you want employers to see the portfolio.
4. Leave **Add a README file**, **Add .gitignore**, and **Choose a licence** unchecked.
5. Click **Create repository**.
6. On the next page, click **uploading an existing file**.
7. Drag in **everything inside** the unzipped portfolio folder, including the hidden `.github` folder. Do **not** upload the ZIP itself.
8. Scroll down and click **Commit changes**.

## Turn on the live website

1. In the repository, click **Settings**.
2. In the left-hand menu, click **Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Click the **Actions** tab at the top of the repository.
5. Open the workflow called **Deploy static portfolio to GitHub Pages**. Wait for its green tick.
6. Return to **Settings → Pages** and click the URL shown under **Your site is live at**.

> The first deployment can take a few minutes. Later edits work the same way: change a file on the `main` branch, commit it, then wait for the Actions workflow to finish.

## If the site does not appear

Check that the `.github/workflows/deploy.yml` file was uploaded and that the Actions workflow has a green tick. If it shows a red cross, open the workflow run to see the first failed step.
