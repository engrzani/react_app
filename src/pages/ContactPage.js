import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { trackEvent } from '../utils/api';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    trackEvent('page_view', { page: 'contact' });
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Let's Connect!</h1>
        <p>I'm excited to hear about your project and discuss how I can help</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
