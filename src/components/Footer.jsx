import React from 'react';

const Footer = () => {
    return (
        <div className='h-14 flex w-full items-center px-5 justify-between bg-white flex-shrink-0'>

            <p className='text-xs font-medium text-[#121212]'>rms.scube.me &copy; 2024. All Rights Reserved </p>

            <div className='flex items-center gap-5'>
                <button><p className='text-xs font-medium text-[#121212]'>Terms & Conditions</p></button>
                <button><p className='text-xs font-medium text-[#121212]'>Privacy Policy</p></button>
                <button><p className='text-xs font-medium text-[#121212]'>+91900000000</p></button>
            </div>

        </div>
    )
}

export default Footer