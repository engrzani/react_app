import React, { useState, useEffect } from 'react';
import { profileData } from '../data/profileData';
import { fetchGitHubProjects } from '../utils/api';
import './Portfolio.css';

const Portfolio = () => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    loadGitHubProjects();
  }, []);

  const loadGitHubProjects = async () => {
    try {
      const projects = await fetchGitHubProjects();
      setGithubProjects(projects);
    } catch (error) {
      console.error('Error loading GitHub projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const allProjects = [...profileData.projects, ...githubProjects];

  const technologies = [...new Set(
    allProjects.flatMap(p => p.technologies || [])
  )];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(p => 
        p.technologies?.includes(activeFilter)
      );

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Showcase of my recent projects and work</p>
      </div>

      <div className="portfolio-filters">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        {technologies.slice(0, 6).map(tech => (
          <button
            key={tech}
            className={`filter-btn ${activeFilter === tech ? 'active' : ''}`}
            onClick={() => setActiveFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading projects...</p>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id || index} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image || 'https://via.placeholder.com/400x250?text=Project'} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x250?text=Project';
                  }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title || project.name}</h3>
                <p>{project.description}</p>
                
                {project.technologies && (
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                )}

                <div className="project-links">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project →
                    </a>
                  )}
                  {project.html_url && (
                    <a 
                      href={project.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredProjects.length === 0 && !loading && (
        <div className="no-projects">
          <p>No projects found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
