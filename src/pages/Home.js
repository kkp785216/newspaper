import React from 'react'
import store from '../redux/store'
import { useDispatch } from 'react-redux';
import action from '../redux/action'
import Highlights from '../components/Highlights';
import FlashNew from '../components/FlashNew';
import Article from '../components/Article';
import { Link } from 'react-router-dom';
import { Aside, Main, Section } from '../components/Layout';
import { post } from '../lib/post';

const Home = () => {
  const state = store.getState();
  const dispatch = useDispatch();
  dispatch(action({
    type: 'Hello'
  }))
  console.log(state)
  return (<>
    <Highlights />
    <FlashNew />

    <Section>
      <Main>
        {/* Latest Articles */}
        <div>
          <div class="border-b-2 w-full mb-6 border-black">
            <span class="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">LATEST ARTICLES</span>
          </div>
          <div class="flex flex-wrap -mx-5 -m-4">
            {post.map((e, i) => (
              <Article key={i} title={e.title} img_url={e.img_url} img_comp={e.img_comp} date={e.date} url={e.url} author={e.author} />
            ))}
          </div>
        </div>
      </Main>
      <Aside>
        {/* Most Popular */}
        <div>
          <div class="border-b-2 w-full mb-6 border-black">
            <span class="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">Most Popular</span>
          </div>
          <div>
            <div class="flex space-x-4 group mb-4">
              <Link class="w-1/3" to="/"><img class="h-fit" src="./img/articles/485x360/2.jpg" alt="" /></Link>
              <div class="w-2/3">
                <h3 class="text-sm group-hover:text-sky-400 font-medium text-zinc-900"><Link to="/">Spring Fashion Show at the University of Michigan Has Started</Link></h3>
                <span class="text-11px font-medium text-gray-500">August 7, 2019</span>
              </div>
            </div>
          </div>
          <div class="flex space-x-2 mt-5">
            <button class="border p-1.5 hover:bg-sky-400 hover:border-sky-400 transition-all duration-150 text-[#b7b7b7] hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-[13px]" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" /></svg>
            </button>
            <button class="border p-1.5 hover:bg-sky-400 hover:border-sky-400 transition-all duration-150 text-[#b7b7b7] hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-[13px]" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" /></svg>
            </button>
          </div>
        </div>
      </Aside>
    </Section>
  </>)
}

export default Home