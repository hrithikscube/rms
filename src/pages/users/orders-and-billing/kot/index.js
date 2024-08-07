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
        name: 'Orders and Billing',
        link: '',
    },
    {
        name: 'KOT',
        link: '',
    },
]

const KOT = () => {
    return (
        <Layout>
            <Head>
                <title>KOT</title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
    )
}

export default KOT

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
