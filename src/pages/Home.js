import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import action from '../redux/action'
import Highlights from '../components/Highlights';
import FlashNew from '../components/FlashNew';
import Article from '../components/Article';
import { Link } from 'react-router-dom';
import { Aside, Main, Section } from '../components/Layout';
import ReactPaginate from 'react-paginate';
import Featured from '../components/Featured';
import StayConnected from '../components/StayConnected';
import { Ad300 } from '../components/Advertisement';

const Home = () => {

  const { articles } = useSelector(state => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    articles.articles.length <= 0 &&
      dispatch(action({
        type: 'ARTICLES_LOCAL',
        page: page
      }));
    // eslint-disable-next-line
  }, [page]);

  function scrollToTargetAdjusted() {
    var element = document.getElementById('latest-articles');
    var headerOffset = 24;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    dispatch(action({
      type: 'ARTICLES_LOCAL',
      page: selected + 1
    }));
    // document.getElementById('latest-articles').scrollIntoView({block: 'start',behavior: 'smooth',});
    scrollToTargetAdjusted();
  }

  // console.log(articles);

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
        <Ad300/>
      </Aside>
    </Section>

    <Section>
      <Main>
        {/* Latest Articles */}
        <div id='latest-articles'>
          <div className="border-b-2 w-full mb-6 border-black">
            <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">LATEST ARTICLES</span>
          </div>
          <div className="flex flex-wrap -mx-5 -m-4">
            {articles.articles?.map((e, i) => (
              <Article key={i} title={e.title} img_url={e.img_url} img_comp={e.img_comp} date={e.date} url={e.url} author={e.author} />
            ))}
          </div>
          <div className='flex justify-between items-center mt-11'>
            <ReactPaginate
              className='flex items-center -m-1'
              pageClassName='p-4 m-1 relative [&.disabled]:hidden'
              previousClassName='p-4 m-1 relative [&.disabled]:hidden'
              nextClassName='p-4 m-1 relative [&.disabled]:hidden'
              pageLinkClassName='border border-[#e3e3e3] hover:bg-[#444] hover:border-[#444] hover:text-white text-[13px] text-gray-500 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center'
              previousLinkClassName='border border-[#e3e3e3] hover:bg-[#444] hover:border-[#444] hover:text-white text-[13px] text-gray-500 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center'
              nextLinkClassName='border border-[#e3e3e3] hover:bg-[#444] hover:border-[#444] hover:text-white text-[13px] text-gray-500 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center'
              activeLinkClassName='bg-sky-400 hover:bg-sky-400 border-sky-400 hover:border-sky-400 text-white hover:text-white cursor-auto'
              breakClassName='mx-4'
              forcePage={page - 1}
              breakLabel="..."
              previousLabel={<svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg>}
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={Math.ceil(articles.total_articles / 8)}
              nextLabel={<svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg>}
              renderOnZeroPageCount={null}
            />
            <span className='text-[13px] text-gray-500'>Page {page} of {Math.ceil(articles.total_articles / 8)}</span>
          </div>
        </div>
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