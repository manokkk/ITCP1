import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link here
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = () => {
    const { name, email, password, agree } = formData;

    // Validation check
    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    if (!agree) {
      alert('Please agree to the terms of use & privacy policy.');
      return;
    }

    alert(`Sign up successful! \nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className='signup'>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input
            type="text"
            placeholder='Name'
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder='Email Address'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleSubmit}>Continue</button>
        <div className="text-links">
          <Link to="/login" className="text-link">
            Already have an account? Log in
          </Link>
        </div>

        <div className="signup-agree">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleInputChange}
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
