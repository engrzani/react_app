# 🚀 Upwork Profile Assistant Bot

An interactive portfolio and client assistant bot built with React and deployed on Netlify.

## ✨ Features

- **Portfolio Showcase**: Displays your projects, skills, and achievements
- **FAQ / Client Assistant**: Interactive chatbot answering common questions
- **Contact / Hire Me**: Easy contact integration with email/forms
- **GitHub Integration**: Dynamically fetch and display your GitHub projects
- **Responsive Design**: Works perfectly on all devices

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Netlify Serverless Functions
- **Hosting**: Netlify
- **API Integration**: GitHub API, optional OpenAI API

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my_upwork_bot
```

2. Install dependencies:
```bash
npm install
```

3. Run locally:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## 🌐 Netlify Deployment

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Netlify will auto-detect React and deploy
4. Configure environment variables in Netlify dashboard:
   - `GITHUB_USERNAME` - Your GitHub username
   - `GITHUB_TOKEN` - (Optional) GitHub personal access token
   - `OPENAI_API_KEY` - (Optional) For AI-powered chat

## 📝 Configuration

### Customize Your Profile

Edit `src/data/profileData.js` to update:
- Your name, title, and bio
- Skills and expertise
- Portfolio projects
- FAQ responses
- Contact information

### Add Your GitHub Projects

The bot automatically fetches public repositories from GitHub. Update your GitHub username in the environment variables.

## 🎨 Customization

- **Colors & Styles**: Edit `src/styles/App.css`
- **Bot Responses**: Modify `src/utils/botLogic.js`
- **Components**: Customize in `src/components/`

## 📱 Features Breakdown

### 1. Portfolio Showcase
- Automatic GitHub project fetching
- Display skills and technologies
- Downloadable portfolio (optional)

### 2. Interactive Chatbot
- Predefined FAQ responses
- Natural language understanding
- Optional OpenAI integration for advanced responses

### 3. Contact Integration
- "Hire Me" button
- Email integration
- Google Forms support
- WhatsApp/Telegram links

### 4. Analytics (Optional)
- Track visitor interactions
- Monitor "Hire Me" clicks
- View project engagement

## 🔧 Serverless Functions

Located in `netlify/functions/`:
- `github-projects.js` - Fetches GitHub repositories
- `contact-form.js` - Handles contact form submissions

## 📄 License

MIT License - Feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Built with ❤️ using GitHub Copilot and deployed on Netlify

---

**Ready to showcase your Upwork profile? Deploy now!**
