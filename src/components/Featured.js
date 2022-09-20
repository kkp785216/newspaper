import React, { useEffect, useState } from 'react'
import action from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import LazyLoad from 'react-lazy-load'
import { Link } from 'react-router-dom'

const Featured = () => {
    const { featured } = useSelector(state => state);
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        !featured.pages_loaded.includes(page) &&
            dispatch(action({
                type: 'FEATURED',
                page: page
            }));

        featured.pages_loaded.includes(page) &&
            dispatch(action({
                type: 'FEATURED_CURRENT_PAGE',
                page: page
            }));
        // eslint-disable-next-line
    }, [page]);

    const handlePageClick = (button) => {
        if (page >= 2 && page <= Math.ceil(featured.total_articles / 5) && button === "prev") {
            setPage(page - 1);
        }
        if (page >= 1 && page < Math.ceil(featured.total_articles / 5) && button === "next") {
            setPage(page + 1);
        }
    }

    return (
        <div>
            <div className="border-b-2 w-full mb-6 border-myyellow">
                <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm bg-myyellow">Don't miss</span>
            </div>
            {featured.pages_loaded.includes(featured.current_page) && featured.articles.filter(e => e.page === featured.current_page).length >= 1 &&
                <div className="flex md:-m-[10px] lg:-m-5 flex-col md:flex-row">
                    {featured.articles.filter(e => e.page === featured.current_page).splice(0, 1).map(e => (
                        <div className="md:p-[10px] lg:p-5 w-full md:w-1/2" key={e.order} title={e.title}>
                            <div className="group">
                                <Link to={`/${e.url}`} className="relative block pb-[72%] overflow-hidden">
                                    <LazyLoad><img className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full" src={e.img_url ? e.img_url : `/img/articles/485x360/${e.img_comp}.jpg`} alt={e.title} /></LazyLoad>
                                    <span className="absolute bottom-0 left-0 text-mywhite bg-black group-hover:bg-blue-500 block w-fit px-1.5 py-0.5 text-10px capitalize">{e.category.replace('-', ' ')}</span>
                                </Link>
                                <h3 className="text-2xl leading-7 mt-2 group-hover:text-myyellow"><Link to={`/${e.url}`}>{e.title}</Link></h3>
                                <span className="text-11px font-medium text-gray-500"><strong className="text-black"><Link to={`/${e.author}`}>{e.author}</Link></strong> - June 19, 2019</span>
                                <p className="text-gray-500 mt-2 text-13px">We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to...</p>
                            </div>
                        </div>
                    ))}
                    {featured.articles.filter(e => e.page === featured.current_page).length >= 2 &&
                        <div className="-mb-1 md:-mb-0 md:p-[10px] lg:p-5 w-full md:w-1/2">
                            {featured.articles.filter(e => e.page === featured.current_page).splice(1, 4).map(e => (
                                <div className="flex space-x-4 md:space-x-3 lg:space-x-4 group mt-7 md:mt-0 mb-0 md:mb-5" key={e.order} title={e.title}>
                                    <Link className="w-1/3 md:w-2/5 lg:w-1/3 relative" to={`/${e.url}`}><LazyLoad><img src={e.img_url ? e.img_url : `/img/articles/218x150/${e.img_comp}.jpg`} alt={e.title} /></LazyLoad></Link>
                                    <div className="w-2/3 md:w-3/5 lg:w-2/3">
                                        <h3 className="text-sm md:text-[12.5px] lg:text-sm group-hover:text-myyellow font-medium text-zinc-900"><Link to={`/${e.url}`}>{e.title}</Link></h3>
                                        <span className="text-11px font-medium text-gray-500">August 7, 2019</span>
                                    </div>
                                </div>
                            ))}
                        </div>}
                </div>}
            <div className="flex space-x-2 mt-5">
                <button onClick={e => handlePageClick('prev')} className="border p-1.5 hover:bg-myyellow hover:border-myyellow transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 2 || page > Math.ceil(featured.total_articles / 5)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg>
                </button>
                <button onClick={e => handlePageClick('next')} className="border p-1.5 hover:bg-myyellow hover:border-myyellow transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 1 || page >= Math.ceil(featured.total_articles / 5)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg>
                </button>
            </div>
        </div >
    )
}

export default Featured