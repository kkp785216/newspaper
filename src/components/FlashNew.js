import React from 'react'
import LazyLoad from 'react-lazy-load'
import { Link } from 'react-router-dom'

const FlashNew = () => {
  return (
    <section className="max-w-screen-lg m-auto h-27rm flex space-x-1">
        <div className="h-full w-full overflow-hidden relative group text-mywhite after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
            <LazyLoad><img src="/img/articles/flash/14.jpg" className="absolute transition-all h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110" alt=""/></LazyLoad>
            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                <span><Link className="text-mywhite bg-black block group-hover:bg-blue-500 w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Faishon</Link></span>
                <h3 className="text-27px  font-normal mb-2"><Link to="/">WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City</Link></h3>
                <span className="text-11.5px font-medium">Armin Vans - August 7, 2019</span>
            </div>
        </div>
        <div className="w-full h-full grid grid-cols-2 gap-x-1 gap-y-1">
            <div className="h-68 w-full overflow-hidden relative group text-mywhite col-span-2 row-span-3 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
                <LazyLoad><img src="/img/articles/flash/41.jpg" className="absolute transition-all w-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110" alt=""/></LazyLoad>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                    <span><Link className="text-mywhite bg-black group-hover:bg-blue-500 block w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Gedgets</Link></span>
                    <h3 className="text-2xl font-normal mb-2"><Link to="/">Game Chan485x36ging Virtual Reality Console Hits the Market</Link></h3>
                </div>
            </div>
            <div className="h-full w-full overflow-hidden relative group text-mywhite row-span-2 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
                <LazyLoad><img src="/img/articles/flash/67.jpg" className="absolute transition-all w-full h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110" alt=""/></LazyLoad>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                    <span><Link className="text-mywhite bg-black group-hover:bg-blue-500 block w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Travel</Link></span>
                    <h3 className="text-[17px] leading-5 font-medium mb-2"><Link to="/">Discover the Most Magical Sunset in Santorini</Link></h3>
                </div>
            </div>
            <div className="h-full w-full overflow-hidden relative group text-mywhite row-span-2 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
                <LazyLoad><img src="/img/articles/flash/56.jpg" className="absolute transition-all w-full h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110" alt=""/></LazyLoad>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                    <span><Link className="text-mywhite bg-black group-hover:bg-blue-500 block w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Reviews</Link></span>
                    <h3 className="text-[17px] leading-5  font-medium mb-2"><Link to="/">Computer Filters Noise to Make You a Better Listener</Link></h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FlashNew