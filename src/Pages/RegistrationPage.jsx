import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registration.css'; 

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/login'); 
  };

  const handleLogin = () => {
    navigate('/login'); 
  };

  return (
    <div className="register-container">
      <div className="minion-greeting">
        Bello! Welcome, Minion! Let's create your account.
      </div>
      <div className="register-wrapper">
        <div className="register-box">
          <h2 className="register-title">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="youremail@minion.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-input"
                placeholder="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-end">
              <button type="submit" className="register-button">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="register-wrapper">
          <button onClick={handleLogin} className="login-link">
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
