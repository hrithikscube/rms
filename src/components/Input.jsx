import React, { Fragment } from 'react';
;

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
                className='p-2 outline-none border w-full border-[#121212]/40 rounded-md text-xs placeholder:text-xs placeholder:text-[#121212]/50' />
        </div>
    )
}

export default Input