import React from 'react'

const Textarea = ({ name, rows, value, handleChange, type, id, width, label }) => {
    return (
        <div className={`${width || 'w-full'}`}>
            <textarea
                rows={rows || 4}
                placeholder={label}
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className='p-2 outline-none resize-none border w-full border-[#808080]/40 rounded-md text-xs placeholder:text-xs' />
        </div>
    )
}

export default Textarea