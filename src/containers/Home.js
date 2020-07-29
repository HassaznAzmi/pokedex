import React, { useState, useEffect } from 'react';
import pokemon from 'pokemontcgsdk';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Card from '../components/Card';
import CardModal from '../components/CardModal';
import Pokemon from '../assets/images/grasspokemon.png';

import './Home.css';


export default function Home() {
    const [input, setInput] = useState ('');
    const [pokemonList, setPokemonList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currCard, setCurrCard] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        searchPokemon(input)
    }, [])

    const searchPokemon = () => {
        setLoading(true)
        pokemon.card.where({name: input})
        .then(result => {
            setPokemonList(result);
            setLoading(false);
        })
    }

    const cards = pokemonList.map(card => {
        return (
            <div
                className="card-container"
                onClick={() => {
                    setModalOpen(true);
                    setCurrCard(card)
                }}
            >
                <Card key={card.id} card={card} alt="" />
            </div>
        )
    })

    return (
        <div className="home-container">
            <h1 className="header">PokeDex</h1>

            <div className="splash-container">
                <img className="splash" src={Pokemon} alt=""/>
            </div>

            <div className="search-container">
                <TextField
                    placeholder="Enter Pokemon Name"
                    variant="outlined"
                    className="search-box" 
                    onChange={e => setInput(e.target.value)}
                    onKeyPress={e => { if(e.key === 'Enter') searchPokemon() }}
                />
                <Button className="search-btn" variant="contained" color="primary" onClick={searchPokemon}>
                    Search
                </Button>
            </div>

            {pokemonList.length === 0
            && !loading
            && <p className="not-found-text">If that is a Pokemon, I have not caught them all. Please try again.</p>
            }

            {loading
            ? <CircularProgress size={60} />
            : <div className="cards-grid">
                {cards}
            </div>}

            <CardModal modalOpen={modalOpen} setModalOpen={setModalOpen} card={currCard} />
        </div>
    );
}