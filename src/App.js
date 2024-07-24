import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupForm from './component/SignupForm';
import LoginForm from './component/LoginForm';
import Dashboard from './component/Dashboard'; // Ensure this file exists
import PokemonDetail from './component/PokemonDetail'; // Import the new component


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/signup" />} /> 
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/auth/:username/dashboard" element={<Dashboard />} />
                <Route path="/auth/:username/dashboard/:pokemonName" element={<PokemonDetail />} /> {/* Add route for Pokémon detail */}
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
