import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../redux/action';
import FooterPosts from './FooterPosts';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Footer = () => {

    const { config, footer_editor_choice, footer_most_popular, category } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        !footer_editor_choice.length >= 1 &&
            dispatch(action({
                type: 'FOOTER_EDITOR_CHOICE',
            }));

        !footer_most_popular.length >= 1 &&
            dispatch(action({
                type: 'FOOTER_MOST_POPULAR',
            }));
        // eslint-disable-next-line
    }, [footer_editor_choice, footer_most_popular]);

    return (
        <footer className='mt-7 md:mt-11'>
            <div className='min-h-[717px] w-full text-white' style={{ background: `linear-gradient(rgb(0 0 0 / 80%), rgb(0 0 0 / 80%)), url("${config.footer_background}") no-repeat top / cover` }}>
                <div className='md:max-w-screen-md lg:max-w-screen-lg lg1140:max-w-[1068px] px-5 lg:px-[22px] lg1140:px-0 m-auto pt-8 md:pt-11'>
                    <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-[28px] lg:space-x-11'>
                        <div className='w-full md:w-2/3'>
                            <div className='flex flex-wrap flex-col md:flex-row -mx-5 md:-mx-[10px] lg:-mx-5 md:-my-4'>
                                <div className="w-full md:w-1/2 px-5 md:px-[10px] lg:px-5 md:py-4">
                                    {footer_editor_choice.length >= 1 && <FooterPosts heading='Editor Choice' articles={footer_editor_choice} />}
                                </div>
                                <div className="w-full md:w-1/2 px-5 md:px-[10px] lg:px-5 py-1 md:py-4">
                                    {footer_most_popular.length >= 1 && <FooterPosts heading='Popular Posts' articles={footer_most_popular} />}
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <div className="w-full">
                                <h4 className='text-[19px] mb-5 font-medium uppercase'>POPULAR CATEGORY</h4>
                                <div>
                                    <ul>
                                        {category.concat().splice(0, 6).map((e, i) => (<li key={i} className='flex justify-between space-y-2.5 group'>
                                            <Link className='text-sm md:text-[12.5px] lg:text-sm md:leading-5 text-white group-hover:text-sky-400 font-medi groupum' to="/">{e.name}</Link>
                                            <Link className='text-sm md:text-[12.5px] lg:text-sm md:leading-5 text-white group-hover:text-sky-400 font-medium' to="/">20</Link>
                                        </li>))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-11 h-px w-4/5 bg-[#ffffff1a] mx-auto'></div>
                    <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-[28px] lg:space-x-11'>
                        <div className='w-full md:w-2/3'>
                            <div className='flex flex-col md:flex-row -mx-5 md:-mx-[10px] lg:-mx-5 -my-4'>
                                <div className='w-full md:w-[38%] px-5 md:px-[10px] lg:px-5 py-4'>
                                    <Link to='/'><LazyLoad><img className='block mx-auto md:mx-0' src="/img/newspaper-11-logo-white.png" alt="" /></LazyLoad></Link>
                                </div>
                                <div className='w-full md:w-[62%] px-5 md:px-[10px] lg:px-5 py-4'>
                                    <h4 className='text-[19px] mb-7 font-semibold uppercase text-center md:text-left  pt-3 md:pt-0'>About Us</h4>
                                    <p className='text-[14px] md:text-[13.5px] lg:text-[14.5px] mb-5'>Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.</p>
                                    <span className='text-[14.5px]'>Contact us: <a className='text-sky-400' href='mailto:contact@yoursite.com'>contact@yoursite.com</a></span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <h4 className='text-[19px] mb-7 font-semibold uppercase text-center md:text-left pt-3 md:pt-0'>Follow Us</h4>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#0d0d0d] text-[#cccccc]'>
                <div className='md:max-w-screen-md lg:max-w-screen-lg lg1140:max-w-[1068px] px-5 py-4 md:py-2.5  lg:px-[22px] lg1140:px-0 m-auto text-12px flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between'>
                   <span>&copy; Newspaper React App 💖 with Krishna Prajapati</span>
                   <div className='m-auto md:m-0 md:ml-auto'>
                        <ul className='flex -m-2'>
                            <li className='p-2'><Link to='/'>Disclaimer</Link></li>
                            <li className='p-2'><Link to='/'>Privacy</Link></li>
                            <li className='p-2'><Link to='/'>Advertisement</Link></li>
                            <li className='p-2'><Link to='/'>Contact us</Link></li>
                        </ul>
                   </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer