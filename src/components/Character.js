import React from 'react'

export const Character = ({ pokemon, rightAnswer }) => {
    const wrongMessages = [
        'Todo el mundo se equivoca de vez en cuando',
        'No puedes esperar ganar todas las batallas',
        'Incorrecto! ¿Me rindo? ¡De ninguna manera!',
        '¡El Equipo Rocket ha sido vencido otra vez!',
    ]
    const rightMessages = [
        'Correcto! Si alguien puede, eres tú',
        'Estupendo! Al que madruga Dios lo ayuda, o en este caso consigue su Pokémon.',
        'Buen trabajo! Si te esfuerzas lo suficiente, las cosas saldrán bien, ¿no es así?',
        'Bien hecho! Estas cada vez más cerca de convertirte en un Maestro Pokémon.'
    ]
    const pokemonIcon = [
        'pokeball',
        'bulbasaur',
        'charmander',
        'squirtle',
        'kirby'
    ]

    const randomic = Math.floor(Math.random() * (4 - 0)) + 0

    const message = rightAnswer === ''
        ? 'Demuestra que eres un Maestro Pokémon'
        : rightAnswer
            ? rightMessages[randomic]
            : wrongMessages[randomic]

    return (
        <section className="message -left info__message">
            <i className={`nes-${pokemonIcon[pokemon]} pokemon-character`}></i>
            <div className="nes-balloon from-left bubble__message">
                <p>{message}</p>
            </div>
        </section>
    )
}
