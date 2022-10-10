import React, { useEffect, useState } from 'react'
import action from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import LazyLoad from 'react-lazy-load'
import { Links } from './Links'

const MostPopular = () => {

    const { most_popular } = useSelector(state => state);
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        !most_popular.pages_loaded.includes(page) &&
            dispatch(action({
                type: 'MOST_POPULAR',
                page: page
            }));

        most_popular.pages_loaded.includes(page) &&
            dispatch(action({
                type: 'MOST_POPULAR_CURRENT_PAGE',
                page: page
            }));
        // eslint-disable-next-line
    }, [page]);

    const handlePageClick = (button) => {
        if (page >= 2 && page <= Math.ceil(most_popular.total_articles / 3) && button === "prev") {
            setPage(page - 1);
        }
        if (page >= 1 && page < Math.ceil(most_popular.total_articles / 3) && button === "next") {
            setPage(page + 1);
        }
    }

    return (
        <div>
            <div className="border-b-2 w-full mb-6 border-black">
                <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">Most Popular</span>
            </div>
            <div>
                {most_popular.articles.filter(e => e.page === most_popular.current_page).map((e, i) => (
                    <div className="flex space-x-4 md:space-x-3 lg:space-x-4 group mb-7 md:mb-4" title={e.title} key={i}>
                        <Links className="w-1/3" to={`/${e.url}`}><LazyLoad><img className="w-full object-cover" src={e.img_url ? e.img_url : `/img/articles/218x150/${e.img_comp}.jpg`} alt={e.title} /></LazyLoad></Links>
                        <div className="w-2/3">
                            <h3 className="text-sm md:text-[12.5px] lg:text-sm md:leading-5 group-hover:text-sky-400 font-medium text-zinc-900"><Links to={`/${e.url}`}>{e.title}</Links></h3>
                            <span className="text-11px font-medium text-gray-500">August 7, 2019</span>
                        </div>
                    </div>))}
            </div>
            <div className="flex space-x-2 mt-5">
                <button onClick={e => handlePageClick('prev')} className="border p-1.5 hover:bg-sky-400 hover:border-sky-400 transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 2 || page > Math.ceil(most_popular.total_articles / 3)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg>
                </button>
                <button onClick={e => handlePageClick('next')} className="border p-1.5 hover:bg-sky-400 hover:border-sky-400 transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 1 || page >= Math.ceil(most_popular.total_articles / 3)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg>
                </button>
            </div>
        </div>
    )
}

export default MostPopular