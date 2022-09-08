import React from 'react'
import { Link } from 'react-router-dom'

const formatDate = (input) => {
  const date = new Date(input);
  return `${['January', 'February', 'Marth', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const Article = ({title, img_url, img_comp, date, url, author}) => {
  return (
    <div className="group w-1/2 px-5 py-4" title={title}>
      <Link to={`/${url}`} className="relative w-full block overflow-hidden pb-[50%]">
        <img className="absolute top-0 left-0 right-0 bottom-0" src={img_url ? img_url : `./img/articles/485x360/${img_comp}.jpg`} alt={title} />
        <span className="absolute bottom-0 left-0 text-mywhite bg-black group-hover:bg-blue-500 block w-fit px-1.5 py-0.5 text-10px">New Look</span>
      </Link>
      <h3 className="text-21px leading-7 mt-3 group-hover:text-sky-400"><Link to={`/${url}`}>{title}</Link></h3>
      <div className="flex justify-between items-center mt-2">
        <span className="text-11px font-medium text-gray-500"><strong className="text-black"><Link to={`/${author}`}>Krishna Prajapati</Link></strong> - {formatDate(date)}</span>
        <span className="td-module-comments"><Link to={`/${url}`}>0</Link></span>
      </div>
    </div>
  )
}

export default Article