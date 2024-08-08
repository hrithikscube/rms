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
        name: 'Marketing',
        link: '',
    },
]

const Marketing = () => {
    return (
        <Fragment>
            <Head>
                <title>Marketing </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Fragment>
    )
}

export default Marketing

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
