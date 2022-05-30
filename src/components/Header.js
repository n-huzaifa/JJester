import React from 'react'
import Skull from '../skull.svg'
import Couldron from '../cauldron.svg'

function Header() {
    const Dark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return (
        <div className="navbar bg-base-300">
            <button className="btn rounded-lg bg-transparent border-0 font-Outfit font-semibold text-yellow-400 text-xl">JJester</button>

            {Dark ?
                <img className="w-16" src={Skull} alt="skull" />
                :
                <img className="w-16" src={Couldron} alt="couldron" />
            }
        </div>
    )
}

export default Header