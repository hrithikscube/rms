import { useRouter } from 'next/router'
import React from 'react'


const Breadcrumb = ({ links }) => {

    const Router = useRouter()

    return (
        <div className='h-12 px-5 flex items-center justify-between bg-white'>

            <div className='flex items-center gap-5 divide-x divide-[#808080]/40'>

                {
                    React.Children.toArray(
                        links.map((item) => (
                            <button onClick={() => Router.push(item?.link)} className='text-xs last:text-red-600 text-[#121212]/70 first:pl-0 pl-4 font-semibold'>{item.name}</button>
                        ))
                    )
                }

            </div>

            <button className='text-xs hover:text-red-600 text-medium'>
                back
            </button>

        </div>
    )
}

export default Breadcrumb