const axios = require('axios');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const username = process.env.REACT_APP_GITHUB_USERNAME || process.env.GITHUB_USERNAME;
    
    if (!username) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'GitHub username not configured' })
      };
    }

    const headers = {};
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    // Fetch user's repositories
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`,
      { headers }
    );

    // Filter and format projects
    const projects = response.data
      .filter(repo => !repo.fork && !repo.private)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: repo.description || 'No description available',
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        technologies: repo.topics && repo.topics.length > 0 
          ? repo.topics 
          : [repo.language].filter(Boolean),
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updated_at: repo.updated_at
      }))
      .slice(0, 10);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ projects })
    };
  } catch (error) {
    console.error('GitHub API Error:', error);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ 
        error: 'Failed to fetch GitHub projects',
        message: error.message 
      })
    };
  }
};
