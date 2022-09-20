import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load';
import { useSelector } from 'react-redux';
import MegaMenuParent from './MegaMenuParent';
import MegaMenuCategory from './MegaMenuCategory';
import MegaMenuSubCategory from './MegaMenuSubCategory';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

    const { category, config } = useSelector(state => state);

    return (
        <header className="shadow-md relative">
            <div className="bg-black text-[#f4f4f4] hidden md:block">
                <div className="md:max-w-screen-md lg:max-w-screen-lg lg1140:max-w-[1068px] px-3.5 lg:px-[22px] lg1140:px-0 flex space-x-9 text-11px font-medium m-auto justify-between items-center">
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
            <div className="md:max-w-screen-md lg:max-w-screen-lg lg1140:max-w-[1068px] px-3.5 lg:px-[22px] lg1140:px-0 m-auto hidden md:block">
                <div className="flex justify-center space-x-6 pt-7 pb-3">
                    <Link to='/'><LazyLoad><img src="/img/newspaper-11-logo-blue.png" alt="" /></LazyLoad></Link>
                    <Link to='/blog'><LazyLoad><img src="/img/newspaper-rec728.jpg" alt="" /></LazyLoad></Link>
                </div>
                <nav>
                    <ul className="flex">
                        <li><Link className="text-[11px] lg:text-sm p-2.5 lg:p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 active uppercase" to="/">News</Link></li>
                        {config.menu && category.length >= 1 && config.menu.map((config_menu, i) => ((() => {
                            const menu = category.find(all_menu => config_menu.url === all_menu.url && config_menu.type === all_menu.type);
                            if (menu && config_menu.menu_type === 'mega' && config_menu.type === 'parent') {
                                return <li key={i} className="menu">
                                    <Link className="text-[11px] lg:text-sm p-2.5 lg:p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 uppercase" to={`/category/${menu.url}`}>{menu.name} <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="64" d="M112 184l144 144 144-144" /></svg></Link>
                                    <MegaMenuParent config_menu={config_menu} />
                                </li>
                            }
                            else if (menu && config_menu.menu_type === 'mega' && config_menu.type === 'category') {
                                return <li key={i} className='menu'>
                                    <Link className="text-[11px] lg:text-sm p-2.5 lg:p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 uppercase" to={`/category/${menu.parent}/${menu.url}`}>{menu.name} <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="64" d="M112 184l144 144 144-144" /></svg></Link>
                                    <MegaMenuCategory config_menu={config_menu} />
                                </li>
                            }
                            else if (menu && config_menu.menu_type === 'mega' && config_menu.type === 'sub_category') {
                                return <li key={i} className='menu'>
                                    <Link className="text-[11px] lg:text-sm p-2.5 lg:p-3 text-sm font-bold flex  before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 uppercase" to={`/category/${menu.parent}/${menu.url}`}>{menu.name} <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-3 ml-1.5" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="64" d="M112 184l144 144 144-144" /></svg></Link>
                                    <MegaMenuSubCategory config_menu={config_menu} />
                                </li>
                            }
                            else if (menu && config_menu.menu_type === 'normal' && config_menu.type === 'parent') {
                                return <li key={i}><Link className="text-[11px] lg:text-sm p-2.5 lg:p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 uppercase" to={`/category/${menu.url}`}>{menu.name}</Link></li>
                            }
                            else if (menu && config_menu.menu_type === 'normal' && config_menu.type === 'category') {
                                return <li key={i}><Link className="text-[11px] lg:text-sm p-2.5 lg:p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 uppercase" to={`/category/${menu.parent}/${menu.url}`}>{menu.name}</Link></li>
                            }
                            else if (config_menu.menu_type === 'normal' && config_menu.type === 'external') {
                                return <li key={i}><a className="text-[11px] lg:text-sm p-2.5 lg:p-3 text-sm font-bold block before:transition-all before:m-auto relative before:w-0 [&.active:before]:w-full hover:before:w-full before:h-[3px] before:bg-blue-400 before:absolute before:bottom-0 before:left-0 before:right-0 uppercase" href={config_menu.url} target='_blank' without rel="noreferrer">{config_menu.title}</a></li>
                            }
                        })()))}
                    </ul>
                </nav>
            </div>
            {/* Mobile Header */}
            <div className='bg-[#222222] text-white flex md:hidden justify-between items-center h-[56px] leading-[56px] overflow-hidden'>
                <MenuIcon style={{fontSize: '29px'}} className='px-5 py-[28px] box-content cursor-pointer'/>
                <Link to='/' className='max-w-[180px]'><LazyLoad><img src="/img/newspaper-11-logo-white.png" alt="" /></LazyLoad></Link>
                <svg version="1.1" className='w-[22px] px-5 py-[28px] box-content cursor-pointer' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M946.371 843.601l-125.379-125.44c43.643-65.925 65.495-142.1 65.475-218.040 0.051-101.069-38.676-202.588-115.835-279.706-77.117-77.148-178.606-115.948-279.644-115.886-101.079-0.061-202.557 38.738-279.665 115.876-77.169 77.128-115.937 178.627-115.907 279.716-0.031 101.069 38.728 202.588 115.907 279.665 77.117 77.117 178.616 115.825 279.665 115.804 75.94 0.020 152.136-21.862 218.061-65.495l125.348 125.46c30.915 30.904 81.029 30.904 111.954 0.020 30.915-30.935 30.915-81.029 0.020-111.974zM705.772 714.925c-59.443 59.341-136.899 88.842-214.784 88.924-77.896-0.082-155.341-29.583-214.784-88.924-59.443-59.484-88.975-136.919-89.037-214.804 0.061-77.885 29.604-155.372 89.037-214.825 59.464-59.443 136.878-88.945 214.784-89.016 77.865 0.082 155.3 29.583 214.784 89.016 59.361 59.464 88.914 136.919 88.945 214.825-0.041 77.885-29.583 155.361-88.945 214.804z"></path></svg>
            </div>
        </header>
    )
}

export default Header