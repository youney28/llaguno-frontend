import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'banana@minion.com' && password === 'banana123') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert('Wrong Password or Email');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Bello! Welcome, Minion!</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="banana@minion.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="primary-button">Login</button>

          <div className="forgot-password-wrapper">
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <div className="register-wrapper">
            <p className="text-sm text-center">
              Don't have an account?{' '}
              <Link to="/register" className="register-link">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
