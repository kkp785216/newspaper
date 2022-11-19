import React from 'react'
import { Links } from './Links'
import Image from 'next/image';


const formatDate = (input) => {
  const date = new Date(input);
  return `${['January', 'February', 'Marth', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const Article = ({ title, img_url, img_comp, date, url, author, commentCount }) => {

  return (
    <div className="group w-full md:w-1/2 px-5 md:px-[10px] lg:px-5 py-4" title={title}>
      <Links to={`/${url}`} className="relative w-full block overflow-hidden pb-[50%]">
        <Image className='absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover transition-all duration-[.5s]' layout='fill' width='485' height='360' src={img_url ? img_url : `/img/articles/485x360/${img_comp}.jpg`} alt={title}></Image>
        <span className="absolute bottom-0 left-0 text-mywhite bg-black group-hover:bg-blue-500 block w-fit px-1.5 py-0.5 text-10px">New Look</span>
      </Links>
      <h3 className="text-21px md:text-[16.7px] md:font-base leading-7 md:leading-6 lg:leading-7 mt-3 group-hover:text-sky-400"><Links to={`/${url}`}>{title}</Links></h3>
      <div className="flex justify-between items-center mt-2">
        <span className="text-11px font-medium text-gray-500"><strong className="text-black"><Links to={`/${author}`}>Krishna Prajapati</Links></strong> - {formatDate(date)}</span>
        <span className="td-module-comments"><Links to={`/${url}`}>{commentCount}</Links></span>
      </div>
    </div>
  )
}

export default Article