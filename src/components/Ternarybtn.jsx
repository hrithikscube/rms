import React from 'react'

const Ternarybtn = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="p-2 text-xs px-7 rounded-md border border-red-700 text-red-700 font-medium bg-white">{label}</button>

    )
}

export default Ternarybtn