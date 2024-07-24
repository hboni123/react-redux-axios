import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Card from './Card'; // Ensure this path is correct
import '../styles/Dashboard.css';

const Dashboard = () => {
    const { username } = useParams();
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);
    const [prevUrl, setPrevUrl] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemonData = async (url) => {
            try {
                const response = await axios.get(url);
                setPokemonData(response.data.results);
                setNextUrl(response.data.next);
                setPrevUrl(response.data.previous);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonData('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    }, []);

    const handleNext = () => {
        if (nextUrl) {
            setLoading(true);
            fetchPokemonData(nextUrl);
        }
    };

    const handlePrevious = () => {
        if (prevUrl) {
            setLoading(true);
            fetchPokemonData(prevUrl);
        }
    };

    const handleLogout = () => {
        navigate('/login');
    };

    const fetchPokemonData = async (url) => {
        try {
            const response = await axios.get(url);
            setPokemonData(response.data.results);
            setNextUrl(response.data.next);
            setPrevUrl(response.data.previous);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <div className="dashboard">
            <nav className="navbar">
                <div className="navbar-content">
                    <span className="welcome-message">Welcome, {username}</span>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <h1>Pokémon Dashboard</h1>
            <div className="pokemon-list">
                {pokemonData.map(pokemon => (
                    <Card
                        key={pokemon.name}
                        name={pokemon.name}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`} // Update image URL as needed
                        height={0} // Placeholder, not used
                        weight={0} // Placeholder, not used
                    />
                ))}
            </div>
            <div className="pagination-buttons">
                <button
                    className="pagination-button"
                    onClick={handlePrevious}
                    disabled={!prevUrl}
                >
                    Previous
                </button>
                <button
                    className="pagination-button"
                    onClick={handleNext}
                    disabled={!nextUrl}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
