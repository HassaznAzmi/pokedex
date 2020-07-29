import React from 'react';

import './Card.css';

export default function Card(props) {
    const { card, setModalOpen, setCurrCard } = props

    return (
        <div
            className="card-container"
            onClick={() => {
                setModalOpen(true)
                setCurrCard(card)
            }}
        >
            <img key={card.id} src={card.imageUrlHiRes} alt="" className="card" />
            <div className="card-info">
                <p className="card-name">{card.name}</p>
                <p>{card.series}</p>
            </div>
        </div>
    );
}