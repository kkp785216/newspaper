import React from 'react'
import { Aside, Section, Main } from './Layout'
import { Links } from './Links'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Template1 = () => {
    return (
        <div>
            <Section>
                <Main>
                    <div>
                        <ul className='flex -m-0.5 text-xs'>
                            <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to='/'>Home</Links><NavigateNextIcon className='text-xs' /></li>
                            <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to='/'>Lifestyle</Links><NavigateNextIcon className='text-xs' /></li>
                            <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to='/'>Travel</Links><NavigateNextIcon className='text-xs' /></li>
                            <li className='p-0.5 text-[#747474]'>Best Things You Can Do on a Solo Mountain Climb</li>
                        </ul>
                    </div>
                    <div className='mt-3.5'>
                        <div className="flex text-[10px] text-white">
                            <span className='py-[3px] px-[6px] bg-[#8224e3] tracking-[0.8px] block mb-[5px] mr-[5px] whitespace-nowrap'><Links to='/'>Lifestyle</Links></span>
                            <span className='py-[3px] px-[6px] bg-[#6850e0] tracking-[0.8px] block mb-[5px] mr-[5px] whitespace-nowrap'><Links to='/'>Travel</Links></span>
                        </div>
                    </div>
                    <div className='mt-3.5'>
                        <h1 className='mb-4 font-normal text-[35px] leading-[46px]'>Discover the Most Magical Sunset in Santorini</h1>
                        <p className='italic text-[#2e2e2e] text-lg font-extralight'>The full member list of the Trump Leadership Council, a group of corporate influencers who guided the president&#39;s anti-regulatory policy blitz.</p>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mt-2"><span className="text-11px font-medium text-gray-500"><strong className="text-black"><a className="" href="/krishna">Krishna Prajapati</a></strong> - Aug 17, 2022</span><span className="td-module-comments"><a className="" href="/modern-monochrome-home-with-calm-and-cosy-terrace-and-steps">0</a></span></div>
                    </div>
                </Main>
                <Aside>

                </Aside>
            </Section>
        </div>
    )
}

export default Template1