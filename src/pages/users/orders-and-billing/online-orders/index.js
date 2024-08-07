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
        name: 'Online Orders',
        link: '',
    },
]

const OnlineOrders = () => {
    return (
        <Layout>
            <Head>
                <title>Online Orders </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
    )
}

export default OnlineOrders

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
