import Head from 'next/head';
import React, { Fragment,useState } from 'react';

import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

let links = [
    {
        name: 'Dashboard',
        link: '/users/dashboard',
    },
    {
        name: 'Orders and Billing',
        link: '',
    },
    {
        name: 'Due Payment Settlement',
        link: '',
    },
]

const DuePaymentSettlement = () => {

    const [params, setParams] = useState({
        settle_from_pos: true
    })

    console.log(params, 'params')

    const handleCheckbox = (e) => {
        let { name, checked } = e.target
        setParams({
            ...params,
            [name]: checked
        })
    }

    return (
        <Fragment>
            <Head>
                <title>Due Payment Settlement </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />

                <div className='flex flex-col lg:p-5 p-4 w-full'>

                    <div className='bg-white w-full rounded-lg shadow overflow-hidden'>

                        <div className='w-full bg-blue-50 px-4 py-6 flex items-center justify-end'>
                            <div className='flex flex-row items-center gap-2'>
                                <input id="settle_from_pos" type="checkbox" name="settle_from_pos" checked={params.settle_from_pos} onChange={handleCheckbox} className='w-4 h-4 cursor-pointer' />
                                <label htmlFor='settle_from_pos' className='text-xs font-semibold text-[#121212] select-none cursor-pointer'>Settle From POS</label>
                            </div>
                        </div>

                        <div className='w-full text-center flex flex-col items-center justify-center px-4 py-6'>
                            <p className='text-sm font-medium text-blue-600'>You can settle the due payments either on the PoS or on the web dashboard simultaneously. To settle the due payments from here, disable it from PoS.</p>
                        </div>

                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default DuePaymentSettlement

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
