import React, { useRef } from 'react'
import ReactPaginate from 'react-paginate'
import Article from '../Article'
import { DisplayArticlesType } from '@const/apiResultTypes'

interface Props {
  articles: DisplayArticlesType,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  heading?: String,
  baseurl?: String,
}

const DisplayArticles = ({ articles, page, setPage, heading, baseurl }: Props) => {

  const articleRef = useRef<HTMLDivElement>(null);

  function scrollToTargetAdjusted() {
    if (null !== articleRef.current) {
      let element = articleRef.current;
      let headerOffset = 24;
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    scrollToTargetAdjusted();
  }

  return (
    <div ref={articleRef}>
      <div className="border-b-2 w-full mb-6 border-black">
        <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">{heading ? heading : 'Latest Articles'}</span>
      </div>
      {articles.pages_loaded.includes(articles.current_page) && articles.articles.filter(e => e.page === articles.current_page).length >= 1 &&
        <div className="flex flex-wrap flex-col md:flex-row -mx-5 md:-mx-[10px] lg:-mx-5 -my-4" key={articles.current_page}>
          {articles.articles.filter(e => e.page === articles.current_page).map((e, i) => (
            <Article key={i} article={e} />
          ))}
        </div>}
      {Math.ceil(articles.total_articles / 8) >= 2 &&
        <div className='flex justify-start md:justify-between items-center mt-8 md:mt-11'>
          <ReactPaginate
            className='flex items-center -m-1'
            pageClassName='p-4 m-1 relative [&.disabled]:hidden'
            previousClassName='p-4 m-1 relative [&.disabled]:hidden'
            nextClassName='p-4 m-1 relative [&.disabled]:hidden'
            pageLinkClassName='border border-[#e3e3e3] hover:bg-[#444] hover:border-[#444] hover:text-white text-[13px] text-gray-500 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center'
            previousLinkClassName='border border-[#e3e3e3] hover:bg-[#444] hover:border-[#444] hover:text-white text-[13px] text-gray-500 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center'
            nextLinkClassName='border border-[#e3e3e3] hover:bg-[#444] hover:border-[#444] hover:text-white text-[13px] text-gray-500 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center'
            activeLinkClassName='bg-sky-400 hover:bg-sky-400 border-sky-400 hover:border-sky-400 text-[white_!important] hover:text-white cursor-auto'
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
            hrefBuilder={(page, pageCount, selected) =>
              page >= 1 && page <= pageCount ? page === 1 ? baseurl : `${baseurl ? baseurl : ""}/page/${page}` : '#'
            }
            hrefAllControls
          />
          <span className='text-[13px] hidden md:block text-gray-500'>Page {page} of {Math.ceil(articles.total_articles / 8)}</span>
        </div>}
    </div>
  )
}

export default DisplayArticles