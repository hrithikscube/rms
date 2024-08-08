import Head from 'next/head';
import React, { Fragment } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

let links = [
    {
        name: 'Dashboard',
        link: '/users/dashboard',
    },
    {
        name: 'Reports',
        link: '',
    },
    {
        name: 'Other Reports',
        link: '',
    },
]

const OtherReports = () => {
    return (
        <Fragment>
            <Head>
                <title>Other Reports </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Fragment>
    )
}

export default OtherReports

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
