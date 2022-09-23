import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {

    const {config} = useSelector(state => state);

    return (
        <footer className='mt-7 md:mt-11'>
            <div className='h-[717px] w-full text-white' style={{background: `linear-gradient(rgb(0 0 0 / 80%), rgb(0 0 0 / 80%)), url("${config.footer_background}") no-repeat top / cover`}}>
                <div className='flex'>
                    <div className="w-1/3">
                        Hello
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer