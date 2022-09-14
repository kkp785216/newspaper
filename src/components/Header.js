import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load';
import { useSelector } from 'react-redux';

const Header = () => {

    const { category, config } = useSelector(state => state);

    return (
        <header className="shadow-md relative">
            <div className="bg-black text-[#f4f4f4]">
                <div className="max-w-screen-lg flex space-x-9 text-11px font-medium m-auto justify-between items-center">
                    <div className="flex space-x-9">
                        <div className="flex space-x-9">
                            <span><strong>11.8<sup>oC </sup></strong>New York</span>
                            <span>Monday, December 27, 2021</span>
                        </div>
                        <ul className="flex space-x-3">
                            <li><Link className="hover:text-blue-400" to="/">Sin in / Join</Link></li>
                            <li><Link className="hover:text-blue-400" to="/">Forum</Link></li>
                            <li><Link className="hover:text-blue-400" to="/">Buy now!</Link></li>
                        </ul>
                    </div>
                    <div className="flex">
                        <Link className="p-2" to="/"><img className="invert w-3" src="/img/social/facebook.png" alt="" /></Link>
                        <Link className="p-2" to="/"><img className="invert w-3" src="/img/social/instagram.png" alt="" /></Link>
                        <Link className="p-2" to="/"><img className="invert w-3" src="/img/social/twitter.png" alt="" /></Link>
                        <Link className="p-2" to="/"><img className="invert w-3" src="/img/social/vimeo.png" alt="" /></Link>
                        <Link className="p-2" to="/#"><img className="invert w-3" src="/img/social/youtube.png" alt="" /></Link>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg m-auto">
                <div className="flex justify-center space-x-6 pt-7 pb-3">
                    <Link to='/'><LazyLoad><img src="/img/newspaper-11-logo-blue.png" alt="" /></LazyLoad></Link>
                    <Link to='/blog'><LazyLoad><img src="/img/newspaper-rec728.jpg" alt="" /></LazyLoad></Link>
                </div>
                <nav>
                    <ul className="flex">
                        <li><Link className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 active" to="/">News</Link></li>
                        {/* <li><Link className="p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" to="/">Faishon <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="64" d="M112 184l144 144 144-144" /></svg></Link></li>
                        <li><Link className="p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" to="/">Gadget <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="64" d="M112 184l144 144 144-144" /></svg></Link></li>
                        <li><Link className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" to="/">Lifestyle</Link></li>
                        <li><Link className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" to="/">Video</Link></li>
                        <li><Link className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0" to="/">Features</Link></li> */}
                        {/* {(()=>{
                            config.map()
                        })()} */}
                        {config.menu?.map((e, i) => ((() => {
                            const menu = category.find(a => e.url === a.url && e.type === a.type);
                            if (menu && e.menu_type === 'mega' && e.type === 'parent') {
                                return <li key={i}>
                                    <Link className="p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 uppercase" to={`/category/${menu.url}`}>{menu.name} <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="64" d="M112 184l144 144 144-144" /></svg></Link>
                                    <div className="absolute left-6 right-6 top-full z-20 bg-white flex shadow-md border-t">
                                        <div className='w-1/6 p-6 border-r'>
                                            <ul>
                                                <li><Link className='block text-right text-13px font-medium mb-2 [&.active]:text-sky-400 capitalize' to='/'>All</Link></li>
                                                <li><Link className='block text-right text-13px font-medium mb-2 [&.active]:text-sky-400 capitalize' to='/'>New Look</Link></li>
                                                <li><Link className='block text-right text-13px font-medium mb-2 [&.active]:text-sky-400 capitalize' to='/'>Street Faishon</Link></li>
                                                <li><Link className='block text-right text-13px font-medium mb-2 [&.active]:text-sky-400 capitalize' to='/'>Style Hunter</Link></li>
                                                <li><Link className='block text-right text-13px font-medium mb-2 [&.active]:text-sky-400 capitalize' to='/'>Vouge</Link></li>
                                            </ul>
                                        </div>
                                        <div className='w-5/6 p-6'>
                                            <div className=' flex space-x-6'>
                                                {[1, 2, 3, 4].map((e, i) => (<div className="group w-1/4" key={i}>
                                                    <Link to='/' className="relative block pb-[70%] overflow-hidden">
                                                        <LazyLoad><img className="absolute top-0 left-0 right-0 bottom-0 transition-all duration-[.5s]" src='/img/articles/485x360/5.jpg' alt="" /></LazyLoad>
                                                        <span className="absolute bottom-0 left-0 text-mywhite bg-black group-hover:bg-blue-500 block w-fit px-1.5 py-0.5 text-10px capitalize">New Fashion</span>
                                                    </Link>
                                                    <h3 className="text-[15px] font-medium leading-5 mt-2 group-hover:text-sky-400"><Link to='/'>Fashion Outfit Ideas From the Biggest Instagram Influencers</Link></h3>
                                                    <span className="text-11px font-medium text-gray-500">August 19, 2019</span>
                                                </div>))}
                                            </div>
                                            <div className="flex space-x-2 mt-8">
                                                <button className="border p-1.5 hover:bg-blue-400 hover:border-blue-400 transition-all duration-150 text-[#b7b7b7] hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg>
                                                </button>
                                                <button className="border p-1.5 hover:bg-blue-400 hover:border-blue-400 transition-all duration-150 text-[#b7b7b7] hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            }
                            else if (menu && e.menu_type === 'mega' && e.type === 'category') {
                                return <li key={i}><Link className="p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 uppercase" to={`/category/${menu.parent}/${menu.url}`}>{menu.name} <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="64" d="M112 184l144 144 144-144" /></svg></Link></li>
                            }
                            else if (menu && e.menu_type === 'normal' && e.type === 'parent') {
                                return <li key={i}><Link className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 uppercase" to={`/category/${menu.url}`}>{menu.name}</Link></li>
                            }
                            else if (menu && e.menu_type === 'normal' && e.type === 'category') {
                                return <li key={i}><Link className="p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 uppercase" to={`/category/${menu.parent}/${menu.url}`}>{menu.name}</Link></li>
                            }
                        })()))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header