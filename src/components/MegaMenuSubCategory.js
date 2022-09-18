import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import action from '../redux/action';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const MegaMenuSubCategory = ({ config_menu }) => {

  const { mega_menu_sub_category } = useSelector(state => state);
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();

  useEffect(() => {
    !mega_menu_sub_category[config_menu.url] &&
      dispatch(action({
        type: 'MEGA_MENU_SUB_CATEGORY',
        url: config_menu.url,
        category_type: config_menu.type,
        page: 1
      }));

    mega_menu_sub_category[config_menu.url] &&
      !mega_menu_sub_category[config_menu.url].pages_loaded.includes(page) &&
      dispatch(action({
        type: 'MEGA_MENU_SUB_CATEGORY',
        url: config_menu.url,
        page: page
      }));

    mega_menu_sub_category[config_menu.url] &&
      mega_menu_sub_category[config_menu.url].pages_loaded.includes(page) &&
      dispatch(action({
        type: 'MEGA_MENU_SUB_CATEGORY_CURRENT_PAGE',
        url: config_menu.url,
        page: page
      }));
    // eslint-disable-next-line
  }, [page]);

  const handlePageClick = (button) => {
    if (mega_menu_sub_category[config_menu.url] && page >= 2 && page <= Math.ceil(mega_menu_sub_category[config_menu.url].total_articles / 5) && button === "prev") {
      setPage(page - 1);
    }
    if (mega_menu_sub_category[config_menu.url] && page >= 1 && page < Math.ceil(mega_menu_sub_category[config_menu.url].total_articles / 5) && button === "next") {
      setPage(page + 1);
    }
  }

  return (
    <div className='absolute left-6 right-6 top-full z-20 bg-white flex shadow-md border-t menu-list opacity-0 invisible transition-all duration-150'>
      <div className='w-full p-6 border-r'>
        <div className=' flex -m-3'>
          {mega_menu_sub_category[config_menu.url] && mega_menu_sub_category[config_menu.url].pages_loaded.includes(mega_menu_sub_category[config_menu.url].current_page) && mega_menu_sub_category[config_menu.url].articles.filter(e => e.page === mega_menu_sub_category[config_menu.url].current_page).map((e, i) => (
            <div className="group w-1/5 p-3" key={i}>
              <Link to={`/${e.url}`} className="relative block pb-[70%] overflow-hidden">
                <LazyLoad><img className="absolute top-0 left-0 right-0 bottom-0 transition-all duration-[.5s]" src={e.img_url ? e.img_url : `/img/articles/485x360/${e.img_comp}.jpg`} alt={e.title} /></LazyLoad>
                <span className="absolute bottom-0 left-0 text-mywhite bg-black group-hover:bg-blue-500 block w-fit px-1.5 py-0.5 text-10px capitalize">{e.category.replace('-', ' ')}</span>
              </Link>
              <h3 className="text-[15px] font-medium leading-5 mt-2 group-hover:text-sky-400"><Link to={`/${e.url}`}>{e.title}</Link></h3>
              <span className="text-11px font-medium text-gray-500">August 19, 2019</span>
            </div>))}
        </div>
        {mega_menu_sub_category[config_menu.url] && <div className="flex space-x-2 mt-5">
          <button onClick={e => handlePageClick('prev')} className="border p-1.5 hover:bg-blue-500 hover:border-blue-500 transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 2 || page > Math.ceil(mega_menu_sub_category[config_menu.url].total_articles / 5)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg>
          </button>
          <button onClick={e => handlePageClick('next')} className="border p-1.5 hover:bg-blue-500 hover:border-blue-500 transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 1 || page >= Math.ceil(mega_menu_sub_category[config_menu.url].total_articles / 5)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg>
          </button>
        </div>}
      </div>
    </div>
  )
}

export default MegaMenuSubCategory