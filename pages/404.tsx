import React from 'react'
import { Section } from 'components/Layout'
import Link from 'next/link'

const PageNotFound = () => {
  return (
    <Section>
      <div className='w-full'>
        <h3 className='text-4xl font-medium text-center'>Ooops... Error 404</h3>
        <p className='text-xl text-[#757575] mt-5 text-center'>Sorry, but the page you are looking for doesn&apos;t exist.</p>
        <Link className='text-[13.5px] block mx-auto mt-7 w-fit uppercase bg-black text-white px-6 py-2 hover:bg-sky-400 transition-colors duration-300' href='/'>Go to Homepage</Link>
      </div>
      <div>

      </div>
    </Section>
  )
}

export default PageNotFound