import React, { Fragment } from 'react';


const Ternarybtn = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="p-2 text-xs px-7 rounded-md border border-blue-600 text-blue-600 font-medium bg-white">{label}</button>

    )
}

export default Ternarybtn