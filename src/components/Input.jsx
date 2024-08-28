// import React, { Fragment } from 'react';
// ;

// const Input = ({ name, value, handleChange, type, id, width, label }) => {
//     return (
//         <div className={`${width || 'w-full'}`}>
//             <input
//                 placeholder={label}
//                 id={id}
//                 type={type}
//                 name={name}
//                 value={value}
//                 onChange={handleChange}
//                 className='p-2 outline-none border w-full border-[#121212]/40 rounded-md text-xs placeholder:text-xs placeholder:text-[#121212]/50' />
//         </div>
//     )
// }

// export default Input

import React from 'react';

const Input = ({ value, name, type, handleChange, width, label, id }) => {
    return (
        <div className={`${width || 'w-full'}`}>
            <input
                id={id}
                placeholder={label}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className='h-[40px] px-3 border bg-transparent border-[#808080]/50 w-full text-sm outline-[#121212] rounded'
            />

        </div>
    )
}

export default Input