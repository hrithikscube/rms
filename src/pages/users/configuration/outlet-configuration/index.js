import Head from 'next/head';
import React, { Fragment } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

let links = [
    {
        name: 'Dashboard',
        link: '/users/dashboard',
    },
    {
        name: 'Configuration',
        link: '',
    },
    {
        name: 'Outlet Configuration',
        link: '',
    },
]

const OutletConfiguration = () => {
    return (
        <Fragment>
            <Head>
                <title>Outlet Configuration </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Fragment>
    )
}

export default OutletConfiguration

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
