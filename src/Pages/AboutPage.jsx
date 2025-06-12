import React from 'react';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="minions-social-header">
        <h1>Follow the Minions on Social Media!</h1>
        <p>Keep up with our banana-loving, mischief-making adventures</p>
      </div>

      <div className="social-media-container">
        <div className="social-platform">
          <div className="platform-icon instagram"></div>
          <h2>Instagram</h2>
          <p>@OfficialMinions</p>
          <p>Daily photos and videos of our crazy adventures!</p>
          <span className="social-link disabled-link">Follow Us</span>
        </div>

        <div className="social-platform">
          <div className="platform-icon twitter"></div>
          <h2>Twitter</h2>
          <p>@MinionsTweets</p>
          <p>Short, funny thoughts in Minion language. Bello!</p>
          <span className="social-link disabled-link">Tweet With Us</span>
        </div>

        <div className="social-platform">
          <div className="platform-icon facebook"></div>
          <h2>Facebook</h2>
          <p>@MinionsOfficial</p>
          <p>Events, games, and behind-the-scenes content</p>
          <span className="social-link disabled-link">Like Our Page</span>
        </div>

        <div className="social-platform">
          <div className="platform-icon tiktok"></div>
          <h2>TikTok</h2>
          <p>@MinionsOfficial</p>
          <p>Dance challenges and hilarious short videos</p>
          <span className="social-link disabled-link">Watch Our Videos</span>
        </div>
      </div>

      <div className="minions-newsletter">
        <h2>Join the Minion Mayhem Newsletter!</h2>
        <p>Get exclusive updates, wallpapers, and fun content</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" required disabled />
          <button type="submit" disabled>Banana Subscribe!</button>
        </form>
      </div>
    </div>
  );
}

export default AboutPage;
