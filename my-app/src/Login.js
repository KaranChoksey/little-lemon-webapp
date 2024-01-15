import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
   // alert("Login Successful")
    Swal.fire({
        title: "Login Successful!",
       // text: "You clicked the button!",
        icon: "success"
      });
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic here
  };
  const navigate = useNavigate();
  const handleSignUp = () => {
    // Add logic for redirecting to the sign-up page or showing a sign-up modal
    
    navigate('/signup')
    console.log('Redirect to Sign Up');
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p className="signup-text">
        Don't have an account?{' '}
        <button className="signup-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
