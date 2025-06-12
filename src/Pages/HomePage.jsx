// HomePage.jsx
import React from 'react';
import '../styles/HomePage.css';
import minions1 from '../assets/minions1.png';
import poster1 from '../assets/poster1.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';
import poster4 from '../assets/poster4.jpg';
import poster5 from '../assets/poster5.jpg';
import poster6 from '../assets/poster6.jpg';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="minion-layout">
          <img src={minions1} alt="Minions" className="minion-side-img" />
          <div className="description-container">
            <h1 className="home-title">Welcome to the Wonderful World of Minions!</h1>
            <p className="minion-description">
              Minions are small, yellow, mischievous creatures from the <em>Despicable Me</em> franchise,
              known for their childlike innocence, adorable appearance, and hilarious antics. With their
              unique language called "Minionese," a blend of various languages and gibberish, they provide
              endless entertainment. These creatures are loyal followers of their villainous leader, Gru,
              though they have a tendency to get into trouble due to their playful and sometimes reckless
              nature. Their infectious laughter and antics have made them beloved by audiences of all ages,
              and they have starred in their own movies, <em>Minions</em> (2015) and <em>Minions: The Rise of Gru</em> (2022),
              further cementing their status as cultural icons!
            </p>
          </div>
        </div>
      </div>

      {/* Poster Gallery */}
      <div className="gallery-section">
        <h2 className="section-title">Minions Movie Collection</h2>
        <div className="poster-gallery">
          <div className="poster-card">
            <img src={poster1} alt="Poster 1" className="poster-img" />
          </div>
          <div className="poster-card">
            <img src={poster2} alt="Poster 2" className="poster-img" />
          </div>
          <div className="poster-card">
            <img src={poster3} alt="Poster 3" className="poster-img" />
          </div>
          <div className="poster-card">
            <img src={poster4} alt="Poster 4" className="poster-img" />
          </div>
          <div className="poster-card">
            <img src={poster5} alt="Poster 5" className="poster-img" />
          </div>
          <div className="poster-card">
            <img src={poster6} alt="Poster 6" className="poster-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;