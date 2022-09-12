import React, { useEffect } from 'react'
import action from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import LazyLoad from 'react-lazy-load'

const Featured = () => {
    const { featured } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(action({
            type: 'FEATURED',
            page: 1
        }));
    }, []);
    return (
        <div>
            <div className="border-b-2 w-full mb-6 border-myyellow">
                <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm bg-myyellow">Don't miss</span>
            </div>
            {featured.articles.length >= 1 && <div className="flex -m-5">
                {featured.articles.concat().splice(0, 1).map(e => (
                    <div className="p-5 w-full" key={e.order}>
                        <div className="group">
                            <a href="#" className="relative block pb-[72%] overflow-hidden">
                                <LazyLoad><img className="absolute top-0 left-0 right-0 bottom-0 transition-all duration-[.5s]" src={e.img_url ? e.img_url : `/img/articles/485x360/${e.img_comp}.jpg`} alt={e.title} /></LazyLoad>
                                <span className="absolute bottom-0 left-0 text-mywhite bg-black group-hover:bg-blue-500 block w-fit px-1.5 py-0.5 text-10px capitalize">{e.category.replace('-', ' ')}</span>
                            </a>
                            <h3 className="text-2xl leading-7 mt-2 group-hover:text-myyellow"><a href="#">{e.title}</a></h3>
                            <span className="text-11px font-medium text-gray-500"><strong className="text-black"><a href="#">{e.author}</a></strong> - June 19, 2019</span>
                            <p className="text-gray-500 mt-2 text-13px">We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to...</p>
                        </div>
                    </div>
                ))}
                {featured.articles.length >= 2 && <div className="p-5 w-full">
                    {featured.articles.concat().splice(1, 4).map(e => (
                        <div className="flex space-x-4 group mb-4" key={e.order}>
                            <a className="w-1/3 relative" href="#"><LazyLoad><img className="absolute top-0 left-0 right-0 bottom-0 transition-all duration-[.5s]" src={e.img_url ? e.img_url : `/img/articles/218x150/${e.img_comp}.jpg`} alt={e.title} /></LazyLoad></a>
                            <div className="w-2/3">
                                <h3 className="text-sm group-hover:text-myyellow font-medium text-zinc-900"><a href="#">Spring Fashion Show at the University of Michigan Has Started</a></h3>
                                <span className="text-11px font-medium text-gray-500">August 7, 2019</span>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>}
            <div className="flex space-x-2 mt-5">
                <button className="border p-1.5 hover:bg-myyellow hover:border-myyellow transition-all duration-150 text-[#b7b7b7] hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" /></svg>
                </button>
                <button className="border p-1.5 hover:bg-myyellow hover:border-myyellow transition-all duration-150 text-[#b7b7b7] hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" /></svg>
                </button>
            </div>
        </div >
    )
}

export default Featured