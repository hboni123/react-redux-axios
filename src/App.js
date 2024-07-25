import React from 'react';
// router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupForm from './component/SignupForm';
import LoginForm from './component/LoginForm';
import Dashboard from './component/Dashboard';
import PokemonDetail from './component/PokemonDetail'; 
import { useState } from 'react';

const App = () => {
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const isLoggedIn = () => {
        setisAuthenticated(true)
    }
    const isLoggedOut = () => {
        setisAuthenticated(false)
    }
    return (
        <Router>
            <Routes> 
                <Route path="/" element={<Navigate to="/signup" />} /> 
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/login" element={
                    <LoginForm isLoggedIn={isLoggedIn} />} 
                    />
                <Route path="/auth/:username/dashboard" element={
                    isAuthenticated ? <Dashboard isLoggedOut={isLoggedOut}/> : <Navigate to="/signup" />} />
                <Route path="/auth/:username/dashboard/:pokemonName" element={
                    isAuthenticated ? <PokemonDetail /> : <Navigate to="/signup" />} />
            </Routes>
        </Router>
    );
};

export default App;