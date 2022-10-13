import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import action from '../redux/action';
import { Links } from './Links';

const Highlights = () => {

    const { trending } = useSelector(state => state);
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        !trending.pages_loaded.includes(page) &&
            dispatch(action({
                type: 'TRENDING',
                page: page
            }));

        trending.pages_loaded.includes(page) &&
            dispatch(action({
                type: 'TRENDING_CURRENT_PAGE',
                page: page
            }));
        // eslint-disable-next-line
    }, []);

    const handlePageClick = (button) => {
        if (page >= 2 && page <= Math.ceil(trending.total_articles / 1) && button === "prev") {
            setPage(page - 1);
        }
        if (page >= 1 && page < Math.ceil(trending.total_articles / 1) && button === "next") {
            setPage(page + 1);
        }
    }

    return (<>
        {trending.articles.length >= 1 && <section className="md:max-w-screen-md lg:max-w-screen-lg lg1140:max-w-[1068px] px-5 lg:px-9 lg1140:px-5 py-3.5 md:py-4 lg:py-6 m-auto flex justify-center md:justify-between items-center">
            <div className="flex flex-col md:flex-row space-x-5 items-center justify-center">
                <h4 className="text-mywhite bg-black px-2 py-1 text-xs uppercase mb-2 md:mb-0">Trending Now</h4>
                {trending.articles.map((e, i) => (i === page - 1 && <Links key={i} to="/" className='text-sm md:text-[13px] lg:text-base'>{e.title}</Links>))}
            </div>
            <div className="hidden md:flex space-x-2">
                <button onClick={e => handlePageClick('prev')} className="border p-1.5 hover:bg-blue-400 hover:border-blue-400 transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 2 || page > Math.ceil(trending.total_articles / 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg>
                </button>
                <button onClick={e => handlePageClick('next')} className="border p-1.5 hover:bg-blue-400 hover:border-blue-400 transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 1 || page >= Math.ceil(trending.total_articles / 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg>
                </button>
            </div>
        </section>}
    </>)
}

export default Highlights