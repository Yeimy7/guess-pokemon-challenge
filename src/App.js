import { useEffect, useState } from 'react';
import api from "./api";
import { Character } from './components/Character';
import { Controller } from './components/Controller';
import { Form } from './components/Form';
import { Hero } from './components/Hero';
import { Modal } from './components/Modal';
import { Score } from './components/Score';
import { useForm } from './hooks/useForm';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useModal } from './hooks/useModal';

function App() {

  const [pokemonData, setPokemonData] = useState({});
  const [showName, setShowName] = useState(false)
  const [pokemon, setPokemon] = useState(0)
  const [score, setScore] = useLocalStorage("score", { right: 0, wrong: 0 })

  const [formValues, handleInputChange, reset] = useForm({ pokemonText: '' });
  const { pokemonText } = formValues;

  const [rightAnswer, setRightAnswer] = useState('');
  const [isOpenModal, openModal, closeModal] = useModal(false)

  useEffect(() => {
    api.random().then((data) => {
      setPokemonData({ ...pokemonData, image: data.image, name: data.name });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleContinue = () => {
    api.random().then((data) => {
      setPokemonData(data);
    });
    setShowName(false)
    setPokemon(0)
    reset()
    setRightAnswer('')
  }
  const handleFinish = () => {
    openModal()
  }

  const handleAnswer = (e) => {
    e.preventDefault();
    setShowName(true)
    setPokemon(Math.floor(Math.random() * (5 - 1)) + 1)
    if (pokemonText.replace(/[^a-zA-Z]/g, "").toLowerCase() === pokemonData.name) {
      setRightAnswer(true)
      setScore({ ...score, right: score.right + 1 })
    }
    else {
      setRightAnswer(false)
      setScore({ ...score, wrong: score.wrong + 1 })
    }
  }

  return (
    <div className="container">
      <Modal isOpen={isOpenModal} closeModal={closeModal} score={score} setScore={setScore} handleContinue={handleContinue} />
      <header className="header">
        <h1 className="header__title lettering">Quién es este Pokémon</h1>
      </header>
      <Hero pokemonData={pokemonData} showName={showName} />
      <div className="nes-container is-rounded info__container">
        <Character pokemon={pokemon} rightAnswer={rightAnswer} />
        <div className="info__controls">
          {
            !showName
              ? <Form handleAnswer={handleAnswer} pokemonText={pokemonText} handleInputChange={handleInputChange} />
              : <Controller handleContinue={handleContinue} handleFinish={handleFinish} />
          }
          <Score score={score} />
        </div>
      </div>
    </div>
  );
}

export default App;
