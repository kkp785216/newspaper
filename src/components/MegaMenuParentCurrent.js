import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load';
import { useDispatch } from 'react-redux';
import action from '../redux/action';

const MegaMenuParentCurrent = ({active_menu, activeState}) => {

    const [page, setPage] = useState(active_menu.current_page)
    const dispatch = useDispatch();

    useEffect(() => {
        !active_menu.pages_loaded.includes(page) &&
        dispatch(action({
            type: 'MEGA_MENU_PARENT',
            url: activeState.url,
            category_type: activeState.type,
            page: page
        }));
        
        active_menu.pages_loaded.includes(page) &&
        dispatch(action({
            type: 'MEGA_MENU_PARENT_CURRENT_PAGE',
            url: activeState.url,
            category_type: activeState.type,
            page: page
        }));
        // eslint-disable-next-line
    }, [page]);

    const handlePageClick = (button) => {
        if (page >= 2 && page <= Math.ceil(active_menu.total_articles / 4) && button === "prev") {
            setPage(page - 1);
        }
        if (page >= 1 && page < Math.ceil(active_menu.total_articles / 4) && button === "next") {
            setPage(page + 1);
        }
    }

    return (
        <div className='w-5/6 p-6'>
            {<div className=' flex -m-3' key={active_menu.current_page}>
                {active_menu.articles.filter(e => e.page === active_menu.current_page).map((e, i) => (<div className="group w-1/4 p-3" key={i}>
                    <Link to={`/${e.url}`} className="relative block pb-[70%] overflow-hidden">
                        <LazyLoad><img className="absolute top-0 left-0 right-0 bottom-0 transition-all duration-[.5s]" src={e.img_url ? e.img_url : `/img/articles/485x360/${e.img_comp}.jpg`} alt={e.title} /></LazyLoad>
                        <span className="absolute bottom-0 left-0 text-mywhite bg-black group-hover:bg-blue-500 block w-fit px-1.5 py-0.5 text-10px capitalize">{e.category.replace('-', ' ')}</span>
                    </Link>
                    <h3 className="text-[15px] font-medium leading-5 mt-2 group-hover:text-sky-400"><Link to={`/${e.url}`}>{e.title}</Link></h3>
                    <span className="text-11px font-medium text-gray-500">August 19, 2019</span>
                </div>))}
            </div>}
            <div className="flex space-x-2 mt-5">
                <button onClick={e => handlePageClick('prev')} className="border p-1.5 hover:bg-blue-500 hover:border-blue-500 transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 2 || page > Math.ceil(active_menu.total_articles / 4)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg>
                </button>
                <button onClick={e => handlePageClick('next')} className="border p-1.5 hover:bg-blue-500 hover:border-blue-500 transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 1 || page >= Math.ceil(active_menu.total_articles / 4)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg>
                </button>
            </div>
        </div>
    )
}

export default MegaMenuParentCurrent