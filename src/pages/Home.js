import React from 'react'
import Highlights from '../components/Highlights';
import FlashNew from '../components/FlashNew';
import { Link } from 'react-router-dom';
import { Aside, Main, Section } from '../components/Layout';
import Featured from '../components/Featured';
import StayConnected from '../components/StayConnected';
import { Ad300 } from '../components/Advertisement';
import LatestArticles from '../components/LatestArticles';

const Home = () => {

  return (<>
    <Highlights />
    <FlashNew />

    <Section>
      <Main>
        {/* Featured */}
        <Featured />
      </Main>
      <Aside>
        {/* Stay Connected */}
        <StayConnected />
        {/* Advertisement 300 */}
        <Ad300 />
      </Aside>
    </Section>

    <Section>
      <Main>
        {/* Latest Articles */}
        <LatestArticles />
      </Main>
      <Aside>
        {/* Most Popular */}
        <div>
          <div className="border-b-2 w-full mb-6 border-black">
            <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">Most Popular</span>
          </div>
          <div>
            <div className="flex space-x-4 group mb-4">
              <Link className="w-1/3" to="/"><img className="h-fit" src="/img/articles/485x360/2.jpg" alt="" /></Link>
              <div className="w-2/3">
                <h3 className="text-sm group-hover:text-sky-400 font-medium text-zinc-900"><Link to="/">Spring Fashion Show at the University of Michigan Has Started</Link></h3>
                <span className="text-11px font-medium text-gray-500">August 7, 2019</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 mt-5">
            <button className="border p-1.5 hover:bg-sky-400 hover:border-sky-400 transition-all duration-150 text-[#b7b7b7] hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg>
            </button>
            <button className="border p-1.5 hover:bg-sky-400 hover:border-sky-400 transition-all duration-150 text-[#b7b7b7] hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg>
            </button>
          </div>
        </div>
      </Aside>
    </Section>
  </>)
}

export default Home