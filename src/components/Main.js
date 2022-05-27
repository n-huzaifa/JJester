import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { FaRedoAlt } from 'react-icons/fa'

function Main() {

    const [safemode, setSafemode] = useState(true)
    const [joke, setJoke] = useState({})
    const [fetch, setFetch] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!safemode) {
            axios.get(process.env.REACT_APP_API_URL)
                .then(res => setJoke(res.data))
                .catch(error => { setError(error.message) })
        } else {
            axios.get(process.env.REACT_APP_API_URL_SAFE)
                .then(res => setJoke(res.data))
                .catch(error => { setError(error.message) })
        }
    }, [fetch, safemode]);

    const handleClick = () => {
        setFetch(prevState => !prevState)
    }

    return (
        <section>
            <div className="font-Outfit px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div className="flex flex-col w-full mb-12 text-center ">
                    {
                        joke.type === "single" ?
                            <h1 className="max-w-5xl text-xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                                {joke.joke}
                            </h1>
                            :
                            <>
                                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                                    {joke.setup}
                                </h1>
                                <p className="max-w-xl mx-auto mt-8 text-2xl leading-relaxed text-center text-gray-500">- {joke.delivery}</p>
                            </>
                    }
                    {error === 'Request failed with status code 404' ?
                        <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-4xl lg:text-5xl lg:max-w-7xl">
                            Check Your Internet Connection
                        </h1>
                        : ''}
                </div>
                <div className='flex justify-between items-center space-x-4'>
                    <div>
                        <p className='font-bold'><span >Type:</span> {joke.type}</p>
                        <p className='font-bold'><span >Category:</span> {joke.category}</p>
                    </div>
                    <div className='flex justify-end items-center space-x-4'>
                        <div class="form-control">
                            <label class="label cursor-pointer space-x-2">
                                <span class="label-text font-semibold text-xl">Safe Mode🔞</span>
                                <input type="checkbox" class="toggle toggle-accent" />
                            </label>
                        </div>
                        <button className="btn btn-square btn-outline btn-accent" onClick={handleClick}>
                            <FaRedoAlt />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main