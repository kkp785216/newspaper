import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import action from '../redux/action';
import { Link } from 'react-router-dom';

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
        {trending.articles.length >= 1 && <section className="max-w-screen-lg m-auto flex justify-between py-5 px-5 items-center">
            <div className="flex space-x-5 items-center">
                <h4 className="text-mywhite bg-black px-2 py-1 text-xs uppercase">Trending Now</h4>
                {trending.articles.map((e,i)=>(i === page - 1 && <Link key={i} to="/">{e.title}</Link>))}
            </div>
            <div className="flex space-x-2 mt-5">
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