import React from 'react'

const Secondarybtn = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="p-2 text-xs px-7 rounded-md border border-[#808080] text-[#121212] font-medium bg-white hover:bg-red-50">{label}</button>

    )
}

export default Secondarybtn