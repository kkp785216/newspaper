import React from 'react'
import { Links } from './Links'
import Image from 'next/image'

const FlashNews = () => {
    return (
        <section className="md:max-w-screen-md lg:max-w-screen-lg lg1140:max-w-[1068px] m-auto">
            <div className='relative md:pb-[42%]'>
                <div className='md:absolute top-0 bottom-0 left-0 right-0 md:flex md:space-x-1'>
                    <div className="w-full h-[320px] md:h-full overflow-hidden relative group text-mywhite after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 mb-1 md:mb-0">
                        <Image className='absolute transition-all w-full h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110' layout='fill' src="/img/articles/flash/14.jpg" alt=""></Image>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                            <span><Links className="text-mywhite bg-black block group-hover:bg-blue-500 w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Faishon</Links></span>
                            <h3 className="text-[22px] md:text-[17px] lg:text-27px md:font-medium lg:font-normal leading-7 md:leading-6 lg:leading-8 mb-2"><Links to="/">WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City</Links></h3>
                            <span className="text-11.5px font-medium">Armin Vans - August 7, 2019</span>
                        </div>
                    </div>
                    <div className="w-full flex space-x-1 md:space-x-0 md:grid md:grid-cols-2 md:gap-x-1 md:gap-y-1 overflow-x-auto">
                        <div className="min-w-[80%] xs:min-w-[48%] sm:min-w-[40%] md:w-full h-[180px] md:h-full overflow-hidden relative group text-mywhite col-span-2 row-span-3 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
                            <Image className='absolute transition-all w-full h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110' layout='fill' src="/img/articles/flash/41.jpg" alt=""></Image>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                                <span><Links className="text-mywhite bg-black group-hover:bg-blue-500 block w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Gedgets</Links></span>
                                <h3 className="text-base md:text-[15px] lg:text-[21px] font-medium mb-2 leading-5 lg:leading-7"><Links to="/">Game Chan485x36ging Virtual Reality Console Hits the Market</Links></h3>
                            </div>
                        </div>
                        <div className="min-w-[80%] xs:min-w-[48%] sm:min-w-[40%] md:w-full h-[180px] md:h-full overflow-hidden relative group text-mywhite row-span-2 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
                            <Image className='absolute transition-all w-full h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110' layout='fill' src="/img/articles/flash/67.jpg" alt=""></Image>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                                <span><Links className="text-mywhite bg-black group-hover:bg-blue-500 block w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Travel</Links></span>
                                <h3 className="text-base md:text-[15px] lg:text-[17px] leading-5 font-medium mb-2"><Links to="/">Discover the Most Magical Sunset in Santorini</Links></h3>
                            </div>
                        </div>
                        <div className="min-w-[80%] xs:min-w-[48%] sm:min-w-[40%] md:w-full h-[180px] md:h-full overflow-hidden relative group text-mywhite row-span-2 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#00000094] after:vertical after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
                            <Image className='absolute transition-all w-full h-full object-cover duration-300 top-0 bottom-0 group-hover:scale-110' layout='fill' src="/img/articles/flash/56.jpg" alt=""></Image>
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
                                <span><Links className="text-mywhite bg-black group-hover:bg-blue-500 block w-fit mb-1 px-1.5 py-0.5 text-10px uppercase" to="/">Reviews</Links></span>
                                <h3 className="text-base md:text-[15px] lg:text-[17px] leading-5  font-medium mb-2"><Links to="/">Computer Filters Noise to Make You a Better Listener</Links></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlashNews