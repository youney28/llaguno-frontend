import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ArticlePage.css';
import logoMinions from '../assets/logoMinions.png';
import minions2 from '../assets/minions2.png';
import newmovie from '../assets/newmovie.jpg'; // Updated import path

function ArticlePage() {
  const navigate = useNavigate();

  const handlePersonalitiesClick = () => {
    navigate('/articles/list');
  };

  const handleMovieClick = () => {
    navigate('/not-found');
  };

  return (
    <div className="article-page">

      <div className="article-header">
        <img src={logoMinions} alt="Minions Logo" className="minions-logo" />
      </div>

      <div className="article-intro" onClick={handlePersonalitiesClick} style={{ cursor: 'pointer' }}>
        <div className="minion-side-img">
          <img src={minions2} alt="Minions Characters" className="minion6-img" />
        </div>

        <div className="article-text">
          <h1 className="article-title">The Unique Personalities of the Minions: A Closer Look at 6 Fan-Favorites</h1>
          <p className="minion-description">
            The Minions, with their playful antics and infectious laughter, have become beloved characters in the <em>Despicable Me</em> universe. Although they are all yellow, small, and mischievous, each Minion has a distinct personality that adds charm and humor to the films. Let's take a closer look at the unique traits of six of the most memorable Minions.
          </p>
        </div>
      </div>

      <div className="article-intro movie-container" onClick={handleMovieClick} style={{ cursor: 'pointer' }}>
        <div className="minion-side-img">
          <img src={newmovie} alt="Minions New Movie" className="minion6-img" />
        </div>

        <div className="article-text">
          <h1 className="article-title">Minions: The Rise of Gru - The Latest Adventure</h1>
          <p className="minion-description">
            The Minions are back in their newest cinematic adventure! <em>Minions: The Rise of Gru</em> takes us back to the 1970s, where young Gru dreams of becoming the world's greatest supervillain. Join Kevin, Stuart, Bob, and the rest of the Minion crew as they help Gru in his first evil schemes. Discover all the hilarious moments, new characters, and exciting plot twists in this latest installment of the Minions saga.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;