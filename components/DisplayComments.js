import React, { useEffect, useState } from 'react'
import { Links } from './Links'
import fetchapi from '../lib/api';

const DisplayComments = ({ comments, route }) => {

  const [allComments, setAllComments] = useState(comments.comments);
  const [page, setPage] = useState(1);
  const totalPage = comments.total_comments <= 3 ? 1 : Math.ceil((comments.total_comments - 3) / 5) + 1;
  console.log(totalPage)

  const formatDate = (input) => {
    const date = new Date(input);
    return `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]} ${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()}, ${date.getFullYear()} At ${date.getHours()}:${date.getMinutes <= 9 ? '0' + date.getMinutes() : date.getMinutes()} ${date.getHours() < 12 ? 'am' : 'pm'}`
  }

  useEffect(() => {
    (async () => {
      if (page !== 1) {
        if (comments.total_comments) {
          let comments = await fetchapi(`/getcomments?post=${route}&limit=5&page=${page}`);
          console.log(comments)
          setAllComments([
            ...allComments,
            ...comments.comments
          ])
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
      {page < totalPage && <span className='cursor-pointer text-sm text-sky-400 block text-center' onClick={e=>setPage(page + 1)}>Load More</span>}
    </div>
  )
}

export default DisplayComments