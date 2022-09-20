import React from 'react'
import LazyLoad from 'react-lazy-load'
import { Link } from 'react-router-dom'

const FlashNew = () => {
    return (
        <section className="md:max-w-screen-md lg:max-w-screen-lg lg1140:max-w-[1068px] m-auto">
            <div className='relative md:pb-[42%]'>
                <div className='md:absolute top-0 bottom-0 left-0 right-0 md:flex md:space-x-1'>
                    <div className="w-full h-[320px] md:h-full overflow-hidden relative group text-mywhite after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 mb-1 md:mb-0">
                        <LazyLoad><img src="/img/articles/flash/14.jpg" className="absolute transition-all w-full h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110" alt="" /></LazyLoad>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                            <span><Link className="text-mywhite bg-black block group-hover:bg-blue-500 w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Faishon</Link></span>
                            <h3 className="text-[22px] md:text-[17px] lg:text-27px md:font-medium lg:font-normal leading-7 md:leading-6 lg:leading-8 mb-2"><Link to="/">WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City</Link></h3>
                            <span className="text-11.5px font-medium">Armin Vans - August 7, 2019</span>
                        </div>
                    </div>
                    <div className="w-full flex md:grid grid-cols-2 gap-x-1 gap-y-1 overflow-x-auto">
                        <div className="min-w-[80%] xs:min-w-[48%] sm:min-w-[40%] md:w-full h-[180px] md:h-full overflow-hidden relative group text-mywhite col-span-2 row-span-3 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
                            <LazyLoad><img src="/img/articles/flash/41.jpg" className="absolute transition-all w-full h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110" alt="" /></LazyLoad>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                                <span><Link className="text-mywhite bg-black group-hover:bg-blue-500 block w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Gedgets</Link></span>
                                <h3 className="text-base md:text-[15px] lg:text-[21px] font-medium mb-2 leading-5 lg:leading-7"><Link to="/">Game Chan485x36ging Virtual Reality Console Hits the Market</Link></h3>
                            </div>
                        </div>
                        <div className="min-w-[80%] xs:min-w-[48%] sm:min-w-[40%] md:w-full h-[180px] md:h-full overflow-hidden relative group text-mywhite row-span-2 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
                            <LazyLoad><img src="/img/articles/flash/67.jpg" className="absolute transition-all w-full h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110" alt="" /></LazyLoad>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                                <span><Link className="text-mywhite bg-black group-hover:bg-blue-500 block w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Travel</Link></span>
                                <h3 className="text-base md:text-[15px] lg:text-[17px] leading-5 font-medium mb-2"><Link to="/">Discover the Most Magical Sunset in Santorini</Link></h3>
                            </div>
                        </div>
                        <div className="min-w-[80%] xs:min-w-[48%] sm:min-w-[40%] md:w-full h-[180px] md:h-full overflow-hidden relative group text-mywhite row-span-2 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
                            <LazyLoad><img src="/img/articles/flash/56.jpg" className="absolute transition-all w-full h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110" alt="" /></LazyLoad>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                                <span><Link className="text-mywhite bg-black group-hover:bg-blue-500 block w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Reviews</Link></span>
                                <h3 className="text-base md:text-[15px] lg:text-[17px] leading-5  font-medium mb-2"><Link to="/">Computer Filters Noise to Make You a Better Listener</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlashNew