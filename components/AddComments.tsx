import React, { useEffect, useState } from 'react'

const AddComments = ({ route }) => {

  // Initialized the comment variables
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    save: true,
  });

  useEffect(() => {
    // Check if user checked save there comment info in this browser
    if (typeof window !== 'undefined' && window.localStorage.getItem('newspaper')) {
      let newspaper = JSON.parse(window.localStorage.getItem('newspaper'));
      newspaper.comment_user && setFormData({
        ...formData,
        name: newspaper.comment_user.name,
        email: newspaper.comment_user.email,
        website: newspaper.comment_user.website,
        save: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handling the user comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/${'addcomment'}?comment=${formData.comment}&name=${formData.name}&email=${formData.email}&website=${formData.website}&post=${route}`, {
        method: 'POST',
      });
      const resdata = await res.json();
      if (resdata.success && typeof window !== 'undefined') {
        window.alert('comment saved successfully!');
        // When comment saved successfully make comment box empty
        formData.save && setFormData({
          ...formData,
          comment: '',
        });
        !formData.save && setFormData({
          ...formData,
          comment: '',
          name: '',
          email: '',
          website: '',
          save: false,
        });
        // If user checked the save box, -> save the data into browser localStorage
        formData.save && window.localStorage.setItem('newspaper', JSON.stringify({
          comment_user: {
            name: formData.name,
            email: formData.email,
            website: formData.website
          }
        }));
      };
    } catch (error) { typeof window !== 'undefined' && window.alert('some error when saving your comment') }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea className='w-full border py-1.5 px-2 text-[15px] placeholder-[#7e7e7e] focus:border-[#b0b0b0] tracking-[0.3px] outline-none mb-3.5' cols={45} rows={7} minLength={5} required placeholder='Comment:' value={formData.comment} onChange={e => setFormData({ ...formData, comment: e.target.value })}></textarea>
        <input className='w-full border py-1.5 px-2 text-[13px] placeholder-[#7e7e7e] focus:border-[#b0b0b0] tracking-[0.3px] outline-none mb-5' type="text" minLength={3} required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='Name:*' />
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