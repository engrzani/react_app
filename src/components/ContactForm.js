import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'one-time'
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      // Call Netlify serverless function
      const response = await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          projectType: 'one-time'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try email directly.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <div className="success-icon">✓</div>
        <h2>Message Sent Successfully!</h2>
        <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
        <button 
          className="btn btn-primary"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Let's Work Together!</h2>
        <p>Ready to bring your project to life? Get in touch and let's discuss how I can help.</p>

        <div className="contact-methods">
          <div className="contact-method">
            <h3>📧 Email</h3>
            <a href={`mailto:${profileData.contact.email}`}>
              {profileData.contact.email}
            </a>
          </div>

          <div className="contact-method">
            <h3>💼 Upwork</h3>
            <a 
              href={profileData.contact.upwork} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Hire Me on Upwork
            </a>
          </div>

          {profileData.contact.telegram && (
            <div className="contact-method">
              <h3>✈️ Telegram</h3>
              <a 
                href={`https://t.me/${profileData.contact.telegram}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                @{profileData.contact.telegram}
              </a>
            </div>
          )}

          {profileData.contact.whatsapp && (
            <div className="contact-method">
              <h3>📱 WhatsApp</h3>
              <a 
                href={`https://wa.me/${profileData.contact.whatsapp}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          )}
        </div>

        <div className="quick-stats">
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Job Success</div>
          </div>
          <div className="stat">
            <div className="stat-number">2-4h</div>
            <div className="stat-label">Response Time</div>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send Me a Message</h3>
        
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="one-time">One-time Project</option>
            <option value="ongoing">Ongoing Contract</option>
            <option value="consultation">Consultation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Brief description of your project"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Project Details *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Tell me about your project requirements, timeline, and budget..."
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary btn-submit"
          disabled={sending}
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
