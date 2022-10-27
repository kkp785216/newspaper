import React, { useEffect, useState } from 'react'
import { Aside, Section, Main } from './Layout'
import { Links } from './Links'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ForumIcon from '@mui/icons-material/Forum';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PostShare from './elements/PostShare';
import fetchapi from '../lib/api';
import Image from 'next/image';

const Template1 = ({ article, nextprev }) => {

    const [page, setPage] = useState(1);
    const [relatedPosts, setRelatedPosts] = useState({
        articles: [],
        total_articles: 0,
        pages_loaded: [],
        current_page: 1,
    });

    useEffect(() => {
        (async () => {
            try {
                let related = await fetchapi(`getarticles?uses=relatedposts&type=category&limit=3&page=${page}&slug=${article.url}`);
                const myarticles = related.articles.map(e => ({ ...e, page: page }));
                setRelatedPosts({
                    ...relatedPosts,
                    articles: !relatedPosts.pages_loaded.includes(page) ? [...relatedPosts.articles, ...myarticles] : relatedPosts.articles,
                    total_articles: related.total_articles,
                    pages_loaded: Array.from(new Set(relatedPosts.pages_loaded).add(page)),
                    current_page: page,
                });
            } catch (error) { console.log(error.message) }
        })();
    }, [page]);

    useEffect(() => {
        console.log(page)
    }, [page])

    const handlePageClick = (button) => {
        if (page >= 2 && page <= Math.ceil(relatedPosts.total_articles / 3) && button === "prev") {
            setPage(page - 1);
        }
        if (page >= 1 && page < Math.ceil(relatedPosts.total_articles / 3) && button === "next") {
            setPage(page + 1);
        }
    }

    return (
        <div>
            <Section>
                <Main>
                    <div>
                        <ul className='flex -m-0.5 text-xs'>
                            <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to='/'>Home</Links><NavigateNextIcon className='text-xs' /></li>
                            {article.parent_category && <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to={`/category/${article.parent_category}`}>{article.parent_category.split('-').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')}</Links><NavigateNextIcon className='text-xs' /></li>}
                            <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to={`/category/${article.category}`}>{article.category.split('-').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')}</Links><NavigateNextIcon className='text-xs' /></li>
                            <li className='p-0.5 text-[#747474]'>{article.title}</li>
                        </ul>
                    </div>
                    <div className='mt-3.5'>
                        <div className="flex text-[10px] text-white">
                            {article.parent_category && <span className='py-[3px] px-[6px] bg-[#8224e3] tracking-[0.8px] block mb-[5px] mr-[5px] whitespace-nowrap'><Links to={`/category/${article.parent_category}`}>{article.parent_category.split('-').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')}</Links></span>}
                            <span className='py-[3px] px-[6px] bg-[#6850e0] tracking-[0.8px] block mb-[5px] mr-[5px] whitespace-nowrap'><Links to={`/category/${article.category}`}>{article.category.split('-').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')}</Links></span>
                        </div>
                    </div>
                    <div className='mt-3.5'>
                        <h1 className='mb-4 font-normal text-[35px] leading-[46px]'>{article.title}</h1>
                        <p className='italic text-[#2e2e2e] text-lg font-extralight'>The full member list of the Trump Leadership Council, a group of corporate influencers who guided the president&#39;s anti-regulatory policy blitz.</p>
                    </div>
                    <div className='mt-5'>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-11px font-medium text-[#444] flex items-center"><img className='w-5 h-5 mr-3 rounded-full' src="/img/user.png" alt="" /><strong className="text-black mr-3"><Links to="/krishna">Krishna Prajapati</Links></strong> Aug 17, 2022</span>
                            <div className='flex space-x-5'>
                                <div className='text-xs flex items-center'><VisibilityIcon className='text-sm mr-1 text-[#444]' /> {article.views}</div>
                                <div className='text-xs flex items-center'><ForumIcon className='text-sm mr-1 text-[#444]' /> 0</div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <PostShare />
                    </div>
                    <div className="mt-5">
                        <img className='' src={article.img_url ? article.img_url : `/img/articles/flash/${article.img_comp}.jpg`} alt={article.title}></img>
                    </div>
                    <div className='mt-7 tracking-[0.2px] text-[16.4px]'>
                        <p className='max-w-[600px] mx-auto'>We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family&#39;s small dining room for breakfast.</p>
                        <strong className='max-w-[600px] block mt-7 mx-auto'>Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a beautiful picture.</strong>
                        <p className='max-w-[600px] mx-auto mt-7'>We were making our way to the Rila Mountains, where we were visiting the Rila Monastery where we enjoyed scrambled eggs, toast, mekitsi, local jam and peppermint tea.</p>
                        <figure className='mt-7'>
                            <img src="/img/girl2.jpg" alt="" />
                            <figcaption className='italic text-xs py-1'>Adderall and flirting with bulimia in an attempt to whittle herself</figcaption>
                        </figure>
                        <p className='max-w-[600px] mx-auto mt-7'>We wandered the site with busloads of other tourists, yet strangely the place did not seem crowded. I&#39;m not sure if it was the sheer size of the place, or whether the masses congregated in one area and didn&#39;t venture far from the main church, but I didn&#39;t feel overwhelmed by tourists in the monastery.</p>
                        <figure className='mt-7 float-right max-w-[307px] ml-6 mb-5'>
                            <img src="/img/boy1.jpg" alt="" />
                            <figcaption className='italic text-xs py-1'>Adderall and flirting with bulimia in an attempt to whittle herself</figcaption>
                        </figure>
                        <p className='max-w-[600px] mx-auto mt-7'>Headed over Lions Bridge and made our way to the Sofia Synagogue, then sheltered in the Central Market Hall until the recurrent (but short-lived) mid-afternoon rain passed.</p>
                        <p className='max-w-[600px] mx-auto mt-7'>Feeling refreshed after an espresso, we walked a short distance to the small but welcoming Banya Bashi Mosque, then descended into the ancient Serdica complex.</p>
                        <p className='max-w-[600px] mx-auto mt-7'>We were exhausted after a long day of travel, so we headed back to the hotel and crashed.</p>
                        <p className='max-w-[600px] mx-auto mt-7'>I had low expectations about Sofia as a city, but after the walking tour I absolutely loved the place. This was an easy city to navigate, and it was a beautiful city – despite its ugly, staunch and stolid communist-built surrounds. Sofia has a very average facade as you enter the city, but once you lose yourself in the old town area, everything changes.</p>
                        <blockquote><p className='text-[#4db2ec] italic text-[31px] text-center mt-7'>IF YOU HAVE IT, YOU CAN MAKE ANYTHING LOOK GOOD</p></blockquote>
                        <p className='max-w-[600px] mx-auto mt-7'>Clothes can transform your mood and confidence. Fashion moves so quickly that, unless you have a strong point of view, you can lose integrity. I like to be real. I don&#39;t like things to be staged or fussy. I think I&#39; go mad if I didn&#39;t have a place to escape to. You have to stay true to your heritage, that’s what your brand is about.</p>
                    </div>
                    <div className='pt-7 pb-6 mt-7 border-t border-b'>
                        <PostShare />
                    </div>
                    {(nextprev.prev || nextprev.next) && <div className='mt-7 flex'>
                        {nextprev.prev && <div className='w-1/2 pr-4'>
                            <span className='text-xs text-[#747474] justify-start flex-1'>Previous article</span>
                            <Links className='block text-[14px] font-medium hover:text-sky-400 transition-colors' to={`/${nextprev.prev.url}`}>{nextprev.prev.title}</Links>
                        </div>}
                        {nextprev.next && <div className='w-1/2 pl-4 justify-end flex-1'>
                            <span className='text-xs text-[#747474] block text-right'>Next article</span>
                            <Links className='block text-[14px] font-medium text-right hover:text-sky-400 transition-colors' to={`/${nextprev.next.url}`}>{nextprev.next.title}</Links>
                        </div>}
                    </div>}
                    <div className="mt-7 flex p-[21px] border">
                        <div className='w-[18%]'><a href='https://kkp785216.github.io/krishna-portfolio/' target='_blank' rel='noreferrer'><img className='w-full' src="/img/user.png" alt="" title='Krishna Prajapati' /></a></div>
                        <div className='w-[82%] pl-[21px]'>
                            <a className='font-semibold hover:text-sky-400 block' href='https://kkp785216.github.io/krishna-portfolio/' target='_blank' rel='noreferrer'>Krishna Prajapati</a>
                            <span className='block italic text-xs mt-2 hover:text-sky-400'><a href='https://kkp785216.github.io/krishna-portfolio/' target='_blank' rel='noreferrer'>https://kkp785216.github.io/krishna-portfolio/</a></span>
                            <p className='text-[13.5px] mt-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ac vehicula leo. Donec urna lacus gravida ac vulputate sagittis tristique vitae lectus. Nullam rhoncus tortor at dignissim vehicula.</p>
                            <div className='flex mt-4 mb-2'>
                                <a className='mr-5' href='http://facebook.com' target='_blank' rel='noreferrer'><img className='w-[14px]' src="/img/social/facebook.png" alt="" /></a>
                                <a className='mr-5' href='http://instagram.com' target='_blank' rel='noreferrer'><img className='w-[14px]' src="/img/social/instagram.png" alt="" /></a>
                                <a className='mr-5' href='http://twitter.com' target='_blank' rel='noreferrer'><img className='w-[14px]' src="/img/social/twitter.png" alt="" /></a>
                                <a href='http://youtube.com' target='_blank' rel='noreferrer'><img className='w-[14px]' src="/img/social/youtube.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-11'>
                        <div className="border-b-2 w-full mb-6 border-black">
                            <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">RELATED ARTICLES</span>
                        </div>
                        <div className='flex -m-3' key={relatedPosts.current_page}>
                            {relatedPosts.articles.filter(e => e.page === relatedPosts.current_page).map(e => (
                                <div className="p-3 w-full md:w-1/3" key={e.order} title={e.title}>
                                    <div className="group">
                                        <Links to={`/${e.url}`} className="relative block pb-[72%] overflow-hidden">
                                            <Image layout='fill' width='485' height='360' src={e.img_url ? e.img_url : `/img/articles/485x360/${e.img_comp}.jpg`} alt={e.title}></Image>
                                            <span className="absolute bottom-0 left-0 text-mywhite bg-black group-hover:bg-blue-500 block w-fit px-1.5 py-0.5 text-10px capitalize">{e.category.replace('-', ' ')}</span>
                                        </Links>
                                        <h3 className="text-[13px] font-medium mt-2 group-hover:text-sky-400"><Links to={`/${e.url}`}>{e.title}</Links></h3>
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
                    </div>
                </Main>
                <Aside>

                </Aside>
            </Section>
        </div>
    )
}

export default Template1