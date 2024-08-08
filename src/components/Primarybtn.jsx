import React, { Fragment } from 'react';


const Primarybtn = ({ onClick, label,width }) => {
    return (
        <div className={`${width || 'w-fit'}`}>
            <button onClick={onClick} className='text-white w-full text-xs border border-blue-600 bg-blue-600 py-2 px-6 rounded-md font-medium'>
                {label}
            </button>
        </div>
    )
}

export default Primarybtn