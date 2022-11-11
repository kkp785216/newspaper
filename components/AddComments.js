import React, { useState } from 'react'

const AddComments = ({ route }) => {

  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    save: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/${'addcomment'}?comment=${formData.comment}&name=${formData.name}&email=${formData.email}&website=${formData.website}&post=${route}`, {
        method: 'POST',
      });
      const resdata = await res.json();
      resdata.success && console.log('comment added');
    } catch (error) { console.log(error.message) }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea className='w-full border py-1.5 px-2 text-[15px] placeholder-[#7e7e7e] focus:border-[#b0b0b0] tracking-[0.3px] outline-none mb-3.5' cols="45" rows="7" minLength='5' required placeholder='Comment:' value={formData.comment} onChange={e => setFormData({ ...formData, comment: e.target.value })}></textarea>
        <input className='w-full border py-1.5 px-2 text-[13px] placeholder-[#7e7e7e] focus:border-[#b0b0b0] tracking-[0.3px] outline-none mb-5' type="text" minLength='3' required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='Name:*' />
        <input className='w-full border py-1.5 px-2 text-[13px] placeholder-[#7e7e7e] focus:border-[#b0b0b0] tracking-[0.3px] outline-none mb-5' type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder='Email:*' />
        <input className='w-full border py-1.5 px-2 text-[13px] placeholder-[#7e7e7e] focus:border-[#b0b0b0] tracking-[0.3px] outline-none mb-5' type="text" value={formData.website} onChange={e => setFormData({ ...formData, website: e.target.value })} placeholder='Website:' />
        <div className='mb-5'>
          <input id='save' className='mr-3' type="checkbox" checked={formData.save} onChange={e => setFormData({ ...formData, save: e.target.checked })} />
          <label htmlFor='save'>Save my name, email, and website in this browser for the next time I comment.</label>
        </div>
        <button className='text-white bg-black px-3.5 py-1.5 text-sm hover:bg-sky-400 transition-colors duration-[400ms]' type="submit">Post Comment</button>
      </form>
    </div>
  )
}

export default AddComments