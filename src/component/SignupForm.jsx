import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import { setUserData } from '../redux/userSlice';
import '../styles/SignupForm.css';

const SignupForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);


    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        // Store user data in Redux
        //const userExists = users.some(user => user.username === username);

        if (username === user.username && password === user.password) {
            alert('Username already exists. Please choose a different username.');
        } else {
            // Store user data in Redux
            dispatch(setUserData({ username, password }));

            // Redirect to login page
            navigate('/login');
        }

    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login Here</Link></p> {/* redirects to login */}
        </div>
    );
};

export default SignupForm;
