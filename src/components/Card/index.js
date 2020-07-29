import React from 'react';

import './Card.css';

export default function Card(props) {
    const { card } = props

    return (
        <>
            <img key={card.id} src={card.imageUrlHiRes} alt="" className="card" />
            <div className="card-info">
                <p className="card-name">{card.name}</p>
                <p>{card.series}</p>
            </div>
        </>
    );
}