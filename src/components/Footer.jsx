import React from 'react';

const Footer = () => {
    return (
        <div className='min-h-14 lg:py-0 py-4 flex lg:flex-row flex-col lg:gap-0 gap-4 w-full items-center px-5 justify-between bg-white flex-shrink-0'>

            <p className='text-xs font-medium text-[#121212]'>rms.scube.me &copy; 2024. All Rights Reserved </p>

            <div className='flex items-center gap-5'>
                <button><p className='text-xs font-medium text-[#121212]'>Terms & Conditions</p></button>
                <button><p className='text-xs font-medium text-[#121212]'>Privacy Policy</p></button>
                <button><p className='text-xs font-medium text-[#121212]'>+919731816547</p></button>
            </div>

        </div>
    )
}

export default Footer