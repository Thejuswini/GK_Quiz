import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthStyles.css';
import bg from '../assets/bglogin.png';
import userIcon from '../assets/user.png';
import lockIcon from '../assets/pwd.png';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here (if needed).
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <img src={bg} alt="background" className="background-image" />
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <img src={userIcon} alt="user icon" className="icon" />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <img src={lockIcon} alt="lock icon" className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn" onClick={handleLogin}>Login</button>
        </form>
        <p className="switch-auth">
          Don’t have an Account? <a href="/signup">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
