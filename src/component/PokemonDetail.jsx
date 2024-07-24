import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/PokemonDetail.css';

const PokemonDetail = () => {
    const { pokemonName } = useParams(); 
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                setPokemon(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonData();
    }, [pokemonName]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    if (!pokemon) return <p>No Pokémon data available</p>;

    return (
        <div className="pokemon-detail-container">
            <div className="pokemon-detail-card">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-detail-image" />
                <div className="pokemon-detail-info">
                    <h1 className="pokemon-detail-name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                    <p className="pokemon-detail-text">Height: {pokemon.height / 10} meters</p>
                    <p className="pokemon-detail-text">Weight: {pokemon.weight / 10} kg</p>
                </div>
            </div>
            <button className="pokemon-detail-back-button" onClick={() => navigate(-1)}>Back to Dashboard</button>
        </div>
    );
};

export default PokemonDetail;
