import React, { useState } from 'react';
import './App.css';
import backgroundImg from './background.png';
import iphoneImg from './iphone.png';
import logoImg from './logo.png';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubscribeClick = () => {
    setIsExpanded(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store in local storage
    const subscribers = JSON.parse(localStorage.getItem('heloys-subscribers') || '[]');
    subscribers.push({
      name: formData.name,
      email: formData.email,
      date: new Date().toISOString()
    });
    localStorage.setItem('heloys-subscribers', JSON.stringify(subscribers));
    
    // Clear form and collapse
    setFormData({ name: '', email: '' });
    setIsExpanded(false);
    alert('Thank you for subscribing!');
  };
  return (
    <div className="app">
      <div className="full-background">
        <img src={backgroundImg} alt="HELOYS Background" className="background-img desktop-bg" />
        <img src={iphoneImg} alt="HELOYS Mobile Background" className="background-img mobile-bg" />
        <div className="logo-section">
          <img src={logoImg} alt="HELOYS Logo" className="brand-logo" />
        </div>
        
        <div className="subscription-section">
          <div className={`gradient-box ${isExpanded ? 'expanded' : ''}`}>
            <p className="coming-soon">COMING SOON</p>
            
            <div className="form-container">
              <button 
                type="button" 
                className="water-gradient-button initial-button"
                onClick={handleSubscribeClick}
              >
                SUBSCRIBE
              </button>
              
              <form className={`subscription-form ${isExpanded ? 'show' : ''}`} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME..."
                  className="form-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL..."
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit" className="water-gradient-button submit-button">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
          
          <div className="social-icon">
            <a href="https://www.instagram.com/heloysco/" target="_blank" rel="noopener noreferrer" className="instagram-link">
              <svg className="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

