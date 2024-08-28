import React, { Fragment } from 'react';
;
import { useRouter } from 'next/router';

const Breadcrumb = ({ links }) => {

    const Router = useRouter()

    return (
        <div className='h-12 px-5 flex items-center justify-between bg-white'>

            <div className='flex items-center'>

                {
                    React.Children.toArray(
                        links.map((item, index) => (
                            <button onClick={() => Router.push(item?.link)} className='text-sm last:text-blue-600 font-medium text-[#121212]/70 first:pl-0'>{item.name}
                                {index !== links.length - 1 && <span className="px-2 text-sm ">/</span>}
                            </button>
                        ))
                    )
                }

            </div>

            <button
                onClick={() => {
                    Router.back()
                }} className='text-sm text-[#121212] hover:text-blue-600 text-medium'>
                Back
            </button>

        </div>
    )
}

export default Breadcrumb