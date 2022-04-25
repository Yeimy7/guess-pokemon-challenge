import React from 'react'

export const Score = ({score}) => {
    return (
        <p className="info__controls__score">
            <span className="score score-correct">Correcto: {score.right}</span>
            <span className="score score-incorrect">Incorrecto: {score.wrong}</span>
        </p>
    )
}
