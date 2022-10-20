import React from 'react'
import { Aside, Section, Main } from './Layout'
import { Links } from './Links'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Template1 = () => {
    return (
        <div>
            <Section>
                <Main>
                    <div>
                        <ul className='flex -m-1 text-xs'>
                            <li className='p-1 text-[#747474]'><Links className='hover:text-black' to='/'>Home</Links><NavigateNextIcon className='text-xs'/></li>
                            <li className='p-1 text-[#747474]'><Links className='hover:text-black' to='/'>Lifestyle</Links><NavigateNextIcon className='text-xs'/></li>
                            <li className='p-1 text-[#747474]'><Links className='hover:text-black' to='/'>Travel</Links><NavigateNextIcon className='text-xs'/></li>
                            <li className='p-1 text-[#747474]'>Best Things You Can Do on a Solo Mountain Climb</li>
                        </ul>
                    </div>
                </Main>
                <Aside>

                </Aside>
            </Section>
        </div>
    )
}

export default Template1