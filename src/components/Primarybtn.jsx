import React from 'react'

const Primarybtn = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className='text-white text-xs border border-red-700 bg-red-700 py-2 px-6 rounded-md font-medium'>
            {label}
        </button>
    )
}

export default Primarybtn