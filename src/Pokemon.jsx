import React from 'react'
import './pokemon.css'

function Pokemon({id, img, name, hp, attack, defense, speed, special, type, ability1, ability2}) {
  return (
    <div className="pokeCard">
        <div className="pokemonName">
            <div className="pokeImg">
                <img src={img} alt={name} />
                <p className='id'>No.{id}</p>
            </div>
            <div className="pokeName">
                <h2>{name}</h2>
                <p className="hpBar"> HP:</p>
                <p className="hp">{hp}/{hp}</p>
            </div>
        </div>
        <div className="pokemonStats">
            <div className="pokestats">
                <p>Attack</p>
                <span className="type">{attack}</span>
                <p>DEFENSE </p>
                <span className="type">{defense}</span>
                <p>SPEED </p>
                <span className="type">{speed}</span>
                <p>Special </p>
                <span className="type">{special}</span>
            </div>
            <div className="pokeType">
                <p>Type/</p>
                <span className="type">{type}</span>
                <p >ability 1/</p>
                <span className="type">{ability1}</span>
                <p>ability 2/</p>
                <span className="type">{ability2}</span>

            </div>
        </div>
    </div>
  )
}

export default Pokemon