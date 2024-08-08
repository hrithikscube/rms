import Head from 'next/head';
import React, { Fragment } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

let links = [
    {
        name: 'Dashboard',
        link: '/users/dashboard',
    },
    {
        name: 'CRM',
        link: '',
    },
    {
        name: 'Campaign',
        link: '',
    },
]

const Campaign = () => {
    return (
        <Fragment>
            <Head>
                <title>Campaign </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Fragment>
    )
}

export default Campaign

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
