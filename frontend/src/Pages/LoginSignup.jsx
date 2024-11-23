import React, { useState } from 'react';
import SignUp from '../Components/SignUp/SignUp';
import Login from '../Components/Login/Login';



const LoginSignup = () => {
  // State to manage which component to show (Login or SignUp)
  const [isLogin, setIsLogin] = useState(true);

  // Function to handle switching between Login and SignUp
  const handleSwitchToLogin = () => setIsLogin(true);
  const handleSwitchToSignUp = () => setIsLogin(false);

  return (
    <div className='cart'>

      
      {/* Conditionally render Login or SignUp based on state */}
      {isLogin ? <Login /> : <SignUp />}

      {/* Navbar or switch buttons */}
      <p className="loginsignup-login">
        {isLogin ? (
          <>
            Don't have an account? <span onClick={handleSwitchToSignUp}>Sign up here</span>
          </>
        ) : (
          <>
            Already have an account? <span onClick={handleSwitchToLogin}>Login here</span>
          </>
        )}
      </p>
    </div>
  );
}

export default LoginSignup;
