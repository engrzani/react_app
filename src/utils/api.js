import axios from 'axios';

/**
 * Fetch GitHub projects from user's profile
 */
export const fetchGitHubProjects = async () => {
  try {
    const username = process.env.REACT_APP_GITHUB_USERNAME;
    
    if (!username || username === 'your-github-username') {
      console.log('GitHub username not configured');
      return [];
    }

    // Try using Netlify function first (to avoid rate limits)
    try {
      const response = await axios.get('/.netlify/functions/github-projects');
      return response.data.projects || [];
    } catch (funcError) {
      console.log('Netlify function not available, using direct API');
    }

    // Fallback to direct GitHub API
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
    );

    return response.data
      .filter(repo => !repo.fork && !repo.private)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: repo.description || 'No description available',
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        technologies: repo.topics || [repo.language].filter(Boolean),
        stars: repo.stargazers_count,
        forks: repo.forks_count
      }))
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
};

/**
 * Send contact form data
 */
export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post('/.netlify/functions/contact-form', formData);
    return response.data;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};

/**
 * Track analytics event
 */
export const trackEvent = (eventName, eventData = {}) => {
  try {
    // Simple console tracking - can be replaced with Google Analytics, Mixpanel, etc.
    console.log('Analytics Event:', eventName, eventData);
    
    // Example: Send to analytics service
    // if (window.gtag) {
    //   window.gtag('event', eventName, eventData);
    // }
    
    // Or store locally
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    events.push({
      name: eventName,
      data: eventData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('analytics_events', JSON.stringify(events.slice(-100))); // Keep last 100
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Get analytics summary
 */
export const getAnalytics = () => {
  try {
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    return {
      totalEvents: events.length,
      events: events,
      summary: {
        pageViews: events.filter(e => e.name === 'page_view').length,
        hireMeClicks: events.filter(e => e.name === 'hire_me_click').length,
        projectViews: events.filter(e => e.name === 'project_view').length,
        chatMessages: events.filter(e => e.name === 'chat_message').length
      }
    };
  } catch (error) {
    console.error('Error getting analytics:', error);
    return { totalEvents: 0, events: [], summary: {} };
  }
};

/**
 * Download portfolio as PDF (placeholder)
 */
export const downloadPortfolioPDF = () => {
  // This would require a PDF generation library like jsPDF or html2pdf
  alert('PDF download feature coming soon! For now, please use browser print to PDF.');
  window.print();
};
