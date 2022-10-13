import React from 'react'
import { Links } from './Links'
import Image from 'next/image'

const FooterPosts = ({ heading, articles }) => {
  return (
    <div>
      <h4 className='text-[19px] mb-5 font-medium uppercase'>{heading}</h4>
      {articles.map((e, i) => (
        <div className="flex space-x-4 md:space-x-3 lg:space-x-4 group mb-7 md:mb-6" title={e.title} key={i}>
          <Links className="w-1/3 md:w-[30%]" to={`/${e.url}`}>
            <div className="flex"><Image className="w-full object-cover" src={e.img_url ? e.img_url : `/img/articles/218x150/${e.img_comp}.jpg`} alt={e.title} width="218" height="150" /></div>
          </Links>
          <div className="w-2/3 md:w-[70%]">
            <h3 className="text-sm md:text-[12.5px] lg:text-sm md:leading-5 text-white group-hover:text-sky-400 font-medium"><Links to={`/${e.url}`}>{e.title}</Links></h3>
            <span className="text-11px font-medium text-gray-500">August 7, 2019</span>
          </div>
        </div>))}
    </div>
  )
}

export default FooterPosts