# GitHub Pages Deployment Configuration

The Agents of Rumble website is configured for GitHub Pages deployment with the following settings:

## Current Configuration
- **Homepage URL**: `https://agentsofrumble.github.io/website`
- **Deployment Scripts**: 
  - `predeploy`: `npm run build`
  - `deploy`: `gh-pages -d build`
- **Dependencies**:
  - `gh-pages`: `^6.1.0` (already installed)

## Recommended Configuration Updates

To ensure proper GitHub Pages deployment with all assets visible, I recommend the following:

1. Verify the repository name matches the homepage URL path
2. Ensure all image paths use relative URLs starting with `/assets/`
3. Configure GitHub repository settings to use GitHub Pages
4. Set the GitHub Pages source to the `gh-pages` branch

## Deployment Process

1. Build the project locally with `npm run build`
2. Deploy to GitHub Pages with `npm run deploy`
3. Verify the deployment at `https://agentsofrumble.github.io/website`

## Troubleshooting

If images are not visible after deployment:
- Check that image paths in the code match the actual file paths
- Verify that the `homepage` field in package.json matches your GitHub Pages URL
- Ensure the GitHub repository is set to publish from the gh-pages branch
