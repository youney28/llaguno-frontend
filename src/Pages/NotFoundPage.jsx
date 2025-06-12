import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFoundPage.css';
import confusedMinnion from '../assets/confusedminnion.png'; // Correct JPG import

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <main className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">
        <div className="not-found-image-container">
          <img 
            src={confusedMinnion} 
            alt="Confused Minnion" 
            className="not-found-image" 
            loading="lazy" 
          />
        </div>
          <span className="highlight">Bello!</span> Page Not Found
        </h1>
        
        
        <p className="not-found-message">
          Banana! The page you're looking for has disappeared like Gru's cookies!
        </p>
        
        <button 
          onClick={handleGoHome}
          className="not-found-button"
          aria-label="Return to home page"
        >
          Take Me Home
        </button>
      </div>
    </main>
  );
}

export default NotFoundPage;