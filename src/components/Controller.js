import React from 'react'

export const Controller = ({handleContinue, handleFinish}) => {
  return (
    <div className="info__buttons">
      <input type="button" className="nes-btn is-primary form__button" value="Siguiente" autoFocus={true} onClick={handleContinue} />
      <input type="button" className="nes-btn is-error form__button" value="Terminar" onClick={handleFinish} />
    </div>
  )
}
