import React from 'react'

export const Form = ({ handleAnswer, pokemonText, handleInputChange }) => {
    const screenWidth = window.innerWidth
    return (
        <form onSubmit={handleAnswer} className="info__form">
            <input
                type="text"
                id="name_field"
                className="nes-input info__form__input"
                name="pokemonText"
                autoComplete="off"
                autoFocus={screenWidth <= 500 ? false : true}
                value={pokemonText}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className="nes-btn is-primary form__button"
            >
                Adivinar
            </button>
        </form>
    )
}
