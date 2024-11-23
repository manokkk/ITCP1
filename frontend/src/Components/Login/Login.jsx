import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for programmatic navigation
import { Link } from 'react-router-dom';  // Import Link for routing
import './Login.css';  // Your regular CSS import

// If you're using CSS modules:
// import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ email, password });

    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password,
      });

      if (response.data.user && response.data.token) {
        setErrorMessage('');
        alert('Login successful');
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        setShouldRedirect(true);
      } else {
        setErrorMessage(response.data.message || 'Invalid login credentials');
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
      setErrorMessage(errorMsg);
    }
  };

  useEffect(() => {
    if (shouldRedirect) {
      const timer = setTimeout(() => {
        navigate('/');  // Redirect to home page
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [shouldRedirect, navigate]);

  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
        
        <div className="text-links">
          <Link to="/signup" className="text-link">
            Don't have an account? Register now!
          </Link>
        </div>

        <div className="login-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
