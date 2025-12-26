# 🚀 Quick Start Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
copy .env.example .env
```

2. Edit `.env` and add your information:
```env
REACT_APP_GITHUB_USERNAME=your-github-username
REACT_APP_EMAIL=your-email@example.com
REACT_APP_UPWORK_PROFILE=https://www.upwork.com/freelancers/~yourprofile
REACT_APP_TELEGRAM=your-telegram-username
REACT_APP_WHATSAPP=your-whatsapp-number
```

## Step 3: Customize Your Profile

Edit `src/data/profileData.js` to update:
- Your name, title, and bio
- Skills and expertise
- Portfolio projects
- FAQ responses
- Contact information

## Step 4: Add Your Images

Place your images in `public/assets/`:
- `avatar.jpg` - Your profile photo
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots

## Step 5: Run Locally

```bash
npm start
```

Visit http://localhost:3000 to see your bot!

## Step 6: Deploy to Netlify

### Option A: Via Netlify UI
1. Push code to GitHub
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Netlify will auto-detect React settings
6. Add environment variables in Site settings
7. Click "Deploy site"

### Option B: Via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## Step 7: Configure Serverless Functions (Optional)

For contact form email functionality:

1. In Netlify dashboard, go to Site settings → Environment variables
2. Add:
   - `EMAIL_USER` - Your Gmail address
   - `EMAIL_PASSWORD` - Gmail app password (not regular password)
   - `SENDER_NAME` - Your name

For Gmail app password:
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Generate App Password
4. Use that password for EMAIL_PASSWORD

## Optional Enhancements

### Add OpenAI Integration
1. Get API key from https://platform.openai.com
2. Add `OPENAI_API_KEY` to Netlify environment variables
3. Uncomment code in `netlify/functions/openai-chat.js`
4. Install OpenAI package in functions:
```bash
cd netlify/functions
npm install openai
```

### Add Google Analytics
Add to `public/index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## Troubleshooting

### Build Fails
- Make sure all dependencies are installed: `npm install`
- Check for syntax errors in your code
- Clear cache: `npm cache clean --force`

### Netlify Functions Not Working
- Make sure functions are in `netlify/functions/` directory
- Check environment variables are set in Netlify
- View function logs in Netlify dashboard

### GitHub Projects Not Loading
- Verify `REACT_APP_GITHUB_USERNAME` is set correctly
- Check GitHub username is public
- GitHub API has rate limits (60 requests/hour without token)

## File Structure

```
my_upwork_bot/
├── public/               # Static files
│   ├── assets/          # Images and icons
│   ├── index.html       # HTML template
│   └── manifest.json    # PWA manifest
├── src/
│   ├── components/      # React components
│   │   ├── ChatBox.js
│   │   ├── ContactForm.js
│   │   ├── Navigation.js
│   │   ├── Portfolio.js
│   │   └── ProfileCard.js
│   ├── data/
│   │   └── profileData.js  # Your profile data
│   ├── pages/           # Page components
│   │   ├── Home.js
│   │   ├── PortfolioPage.js
│   │   └── ContactPage.js
│   ├── styles/          # CSS files
│   ├── utils/           # Utility functions
│   │   ├── api.js
│   │   └── botLogic.js
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
├── netlify/
│   └── functions/       # Serverless functions
│       ├── github-projects.js
│       ├── contact-form.js
│       └── openai-chat.js
├── netlify.toml         # Netlify config
├── package.json         # Dependencies
└── README.md            # Documentation
```

## Need Help?

- Check the main README.md for detailed information
- Review component files for inline comments
- Test locally before deploying
- Check Netlify build logs for deployment issues

## Next Steps

1. ✅ Customize your profile data
2. ✅ Add your images
3. ✅ Test locally
4. ✅ Push to GitHub
5. ✅ Deploy to Netlify
6. ✅ Share your bot URL!

---

**Your bot URL will be:** `https://your-site-name.netlify.app`

Enjoy your new Upwork Profile Assistant Bot! 🎉
