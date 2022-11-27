import React, { useEffect, useState } from 'react'
import { Links } from './Links'
import fetchapi from '../lib/api';

const DisplayComments = ({ comments, route }) => {

  const [allComments, setAllComments] = useState(comments.comments);
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(comments.total_comments / 3);
  const [loading, setLoading] = useState(false);

  const formatDate = (input) => {
    const date = new Date(input);
    return `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]} ${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()}, ${date.getFullYear()} At ${date.getHours()}:${date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()} ${date.getHours() < 12 ? 'am' : 'pm'}`
  }

  useEffect(() => {
    (async () => {
      if (page !== 1) {
        if (comments.total_comments) {
          setLoading(true);
          let comments = await fetchapi(`/getcomments?uses=comment&post=${route}&limit=3&page=${page}`);
          if(comments) setLoading(false);
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
      {page < totalPage && !loading && <span className='cursor-pointer text-sm text-sky-400 block text-center' onClick={e => setPage(page + 1)}>Load More</span>}
      {loading && <div className="text-center">
        <div role="status">
          <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>}
    </div>
  )
}

export default DisplayComments