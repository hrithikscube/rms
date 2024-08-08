import Head from 'next/head';
import React, { Fragment } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

let links = [
    {
        name: 'Dashboard',
        link: '/users/dashboard',
    },
    {
        name: 'Accounting',
        link: '',
    },
    {
        name: 'Utility Bill',
        link: '',
    },
]

const UtilityBill = () => {
    return (
        <Fragment>
            <Head>
                <title>Utility Bill </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Fragment>
    )
}

export default UtilityBill

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
