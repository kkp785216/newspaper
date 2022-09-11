import React from 'react'
import { Link } from 'react-router-dom'

const Highlights = () => {
    return (
        <section className="max-w-screen-lg m-auto flex justify-between py-5 px-5 items-center">
            <div className="flex space-x-5 items-center">
                <h4 className="text-mywhite bg-black px-2 py-1 text-xs uppercase">Trending Now</h4>
                <Link to="/">Another Big Apartment Project Slated for Broad Ripple Company</Link>
            </div>
            <div className="flex space-x-2 mt-5">
                <button className="border p-1.5 hover:bg-blue-400 hover:border-blue-400 transition-all duration-150 text-[#b7b7b7] hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg>
                </button>
                <button className="border p-1.5 hover:bg-blue-400 hover:border-blue-400 transition-all duration-150 text-[#b7b7b7] hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg>
                </button>
            </div>
        </section>
    )
}

export default Highlights