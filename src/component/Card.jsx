import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ name, image, height, weight }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/auth/username/dashboard/${name}`);
    };

    return (
        <div className="card" onClick={handleClick}>
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{name}</h2>
                <div className="card-details">
                    <p className="card-detail">Height: {height / 10} meters</p>
                    <p className="card-detail">Weight: {weight / 10} kg</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
