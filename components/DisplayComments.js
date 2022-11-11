import React, { useState } from 'react'
import { Links } from './Links'

const DisplayComments = ({ comments }) => {

  const [allComments, setAllComments] = useState(comments.comments);

  const formatDate = (input) => {
    const date = new Date(input);
    return `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]} ${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()}, ${date.getFullYear()} At ${date.getHours()}:${date.getMinutes <= 9 ? '0' + date.getMinutes() : date.getMinutes()} ${date.getHours() < 12 ? 'am' : 'pm'}`
  }

  return (
    <div>
      {allComments.map((comment, index) => (
        <div className="flex mb-5 border-b pb-[13px] border-dashed border-[#ededed]" key={index}>
          <img className='w-[50px] h-[50px] mr-5 mb-5' src="/img/commantuser.jpg" alt="krishan" />
          <div>
            <div className="flex space-x-4 items-center">
              <Links className='font-semibold hover:text-sky-400 block' to='/'>{comment.name}</Links>
              <span className='text-[11px] font-medium text-[#747474]'>{formatDate(comment.createdAt)}</span>
            </div>
            <p>{comment.comment}</p>
            <span className='hover:text-sky-400 cursor-pointer text-[#747474] text-xs tracking-[0.3px]'>Reply</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayComments