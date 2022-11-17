import React from 'react'
import { Links } from './Links'

const RecentComments = () => {
    return (
        <div>
            <div className="border-b-2 w-full mb-6 border-black">
                <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">Recent Comments</span>
            </div>
            <div>
                {[1,2,3,4].map((element, index) => (<div className='pb-[15px] leading-normal' key={index}>
                    <span className='text-xs'>Mary Dill on </span>
                    <Links className='font-medium italic text-sm hover:text-sky-400 text-[#303030]' to="/">Another Big Apartment Project Slated for Broad Ripple Company</Links>
                </div>))}
            </div>
        </div>
    )
}

export default RecentComments