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

## Deployment and Troubleshooting

For detailed deployment instructions and troubleshooting steps, refer to the [GitHub Pages Deployment and Troubleshooting Guide](github_pages_deployment_guide.md).

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

## Additional Resources

- React documentation: https://reactjs.org/docs/getting-started.html
- GitHub Pages documentation: https://docs.github.com/en/pages
- Create React App deployment guide: https://create-react-app.dev/docs/deployment/#github-pages

For more detailed information, refer to the included documentation files in this package.
