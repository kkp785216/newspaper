import React from 'react'
import LazyLoad from 'react-lazy-load'

export const Ad300 = () => {
    return (
        <div className="mt-7">
            <span className="text-11px mb-1 text-gray-500 block text-center">- Advertisment -</span>
            <LazyLoad><img className="m-auto" src="/img/newspaper-rec300c.jpg" alt="" /></LazyLoad>
        </div>
    )
}