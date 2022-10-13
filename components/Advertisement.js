import React from 'react'
import LazyLoad from 'react-lazy-load'
import Image from 'next/image'

export const Ad300 = () => {
    return (
        <div className="mt-7">
            <span className="text-11px mb-1 text-gray-500 block text-center">- Advertisment -</span>
            <div className='flex justify-center'><Image className="m-auto" width='300' height='250' src="/img/newspaper-rec300c.jpg" alt="" /></div>
        </div>
    )
}