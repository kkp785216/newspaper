import React from 'react'

const Header = () => {
    return (
        <header className="shadow-md">
            <div className="bg-black text-mywhite">
                <div className="max-w-screen-lg flex space-x-9 text-11px font-medium m-auto justify-between items-center">
                    <div className="flex space-x-9">
                        <div className="flex space-x-9">
                            <span><strong>11.8<sup>oC </sup></strong>New York</span>
                            <span>Monday, December 27, 2021</span>
                        </div>
                        <ul className="flex space-x-3">
                            <li><a className="hover:text-blue-400" href="#">Sin in / Join</a></li>
                            <li><a className="hover:text-blue-400" href="#">Forum</a></li>
                            <li><a className="hover:text-blue-400" href="#">Buy now!</a></li>
                        </ul>
                    </div>
                    <div className="flex">
                        <a className="p-2" href="#"><img className="invert w-3" src="./img/social/facebook.png" alt="" /></a>
                        <a className="p-2" href="#"><img className="invert w-3" src="./img/social/instagram.png" alt="" /></a>
                        <a className="p-2" href="#"><img className="invert w-3" src="./img/social/twitter.png" alt="" /></a>
                        <a className="p-2" href="#"><img className="invert w-3" src="./img/social/vimeo.png" alt="" /></a>
                        <a className="p-2" href="#"><img className="invert w-3" src="./img/social/youtube.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg m-auto">
                <div className="flex justify-center space-x-6 pt-7 pb-3">
                    <img src="./img/newspaper-11-logo-blue.png" alt="" />
                    <img src="./img/newspaper-rec728.jpg" alt="" />
                </div>
                <nav>
                    <ul className="uppercase flex">
                        <li><a className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 active" href="#">News</a></li>
                        <li><a className="p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" href="#">Faishon <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="64" d="M112 184l144 144 144-144" /></svg></a></li>
                        <li><a className="p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" href="#">Gadget <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="64" d="M112 184l144 144 144-144" /></svg></a></li>
                        <li><a className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" href="#">Lifestyle</a></li>
                        <li><a className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" href="#">Video</a></li>
                        <li><a className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" href="#">Features</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header