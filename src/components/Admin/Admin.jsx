import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (password === 'pass-free') {
      setIsLoggedIn(true);
    } else {
      alert('Password is incorrect');
    }
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      alert(response.data);
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
  };

  return (
    <div className='passw'>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div className="password-input-container">
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password"
            />
            <button
              type="button" 
              className="toggle-password-btn" 
              onClick={handlePasswordToggle}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div className="success">
          <h2>Welcome!</h2>
          <p>You have successfully logged in.</p>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default Admin;