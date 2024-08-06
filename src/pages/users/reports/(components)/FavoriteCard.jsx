import Image from 'next/image'
import React from 'react'

const FavoriteCard = ({ data, onClick }) => {

    return (
        <div className='w-full min-h-40 border border-[#808080]/20 rounded-lg flex flex-col justify-between p-4 relative'>

            <div className='flex flex-col gap-1'>
                <h2 className='text-sm text-[#121212] font-medium'>{data?.name}</h2>
                <p className='text-xs text-[#121212]/90'>{data?.info}</p>
            </div>

            <div className='flex flex-col items-end justify-end text-end'>
                <button className='text-xs underline'>View Details</button>
            </div>

            <div className='absolute top-4 right-4'>
                <button onClick={onClick}>
                    <Image width={20} height={20} src={data?.isFav ? "/icons/active-star.svg" : "/icons/star.svg"} alt="star" className='w-5 h-5' />
                </button>
            </div>

        </div>
    )
}

export default FavoriteCard