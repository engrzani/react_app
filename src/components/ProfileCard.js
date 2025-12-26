import React from 'react';
import { profileData } from '../data/profileData';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img 
          src={profileData.avatar} 
          alt={profileData.name}
          className="profile-avatar"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150?text=Profile';
          }}
        />
        <h1 className="profile-name">{profileData.name}</h1>
        <h2 className="profile-title">{profileData.title}</h2>
        <p className="profile-bio">{profileData.bio}</p>
      </div>

      <div className="profile-skills">
        <h3>Skills & Expertise</h3>
        <div className="skills-grid">
          {profileData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      <div className="profile-achievements">
        <h3>Achievements</h3>
        <ul>
          {profileData.achievements.map((achievement, index) => (
            <li key={index}>✨ {achievement}</li>
          ))}
        </ul>
      </div>

      <div className="profile-contact">
        <a 
          href={profileData.contact.upwork} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Hire Me on Upwork
        </a>
        <a 
          href={profileData.contact.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
