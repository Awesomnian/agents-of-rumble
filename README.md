# Agents of Rumble - Deployment Instructions

This document provides comprehensive instructions for deploying the Agents of Rumble website to GitHub Pages.

## Package Contents

This deployment package contains:

1. **Source Code**
   - React application with TypeScript
   - Complete mini data for all 92 Warcraft Rumble minis
   - Placeholder images for all minis and talents

2. **Documentation**
   - GitHub Pages configuration guide
   - Deployment instructions
   - Troubleshooting guide
   - Project build log

3. **Build Files**
   - Pre-built application ready for deployment

## Deployment Steps

### 1. GitHub Repository Setup

1. Create a new GitHub repository named `website` under the `agentsofrumble` organization
   - If using a different organization or repository name, update the `homepage` field in `package.json`

2. Initialize the repository locally and connect it to GitHub:
   ```bash
   cd /path/to/deployment_package
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/agentsofrumble/website.git
   git push -u origin main
   ```

### 2. Deploy to GitHub Pages

1. Install dependencies if not already done:
   ```bash
   npm install
   ```

2. Deploy the website:
   ```bash
   npm run deploy
   ```

3. Configure GitHub Pages in the repository settings:
   - Go to your GitHub repository
   - Navigate to Settings > Pages
   - Set the Source to "Deploy from a branch"
   - Select the `gh-pages` branch and the `/ (root)` folder
   - Click Save

4. Your website will be available at `https://agentsofrumble.github.io/website` after a few minutes

## Updating the Website

To update the website after making changes:

1. Make your changes to the codebase
2. Commit the changes to the main branch
3. Run `npm run deploy` to rebuild and redeploy the website

## Adding New Minis

When new minis are released in Warcraft Rumble:

1. Add mini images to `/public/assets/images/minis/`
2. Add talent images to `/public/assets/images/talents/`
3. Update the mini data in `/src/data/db/minisData.ts`
4. Commit and deploy the changes

## Troubleshooting

If you encounter issues during deployment, refer to the included `github_pages_troubleshooting_guide.md` for detailed solutions to common problems.

## Additional Resources

- React documentation: https://reactjs.org/docs/getting-started.html
- GitHub Pages documentation: https://docs.github.com/en/pages
- Create React App deployment guide: https://create-react-app.dev/docs/deployment/#github-pages

For more detailed information, refer to the included documentation files in this package.
