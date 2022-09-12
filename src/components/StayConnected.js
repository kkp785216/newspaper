import React from 'react'

const StayConnected = () => {
    return (
        <div>
            <div className="border-b-2 w-full mb-6 border-black">
                <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-mywhite bg-black">Stay Connected</span>
            </div>
            <div>
                <div className="flex justify-between items-center text-11px font-bold tracking-wide mb-3">
                    <divl className="flex space-x-3 items-center">
                        <div className="p-3 bg-blue-600"><img className="invert w-4" src="/img/social/facebook.png" alt="" /></div>
                        <span>22,034</span>
                        <span>Fans</span>
                    </divl>
                    <span className="uppercase">Like</span>
                </div>
                <div className="flex justify-between items-center text-11px font-bold tracking-wide mb-3">
                    <divl className="flex space-x-3 items-center">
                        <div className="p-3 bg-cyan-400"><img className="invert w-4" src="/img/social/twitter.png" alt="" /></div>
                        <span>3,085</span>
                        <span>Followers</span>
                    </divl>
                    <span className="uppercase">Follow</span>
                </div>
                <div className="flex justify-between items-center text-11px font-bold tracking-wide mb-3">
                    <divl className="flex space-x-3 items-center">
                        <div className="p-3 bg-red-600"><img className="invert w-4" src="/img/social/youtube.png" alt="" /></div>
                        <span>18,990</span>
                        <span>Subscribers</span>
                    </divl>
                    <span className="uppercase">Subscribe</span>
                </div>
            </div>
        </div>
    )
}

export default StayConnected