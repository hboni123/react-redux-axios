import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'; 
import '../styles/LoginForm.css';

const LoginForm = ({isLoggedIn}) => {
    const navigate = useNavigate();
    // Gets user data
    const user = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gets form data
        const username = e.target.username.value;
        const password = e.target.password.value;

        // Check if the entered username and password match the stored data
        if (username === user.username && password === user.password) {
            // Redirect to the dashboard if authentication is successful
            isLoggedIn();
            navigate(`/auth/${username}/dashboard`);
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Need an account? <Link to="/signup">Sign Up Here</Link></p> {/* Link to the signup page */}
        </div>
    );
};

export default LoginForm;
