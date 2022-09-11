import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load';

const Header = () => {
    return (
        <header className="shadow-md">
            <div className="bg-black text-[#f4f4f4]">
                <div className="max-w-screen-lg flex space-x-9 text-11px font-medium m-auto justify-between items-center">
                    <div className="flex space-x-9">
                        <div className="flex space-x-9">
                            <span><strong>11.8<sup>oC </sup></strong>New York</span>
                            <span>Monday, December 27, 2021</span>
                        </div>
                        <ul className="flex space-x-3">
                            <li><Link className="hover:text-blue-400" to="/">Sin in / Join</Link></li>
                            <li><Link className="hover:text-blue-400" to="/">Forum</Link></li>
                            <li><Link className="hover:text-blue-400" to="/">Buy now!</Link></li>
                        </ul>
                    </div>
                    <div className="flex">
                        <Link className="p-2" to="/"><img className="invert w-3" src="./img/social/facebook.png" alt="" /></Link>
                        <Link className="p-2" to="/"><img className="invert w-3" src="./img/social/instagram.png" alt="" /></Link>
                        <Link className="p-2" to="/"><img className="invert w-3" src="./img/social/twitter.png" alt="" /></Link>
                        <Link className="p-2" to="/"><img className="invert w-3" src="./img/social/vimeo.png" alt="" /></Link>
                        <Link className="p-2" to="/#"><img className="invert w-3" src="./img/social/youtube.png" alt="" /></Link>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg m-auto">
                <div className="flex justify-center space-x-6 pt-7 pb-3">
                    <Link to='/'><LazyLoad><img src="./img/newspaper-11-logo-blue.png" alt="" /></LazyLoad></Link>
                    <Link to='/blog'><LazyLoad><img src="./img/newspaper-rec728.jpg" alt="" /></LazyLoad></Link>
                </div>
                <nav>
                    <ul className="uppercase flex">
                        <li><Link className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 active" to="/">News</Link></li>
                        <li><Link className="p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" to="/">Faishon <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="64" d="M112 184l144 144 144-144" /></svg></Link></li>
                        <li><Link className="p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" to="/">Gadget <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="64" d="M112 184l144 144 144-144" /></svg></Link></li>
                        <li><Link className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" to="/">Lifestyle</Link></li>
                        <li><Link className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" to="/">Video</Link></li>
                        <li><Link className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" to="/">Features</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header