import React from 'react'

const RecentComments = () => {
    return (
        <div>
            <div className="border-b-2 w-full mb-6 border-black">
                <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">Recent Comments</span>
            </div>
            <div>
                {[1,2,3,4].map(() => (<div className='pb-[15px] leading-normal'>
                    <span className='text-xs'>Mary Dill on </span>
                    <a className='font-medium italic text-sm hover:text-sky-400 text-[#303030]' href="/">Another Big Apartment Project Slated for Broad Ripple Company</a>
                </div>))}
            </div>
        </div>
    )
}

export default RecentComments