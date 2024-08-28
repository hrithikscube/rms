import React from 'react';

const PrimaryButton = ({ label, onClick, width, variant }) => {

    if (variant === 'outlined') {
        return (
            <div className={`${width || 'w-fit'}`}>

                <button onClick={onClick} className='hover:shadow-lg hover:opacity-90 text-sm h-[40px] w-full px-6 border border-blue-600 text-blue-600 font-medium rounded'>
                    {label}
                </button>

            </div>
        )
    }

    if (variant === 'outlined-black') {
        return (
            <div className={`${width || 'w-fit'}`}>

                <button onClick={onClick} className=' hover:shadow-lg hover:opacity-90 text-sm h-[40px] w-full px-6 border border-[#121212] text-[#121212] font-medium rounded'>
                    {label}
                </button>

            </div>
        )
    }


    return (
        <div className={`${width || 'w-fit'}`}>

            <button onClick={onClick} className=' hover:shadow-lg hover:opacity-90 text-sm h-[40px] w-full px-6 bg-blue-600 text-white font-medium rounded'>
                {label}
            </button>

        </div>
    )
}

export default PrimaryButton