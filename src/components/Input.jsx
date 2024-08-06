import React from 'react'

const Input = ({ name, value, handleChange, type, id, width, label }) => {
    return (
        <div className={`${width || 'w-full'}`}>
            <input
                placeholder={label}
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className='p-2 outline-none border w-full border-[#808080]/40 rounded-lg text-xs placeholder:text-xs' />
        </div>
    )
}

export default Input