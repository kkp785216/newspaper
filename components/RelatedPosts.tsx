import React, { useState, useEffect } from 'react'
import { Links } from './Links';
import Image from 'next/image';
import fetchapi from '../lib/api';

const RelatedPosts = ({ related, route }) => {

    const [page, setPage] = useState(1);
    const [relatedPosts, setRelatedPosts] = useState({
        articles: [...related.articles.map(e => ({ ...e, page: 1 }))],
        total_articles: related.total_articles,
        pages_loaded: [1],
        current_page: 1,
    });

    useEffect(() => {
        (async () => {
            try {
                if (page > 1 && !relatedPosts.pages_loaded.includes(page)) {
                    let related = await fetchapi(`getarticles?uses=relatedposts&type=category&limit=3&page=${page}&slug=${route}`);
                    const myarticles = related.articles.map(e => ({ ...e, page: page }));
                    setRelatedPosts({
                        ...relatedPosts,
                        articles: !relatedPosts.pages_loaded.includes(page) ? [...relatedPosts.articles, ...myarticles] : relatedPosts.articles,
                        pages_loaded: Array.from(new Set(relatedPosts.pages_loaded).add(page)),
                        current_page: page,
                    });
                }
                else {
                    setRelatedPosts({
                        ...relatedPosts,
                        current_page: page,
                    });
                }
            } catch (error) { console.log(error.message) }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handlePageClick = (button) => {
        if (page >= 2 && page <= Math.ceil(relatedPosts.total_articles / 3) && button === "prev") {
            setPage(page - 1);
        }
        if (page >= 1 && page < Math.ceil(relatedPosts.total_articles / 3) && button === "next") {
            setPage(page + 1);
        }
    }

    const formatDate = (input: string | number | Date) => {
        const date = new Date(input);
        return `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]} ${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()}, ${date.getFullYear()}`
    }

    return (
        <>
            <div className="border-b-2 w-full mb-6 border-black">
                <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">RELATED ARTICLES</span>
            </div>
            <div className='flex flex-wrap -m-3' key={relatedPosts.current_page}>
                {relatedPosts.articles.filter(e => e.page === relatedPosts.current_page).map((e, i) => (
                    <div className="p-3 w-full md:w-1/3" key={e.order} title={e.title}>
                        <div className="group flex flex-row md:flex-col mb-1 md:mb-0 space-x-4 md:space-x-0">
                            <Links to={`/${e.url}`} className="relative w-1/3 md:w-full block md:pb-[72%] overflow-hidden">
                                <Image className='md:absolute bottom-0 left-0 top-0 right-0 object-cover transition-all duration-[.5s]' style={{opacity: 0}} onLoad={(e)=>{setTimeout(()=>{e.target.style.opacity=1}, 30*i)}} width={485} height={360} src={e.img_url ? e.img_url : `/img/articles/485x360/${e.img_comp}.jpg`} alt={e.title}></Image>
                                <Links to={e.parent_category ? `/category/${e.parent_category}/${e.category}` : `/category/${e.category}`} className="absolute bottom-0 left-0 text-mywhite bg-black hover:bg-blue-500 hidden md:block w-fit px-1.5 py-0.5 text-10px capitalize">{e.category.replace('-', ' ')}</Links>
                            </Links>
                            <div className="w-2/3 md:w-full">
                                <h3 className="text-sm md:text-[13px] font-medium md:mt-2 group-hover:text-sky-400 text-zinc-900"><Links to={`/${e.url}`}>{e.title}</Links></h3>
                                <span className="md:hidden text-11px font-medium text-gray-500">{formatDate(e.createdAt)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex space-x-2 mt-5">
                <button onClick={e => handlePageClick('prev')} className="border p-1.5 hover:bg-sky-400 hover:border-sky-400 transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 2 || page > Math.ceil(relatedPosts.total_articles / 3)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg>
                </button>
                <button onClick={e => handlePageClick('next')} className="border p-1.5 hover:bg-sky-400 hover:border-sky-400 transition-all duration-150 text-[#b7b7b7] hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-[#b7b7b7] disabled:hover:border-[#e5e7eb]" disabled={page < 1 || page >= Math.ceil(relatedPosts.total_articles / 3)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg>
                </button>
            </div>
        </>
    )
}

export default RelatedPosts