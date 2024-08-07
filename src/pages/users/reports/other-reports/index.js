import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

let links = [
    {
        name: 'Dashboard',
        link: '/users/dashboard',
    },
    {
        name: 'Reports',
        link: '#',
    },
    {
        name: 'Other Reports',
        link: '#',
    },
]

const OtherReports = () => {
    return (
        <Layout>
            <Head>
                <title>Other Reports</title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
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