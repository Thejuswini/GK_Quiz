import React from 'react';
import '../styles/AuthStyles.css';
import pwd from '../assets/pwd.png';
import user from '../assets/user.png';
import bg from '../assets/bglogin.png';
import email from '../assets/email.png';

function Signup() {
  return (
    <div className="auth-container">
      <img src={bg} alt="background" className="background-image" />
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <img src={user} alt="user icon" className="icon" />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <img src={email} alt="email icon" className="icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <img src={pwd} alt="lock icon" className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p className="switch-auth">
          Already have an Account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
