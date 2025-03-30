# GitHub Pages Troubleshooting Guide for Agents of Rumble

If you encounter issues with your GitHub Pages deployment of the Agents of Rumble website, this guide will help you identify and resolve common problems.

## Missing Images

### Problem: Images don't appear on the deployed site

**Possible causes:**
1. Incorrect image paths in the code
2. Images not included in the build
3. Homepage URL configuration issue

**Solutions:**

1. **Check image paths:**
   - Ensure all image paths in the data files start with `/assets/`
   - Example correct path: `/assets/images/minis/footman.png`
   - Incorrect path example: `assets/images/minis/footman.png` (missing leading slash)

2. **Verify public directory structure:**
   - Confirm that images are in the correct location:
     ```
     public/
     └── assets/
         └── images/
             ├── minis/
             │   └── [mini images here]
             └── talents/
                 └── [talent images here]
     ```

3. **Check homepage configuration:**
   - Ensure the `homepage` field in `package.json` matches your GitHub Pages URL
   - If your repository is at `github.com/agentsofrumble/website`, the homepage should be:
     ```json
     "homepage": "https://agentsofrumble.github.io/website"
     ```
   - If your repository has a different name, update accordingly

4. **Rebuild and redeploy:**
   - After fixing paths, rebuild and redeploy:
     ```bash
     npm run deploy
     ```

## Build Errors

### Problem: Build fails with TypeScript errors

**Solutions:**

1. **Run TypeScript check:**
   ```bash
   npm run typecheck
   ```

2. **Fix identified errors:**
   - Address each error shown in the TypeScript check
   - Common issues include:
     - Missing type definitions
     - Incompatible types
     - Unused variables

3. **Temporarily bypass TypeScript errors:**
   - If you need to deploy quickly, modify the build script in `package.json`:
     ```json
     "build": "CI=false react-scripts build"
     ```

### Problem: Build fails with dependency issues

**Solutions:**

1. **Clean install dependencies:**
   ```bash
   rm -rf node_modules
   npm install
   ```

2. **Check for conflicting dependencies:**
   ```bash
   npm ls
   ```

## Deployment Errors

### Problem: `gh-pages` deployment fails

**Solutions:**

1. **Check GitHub credentials:**
   - Ensure you have proper permissions to push to the repository
   - Verify your Git credentials are configured correctly

2. **Manual deployment:**
   ```bash
   npm run build
   npx gh-pages -d build -m "Deploy website"
   ```

3. **Force deployment:**
   ```bash
   npx gh-pages -d build --no-history
   ```

### Problem: Deployed site shows 404 error

**Solutions:**

1. **Verify GitHub Pages settings:**
   - Go to repository Settings > Pages
   - Ensure source is set to "gh-pages" branch
   - Check that the site is being built from the root directory

2. **Check repository visibility:**
   - Ensure the repository is public, or GitHub Pages is enabled for private repositories

3. **Wait for deployment:**
   - GitHub Pages can take several minutes to update after pushing changes
   - Check the "Actions" tab to see if the deployment is still in progress

## Routing Issues

### Problem: Routes work locally but show 404 when deployed

**Solutions:**

1. **Use HashRouter instead of BrowserRouter:**
   - In `src/index.tsx` or your routing configuration, replace:
     ```jsx
     import { BrowserRouter } from 'react-router-dom';
     // ...
     <BrowserRouter>
     ```
     with:
     ```jsx
     import { HashRouter } from 'react-router-dom';
     // ...
     <HashRouter>
     ```

2. **Add a 404.html redirect:**
   - Create a `public/404.html` file that redirects to the main page
   - This is a common solution for single-page applications on GitHub Pages

## Performance Issues

### Problem: Website loads slowly

**Solutions:**

1. **Optimize images:**
   - Compress all images to reduce file size
   - Consider using WebP format for better compression

2. **Implement code splitting:**
   - Use React's lazy loading and Suspense for components
   - Split your bundle into smaller chunks

3. **Enable caching:**
   - Add appropriate cache headers to your assets
   - Consider using a CDN for faster delivery

Remember that most GitHub Pages issues can be resolved by ensuring correct configuration, proper file paths, and following the deployment process carefully.
