import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';

interface Props {
  category: String | String[];
  breadcrumbCategory?: { url: String, name: String, type: String, parent: String | null }[];
  baseurl?: String;
}

const CategoryBanner = ({ category, breadcrumbCategory, baseurl }: Props) => {

  const color = ['#f96945', '#f24d4d', '#e8436c', '#ce2d70'];

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
              <li className='p-0.5'><Link className='hover:text-sky-400 capitalize' href='/'>Home</Link><NavigateNextIcon style={{ fontSize: '12px' }} /></li>
              {baseurl.match(/\/category\/[a-z0-9-]+\/[a-z0-9-]+(\/page\/[0-9]{1,5})?$/gi) && <li className='p-0.5'><Link className='hover:text-sky-400 capitalize' href={`${baseurl.split('/')[2]}`}>{baseurl.split('/')[2].toString().replaceAll('-', ' ')}</Link><NavigateNextIcon style={{ fontSize: '12px' }} /></li>}
              <li className='p-0.5'><Link className='hover:text-sky-400 capitalize' href={`${baseurl}`}>{category.toString().replaceAll('-', ' ')}</Link></li>
            </ul>
          </div>
          <div className='mt-[100px]'>
            <h1 className='text-4xl uppercase font-bold mb-5'>{category.toString().replaceAll('-', ' ')}</h1>
            {breadcrumbCategory && <ul className='flex text-xs mb-4'>
              {breadcrumbCategory.map((e, i) => (
                <li key={i} className='mr-1 mb-1 group p-px' style={{ backgroundColor: color[i >= color.length ? i % color.length : i] }}><Link className='group-hover:bg-[#00000071] transition duration-300 block px-2 py-px' href={e.type === 'parent' ? `/category/${e.url}` : `/category/${e.parent}/${e.url}`}>{e.name}</Link></li>
              ))}
            </ul>}
            <p className='text-[17px] max-w-[855px] italic'>Custom category description. You must learn one thing. The world was made to be free in. Give up all the other worlds Except the one in which you belong.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryBanner