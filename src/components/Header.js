import React from 'react'
import Skull from '../skull.svg'

function Header() {
    return (
        <div className="navbar bg-base-300">
            <button className="btn rounded-lg bg-transparent border-0 text-yellow-400 text-xl">JJester</button>
            <img className="w-16" src={Skull} alt="skull" />
        </div>
    )
}

export default Header