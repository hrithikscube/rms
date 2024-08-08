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
        name: 'Sub Order Type',
        link: '',
    },
]

const SubOrderType = () => {
    return (
        <Fragment>
            <Head>
                <title>Sub Order Type </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Fragment>
    )
}

export default SubOrderType

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
