import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} Upwork Profile Assistant Bot. Built with React & Netlify.</p>
          <p className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            {' • '}
            <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">Upwork</a>
            {' • '}
            <a href="/contact">Contact</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
