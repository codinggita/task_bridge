import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Signup.css';
import home_i from '../assets/home_i.png';
import logo from '../assets/Logo.png';

const Signup = () => {
    const [formData, setFormData] = useState({
        team_code: '',
        full_name: '',
        title: '',
        email: '',
        role: 'admin', // Default role
        password: '',
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://task-bridge-eyh5.onrender.com/auth/signup', formData);
            setMessage(response.data.message);
            navigate('/login'); // Redirect to login after successful signup
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error during signup');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-left">
                <div className="logo-container">
                    <img src={logo} alt="Task Bridge Logo" className="logo" />
                </div>
                
                <div className="signup-content">
                    <h3>Start for free</h3>
                    <h1>Create new account</h1>
                    
                    <div className="role-section">
                        <h4>Role</h4>
                        <div className="radio-container">
                            <input 
                                type="radio" 
                                id="admin" 
                                name="role" 
                                value="Admin"
                                checked={formData.role === 'Admin'}
                                onChange={handleChange}
                            />
                            <label htmlFor="admin">Admin</label>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="full_name"
                                placeholder="Full Name"
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                            />
                            <span className="icon"></span>
                        </div>

                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <span className="icon"></span>
                        </div>

                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <span className="icon"></span>
                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                name="team_code"
                                placeholder="Create Team Code Ex-tema@321"
                                value={formData.team_code}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Hidden title field with default value if needed */}
                        <input
                            type="hidden"
                            name="title"
                            value={formData.title || 'Member'}
                            onChange={handleChange}
                        />

                        <button type="submit" className="signup-button">
                            Sign - Up
                        </button>
                    </form>

                    {message && <div className="message">{message}</div>}
                </div>
            </div>
            
            <div className="signup-right">
                <img src={home_i} alt="Team Collaboration" />
            </div>
        </div>
    );
};

export default Signup;
