import React from 'react'

export const Modal = ({ isOpen, closeModal, score, setScore, handleContinue }) => {
    const { right, wrong } = score
    const average = (right + wrong) * 0.5
    const high = (right + wrong) * 0.8

    const resultMessage = [
        'Todavía tienes muchos pokémons que conocer. Ánimo!',
        'Estás muy cerca de convertirte en un Maestro Pokémon. Sigue así!',
        'Demostraste ser un verdadero Maestro Pokémon. Felicidades!'
    ]
    const handleButton = () => {
        closeModal();
        setScore({ right: 0, wrong: 0 })
        handleContinue()
    }
    return (
        <article className={`modal ${isOpen ? "is-open" : ""}`}>
            <div className="nes-container is-rounded modal-container">
                <p className="modal-message">{
                    right >= high ? resultMessage[2] : right >= average ? resultMessage[1] : resultMessage[0]
                }</p>
                <i className="nes-icon trophy is-large trophy"></i>
                <p className="score-modal">Acertaste {right} de {right + wrong}</p>
                <input type="button" className="nes-btn is-success form__button" value="Volver a jugar" onClick={handleButton} />
            </div>
        </article>
    )
}
