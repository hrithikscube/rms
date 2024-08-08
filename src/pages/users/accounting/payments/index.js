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
        name: 'Payments',
        link: '',
    },
]

const Payments = () => {
    return (
        <Fragment>
            <Head>
                <title>Payments </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Fragment>
    )
}

export default Payments

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
