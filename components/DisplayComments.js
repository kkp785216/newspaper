import Image from 'next/image';
import React from 'react'
import { Links } from './Links'

const DisplayComments = () => {

  const formatDate = (input) => {
    const date = new Date(input);
    return `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]} ${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()}, ${date.getFullYear()} At ${date.getHours()}:${date.getMinutes <= 9 ? '0' + date.getMinutes() : date.getMinutes()} ${date.getHours() < 12 ? 'am' : 'pm'}`
  }

  return (
    <div>
      {[1, 2].map((comment, index) => (
          <div className="flex mb-5" key={index}>
            <Image className='w-[50px] h-[50px] mr-5 mb-5' width={120} height={120} src="/img/commantuser.jpg" alt="krishan" />
            <div>
              <div className="flex space-x-4 items-center">
                <Links className='font-semibold hover:text-sky-400 block' to='/'>Krishna</Links>
                <span className='text-[11px] font-medium text-[#747474]'>{formatDate(new Date())}</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, error. Sunt consectetur quaerat molestias autem.</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default DisplayComments