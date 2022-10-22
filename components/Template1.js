import React from 'react'
import { Aside, Section, Main } from './Layout'
import { Links } from './Links'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ForumIcon from '@mui/icons-material/Forum';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import Image from 'next/image';

const Template1 = () => {
    return (
        <div>
            <Section>
                <Main>
                    <div>
                        <ul className='flex -m-0.5 text-xs'>
                            <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to='/'>Home</Links><NavigateNextIcon className='text-xs' /></li>
                            <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to='/'>Lifestyle</Links><NavigateNextIcon className='text-xs' /></li>
                            <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to='/'>Travel</Links><NavigateNextIcon className='text-xs' /></li>
                            <li className='p-0.5 text-[#747474]'>Best Things You Can Do on a Solo Mountain Climb</li>
                        </ul>
                    </div>
                    <div className='mt-3.5'>
                        <div className="flex text-[10px] text-white">
                            <span className='py-[3px] px-[6px] bg-[#8224e3] tracking-[0.8px] block mb-[5px] mr-[5px] whitespace-nowrap'><Links to='/'>Lifestyle</Links></span>
                            <span className='py-[3px] px-[6px] bg-[#6850e0] tracking-[0.8px] block mb-[5px] mr-[5px] whitespace-nowrap'><Links to='/'>Travel</Links></span>
                        </div>
                    </div>
                    <div className='mt-3.5'>
                        <h1 className='mb-4 font-normal text-[35px] leading-[46px]'>Discover the Most Magical Sunset in Santorini</h1>
                        <p className='italic text-[#2e2e2e] text-lg font-extralight'>The full member list of the Trump Leadership Council, a group of corporate influencers who guided the president&#39;s anti-regulatory policy blitz.</p>
                    </div>
                    <div className='mt-5'>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-11px font-medium text-[#444] flex items-center"><img className='w-5 h-5 mr-3 rounded-full' src="/img/user.png" alt="" /><strong className="text-black mr-3"><Links to="/krishna">Krishna Prajapati</Links></strong> Aug 17, 2022</span>
                            <div className='flex space-x-5'>
                                <div className='text-xs flex items-center'><VisibilityIcon className='text-sm mr-1 text-[#444]' /> 0</div>
                                <div className='text-xs flex items-center'><ForumIcon className='text-sm mr-1 text-[#444]' /> 0</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <div className='flex items-center text-[#444] mr-[18px] mb-[7px] border rounded-sm h-10 px-3 relative bg-white before:border-[9px_0_9px_11px] before:border-[transparent_transparent_transparent_#e9e9e9] before:absolute before:top-1/2 before:left-full before:w-0 before:h-0 before:-translate-y-1/2 after:border-[8px_0_8px_10px] after:border-[transparent_transparent_transparent_#fff] after:absolute after:top-1/2 after:left-full after:w-0 after:h-0 after:-translate-y-1/2'>
                            <ShareIcon className='text-[15px]' />
                            <div className="w-px h-5 mx-3 bg-[#e5e7eb]"></div>
                            <span className='text-xs text-black font-medium'>Share</span>
                        </div>
                        <Links to='https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdemo.tagdiv.com%2Fnewspaper_pro%2Ftd-post-how-to-burn-calories-with-pleasant-activities%2F' className='h-10 w-10 flex items-center justify-center bg-[#516eab] rounded-sm mx-[3px] mb-[7px] hover:opacity-80 transition-opacity duration-300'>
                            <Image width='15' height='15' layout='fixed' className="invert w-3" src="/img/social/facebook.png" alt="" />
                        </Links>
                        <Links to='https://twitter.com/intent/tweet?text=How+to+Burn+Calories+with+Pleasant+Activities&url=https%3A%2F%2Fdemo.tagdiv.com%2Fnewspaper_pro%2Ftd-post-how-to-burn-calories-with-pleasant-activities%2F&via=Newspaper+Demo+%7C+The+Best+News+Magazine+WordPress+Theme' className='h-10 w-10 flex items-center justify-center bg-[#29c5f6] rounded-sm mx-[3px] mb-[7px] hover:opacity-80 transition-opacity duration-300'>
                            <Image width='15' height='15' layout='fixed' className="invert w-3" src="/img/social/twitter.png" alt="" />
                        </Links>
                        <Links to='https://pinterest.com/pin/create/button/?url=https://demo.tagdiv.com/newspaper_pro/td-post-how-to-burn-calories-with-pleasant-activities/&media=https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/61.jpg&description=How+to+Burn+Calories+with+Pleasant+Activities' className='h-10 w-10 flex items-center justify-center bg-[#ca212a] rounded-sm mx-[3px] mb-[7px] hover:opacity-80 transition-opacity duration-300'>
                            <Image width='15' height='15' layout='fixed' className="invert w-3" src="/img/social/pintrest.png" alt="" />
                        </Links>
                        <Links to='https://api.whatsapp.com/send?text=How+to+Burn+Calories+with+Pleasant+Activities%20%0A%0A%20https://demo.tagdiv.com/newspaper_pro/td-post-how-to-burn-calories-with-pleasant-activities/' className='h-10 w-10 flex items-center justify-center bg-[#7bbf6a] rounded-sm mx-[3px] mb-[7px] hover:opacity-80 transition-opacity duration-300'>
                            <Image width='18' height='18' layout='fixed' className="invert w-3" src="/img/social/whatsapp.svg" alt="" />
                        </Links>
                    </div>
                    <div className="mt-5">
                        <img className='' src="/img/articles/flash/67.jpg" alt=""></img>
                    </div>
                    <div className='mt-7 tracking-[0.2px] text-[16.4px]'>
                        <p className='max-w-[600px] mx-auto'>We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family&#39;s small dining room for breakfast.</p>
                        <strong className='max-w-[600px] block mt-7 mx-auto'>Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a beautiful picture.</strong>
                        <p className='max-w-[600px] mx-auto mt-7'>We were making our way to the Rila Mountains, where we were visiting the Rila Monastery where we enjoyed scrambled eggs, toast, mekitsi, local jam and peppermint tea.</p>
                        <figure className='mt-7'>
                            <img src="/img/girl2.jpg" alt="" />
                            <figcaption className='italic text-xs py-1'>Adderall and flirting with bulimia in an attempt to whittle herself</figcaption>
                        </figure>
                        <p className='max-w-[600px] mx-auto mt-7'>We wandered the site with busloads of other tourists, yet strangely the place did not seem crowded. I&#39;m not sure if it was the sheer size of the place, or whether the masses congregated in one area and didn&#39;t venture far from the main church, but I didn’t feel overwhelmed by tourists in the monastery.</p>
                    </div>
                </Main>
                <Aside>

                </Aside>
            </Section>
        </div>
    )
}

export default Template1