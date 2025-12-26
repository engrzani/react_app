# Useful Commands Reference

## Development Commands

### Start Development Server
```bash
npm start
```
Opens http://localhost:3000 in your browser with hot reload

### Build for Production
```bash
npm run build
```
Creates optimized production build in `build/` folder

### Run Tests
```bash
npm test
```
Launches test runner in interactive watch mode

### Eject Configuration (Not Recommended)
```bash
npm run eject
```
**Warning:** This is a one-way operation. Only do this if you need full control over webpack config.

## Git Commands

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### Connect to GitHub
```bash
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

### Regular Updates
```bash
git add .
git commit -m "Your commit message"
git push
```

## Netlify CLI Commands

### Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Login to Netlify
```bash
netlify login
```

### Initialize Netlify Site
```bash
netlify init
```

### Deploy to Netlify
```bash
# Deploy draft
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Open Netlify Dashboard
```bash
netlify open
```

### View Site
```bash
netlify open:site
```

### View Function Logs
```bash
netlify functions:log
```

### Test Functions Locally
```bash
netlify dev
```

## Environment Setup

### Create .env file
```bash
copy .env.example .env
```

Then edit `.env` with your values:
```env
REACT_APP_GITHUB_USERNAME=your-github-username
REACT_APP_EMAIL=your-email@example.com
REACT_APP_UPWORK_PROFILE=https://www.upwork.com/freelancers/~yourprofile
```

## Dependency Management

### Install New Package
```bash
npm install package-name
```

### Install Dev Dependency
```bash
npm install --save-dev package-name
```

### Update Dependencies
```bash
npm update
```

### Check for Outdated Packages
```bash
npm outdated
```

### Audit Security Issues
```bash
npm audit
npm audit fix
```

## File Operations

### Create Component
```bash
# Windows PowerShell
New-Item -Path "src/components/NewComponent.js" -ItemType File
New-Item -Path "src/components/NewComponent.css" -ItemType File
```

### View Project Structure
```bash
tree /F
```

## Testing & Debugging

### Check for Errors
Open Developer Tools in browser (F12)

### View Console Logs
```javascript
console.log('Debug message', variable);
```

### Test Contact Form (Local Development)
The contact form requires Netlify Functions. Use `netlify dev` instead of `npm start` to test locally with functions.

### Test GitHub Integration
Make sure `REACT_APP_GITHUB_USERNAME` is set in your `.env` file

## Production Checks

### Test Production Build Locally
```bash
npm run build
npx serve -s build
```

### Optimize Images
Before adding images to `public/assets/`, optimize them:
- Use https://tinypng.com
- Or install imagemin: `npm install -g imagemin-cli`

### Check Bundle Size
```bash
npm run build
# Check the size report in the console
```

## Troubleshooting Commands

### Clear npm Cache
```bash
npm cache clean --force
```

### Reinstall node_modules
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Fix Permissions Issues
```bash
# Run as administrator if needed
```

### Check Node/npm Versions
```bash
node --version
npm --version
```
Recommended: Node 18+ and npm 9+

## Useful VS Code Extensions

- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Path Intellisense

## Quick Fixes

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port
$env:PORT=3001; npm start
```

### Build Fails
1. Check for syntax errors
2. Verify all imports are correct
3. Make sure all dependencies are installed
4. Clear cache and rebuild

### Netlify Deploy Fails
1. Check build logs in Netlify dashboard
2. Verify environment variables are set
3. Test build locally first
4. Check file paths are correct (case-sensitive!)

---

## Quick Start (Summary)

```bash
# 1. Install dependencies
npm install

# 2. Create .env file
copy .env.example .env

# 3. Edit profile data
# Edit src/data/profileData.js

# 4. Start development server
npm start

# 5. Build for production
npm run build

# 6. Deploy to Netlify
netlify deploy --prod
```

---

**Pro Tip:** Keep this file handy for quick reference during development!
