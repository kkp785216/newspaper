import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';

const CategoryBanner = () => {
  return (
    <div className='relative'>
      <div className='overflow-hidden w-full h-[445px] before:bg-[#00000080] before:w-full before:h-full before:absolute'>
        <img className='object-center w-full h-full object-cover' src="/img/banners/1.jpg" alt="" />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 text-white">
        {/* Breadcrumb */}
        <div className='md:max-w-screen-md lg:max-w-screen-lg lg1140:max-w-[1068px] px-5 lg:px-[22px] lg1140:px-0 m-auto h-full'>
          <div className='pt-6'>
            <ul className='text-xs flex -m-0.5'>
              <li className='p-0.5'><Link className='hover:text-black' href='/'>Home</Link><NavigateNextIcon style={{ fontSize: '12px' }} /></li>
              <li className='p-0.5'><Link className='hover:text-black' href='/'>Fashion</Link></li>
              {/* {article.parent_category && <li className='p-0.5 text-[#747474]'><Link className='hover:text-black' href={`/category/${article.parent_category}`}>{article.parent_category.split('-').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')}</Link><NavigateNextIcon style={{ fontSize: '12px' }} /></li>}
            <li className='p-0.5 text-[#747474]'><Link className='hover:text-black' href={`/category/${article.category}`}>{article.category.split('-').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')}</Link><NavigateNextIcon style={{ fontSize: '12px' }} /></li>
            <li className='p-0.5 text-[#747474]'>{article.title}</li> */}
            </ul>
          </div>
          <div className='mt-[100px]'>
            <h1 className='text-4xl uppercase font-bold mb-5'>Fashion</h1>
            <ul className='flex text-xs mb-4'>
              <li className='mr-1 mb-1 group p-px bg-[#f96945]'><Link className='group-hover:bg-[#00000071] transition duration-300 block px-2 py-px' href="/">New Look</Link></li>
              <li className='mr-1 mb-1 group p-px bg-[#f24d4d]'><Link className='group-hover:bg-[#00000071] transition duration-300 block px-2 py-px' href="/">Street Fashion</Link></li>
              <li className='mr-1 mb-1 group p-px bg-[#e8436c]'><Link className='group-hover:bg-[#00000071] transition duration-300 block px-2 py-px' href="/">Style Hunter</Link></li>
              <li className='mr-1 mb-1 group p-px bg-[#ce2d70]'><Link className='group-hover:bg-[#00000071] transition duration-300 block px-2 py-px' href="/">Vogue</Link></li>
            </ul>
            <p className='text-[17px] max-w-[855px] italic'>Custom category description. You must learn one thing. The world was made to be free in. Give up all the other worlds Except the one in which you belong.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryBanner