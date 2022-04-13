import { useState } from 'react';
import api from "./api";

function App() {
  const pokemonIcon=[
    'pokeball',
    'bulbasaur',
    'charmander',
    'squirtle',
    'kirby'
  ]
  const [pokemonData, setPokemonData] = useState({
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    name: ""
  });
  const [showName, setShowName] = useState(false)
  const [pokemon, setPokemon] = useState(0)

  const handleChange = () => {
    api.random().then((data) => {
      setPokemonData({ ...pokemonData, image: data.image, name: data.name });
    });
    setShowName(false)
    setPokemon(0)
  };
  const handleAsk = () => {
    setShowName(true)
    setPokemon(Math.floor(Math.random() * ( 5- 1)) + 1)
  }

  return (
    <div className="container">
      <header className="header">
        <h1 className="titleee">Quién es este Pokemon<span className="interrogation">?</span></h1>
      </header>
      <section className="pokemon-wrap">
        <div className="image__container">
          <img alt="pokemon" className={`pokemon__image ${showName !== true ? "filter" : ""}`} src={pokemonData.image} />
          <div className="box__container">
            <div className="box"></div>
          </div>
        </div>
        {
          showName ? <p className="pokemon__name titleee">{pokemonData.name}</p> : ''
        }

      </section>
      <div class="nes-container is-rounded form_container">
        <section class="message-list">
          <section class="message -left">
            <i class={`nes-${pokemonIcon[pokemon]}`}></i>
            <div class="nes-balloon from-left">
              <p>Hello NES.css</p>
            </div>
          </section>
        </section>
        <input type="text" id="name_field" className="nes-input input" />
        <button onClick={handleAsk} type="button" className="nes-btn is-primary">Adivinar</button>
        <div className="nes-container with-title">
          <p class="title">Seguir jugando?</p>
          <label>
            <input type="radio" class="nes-radio" name="answer" checked />
            <span onClick={handleChange}>Yes</span>
          </label>

          <label>
            <input type="radio" class="nes-radio" name="answer" />
            <span>No</span>
          </label>
        </div>
      </div>

    </div>
  );
}

export default App;
