import React from 'react'

export const Hero = ({pokemonData, showName}) => {
    return (
        <>
            <div className="hero__image">
                <div className="hero__image__glint">
                    <div className="glint"></div>
                </div>
                <img alt="pokemon" className={`hero__image__pokemon ${showName !== true ? "filter" : ""}`} src={pokemonData.image} />
            </div>
            <div className="hero__name">
                {
                    showName
                        ? <p className="hero__name__pokemon lettering">{pokemonData.name}</p>
                        : <span className="query lettering">?</span>
                }
            </div>
        </>
    )
}
