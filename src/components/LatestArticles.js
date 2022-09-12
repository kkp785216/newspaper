import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Article from './Article'
import { useSelector, useDispatch } from 'react-redux'
import action from '../redux/action'

const LatestArticles = () => {

  const { articles } = useSelector(state => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    !articles.pages_loaded.includes(page) &&
      dispatch(action({
        type: 'ARTICLES_LOCAL',
        page: page
      }));

    articles.pages_loaded.includes(page) &&
      dispatch(action({
        type: 'ARTICLE_CURRENT_PAGE',
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
    scrollToTargetAdjusted();
  }

  return (
    <div id='latest-articles'>
      <div className="border-b-2 w-full mb-6 border-black">
        <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">LATEST ARTICLES</span>
      </div>
      {articles.pages_loaded.includes(articles.current_page) &&
        <div className="flex flex-wrap -mx-5 -m-4">
          {articles.articles.filter(e => e.page === articles.current_page).map((e, i) => (
            <Article key={i} title={e.title} img_url={e.img_url} img_comp={e.img_comp} date={e.date} url={e.url} author={e.author} />
          ))}
        </div>}
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
  )
}

export default LatestArticles