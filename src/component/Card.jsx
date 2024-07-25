import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Card.css';

const Card = ({ username, name, url }) => {
    const navigate = useNavigate();
    const [pokemonData, setPokemonData] = useState(null);

    // Gets url data 

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await axios.get(url);
                // set pokinmondata
                setPokemonData(response.data); 
            } catch (err) {
                console.error("Failed to fetch data:", err);
            }
        };

        fetchPokemonData();
    }, [url]);  // Fetch data when `url` changes

    const handleClick = () => {
        navigate(`/auth/${username}/dashboard/${name}`);
    };

    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Capitalize the name of the pokimon
    const displayName = capitalizeFirstLetter(name);

    return (
        <div className="card" onClick={handleClick}>
            {pokemonData && (
                <>
                    <img src={pokemonData.sprites.front_default} alt={displayName} className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{displayName}</h2>
                        <div className="card-details">
                            <p className="card-detail">Height: {pokemonData.height / 10} meters</p>
                            <p className="card-detail">Weight: {pokemonData.weight / 10} kg</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
