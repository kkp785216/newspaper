import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import Image from 'next/image';
import { Links } from '../Links';

const PostShare = () => {
    return (
        <div className='flex'>
            <div className='flex items-center text-[#444] mr-[18px] mb-[7px] border rounded-sm h-10 px-3 relative bg-white before:border-[9px_0_9px_11px] before:border-[transparent_transparent_transparent_#e9e9e9] before:absolute before:top-1/2 before:left-full before:w-0 before:h-0 before:-translate-y-1/2 after:border-[8px_0_8px_10px] after:border-[transparent_transparent_transparent_#fff] after:absolute after:top-1/2 after:left-full after:w-0 after:h-0 after:-translate-y-1/2'>
                <ShareIcon style={{fontSize: '15px'}} />
                <div className="w-px h-5 mx-3 bg-[#e5e7eb]"></div>
                <span className='text-xs text-black font-medium'>Share</span>
            </div>
            <Links to={`https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdemo.tagdiv.com%2Fnewspaper_pro%2Ftd-post-how-to-burn-calories-with-pleasant-activities%2F`} className='h-10 w-10 flex items-center justify-center bg-[#516eab] rounded-sm mx-[3px] mb-[7px] hover:opacity-80 transition-opacity duration-300'>
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
    )
}

export default PostShare