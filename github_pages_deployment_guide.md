# GitHub Pages Deployment and Troubleshooting Guide for Agents of Rumble

This guide provides comprehensive instructions for deploying the Agents of Rumble website to GitHub Pages and troubleshooting common issues.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Node.js and npm installed on your local machine

## Deployment Process

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build and deploy the website:
   ```bash
   npm run deploy
   ```
   This command will:
   - Build the project with `npm run build`
   - Push the contents of the `build` folder to the `gh-pages` branch

3. Configure GitHub Pages:
   - Go to your GitHub repository
   - Navigate to Settings > Pages
   - Set the Source to "Deploy from a branch"
   - Select the `gh-pages` branch and the `/ (root)` folder
   - Click Save

4. Your website will be available at `https://agentsofrumble.github.io/website` after a few minutes.

## Troubleshooting

### Missing Images

1. Verify all image paths in the code start with `/assets/` and match the actual file structure.
2. Check that the `homepage` field in `package.json` matches your GitHub Pages URL.
3. Ensure all image files are included in the repository and have been pushed.

### Build Errors

1. Run `npm run typecheck` to check for TypeScript errors.
2. Fix any TypeScript errors before attempting to build.
3. If necessary, modify the build script in `package.json` to ignore TypeScript errors during build:
   ```json
   "build": "CI=false react-scripts build"
   ```

### Deployment Errors

1. Ensure you have proper permissions to push to the repository.
2. Check if the `gh-pages` branch already exists and contains content.
3. Try running the deployment steps manually:
   ```bash
   npm run build
   npx gh-pages -d build
   ```

### 404 Errors

1. Verify GitHub Pages settings:
   - Go to repository Settings > Pages.
   - Ensure the source is set to the "gh-pages" branch.
   - Check that the site is being built from the root directory.

2. Check repository visibility:
   - Ensure the repository is public, or GitHub Pages is enabled for private repositories.

3. Wait for deployment:
   - GitHub Pages can take several minutes to update after pushing changes.
   - Check the "Actions" tab to see if the deployment is still in progress.

## Updating the Website

To update the website after making changes:

1. Make your changes to the codebase.
2. Commit the changes to the main branch.
3. Run `npm run deploy` to rebuild and redeploy the website.
4. The changes will be visible on the GitHub Pages site after a few minutes.

## Maintaining Image Assets

When adding new mini images or updating existing ones:

1. Place mini images in `/public/assets/images/minis/`.
2. Place talent images in `/public/assets/images/talents/`.
3. Update the corresponding data files in `/src/data/db/`.
4. Ensure all image references in the data files use the correct paths.
5. Commit and deploy the changes.
