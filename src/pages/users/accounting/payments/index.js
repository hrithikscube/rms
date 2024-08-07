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
        <Layout>
            <Head>
                <title>Payments</title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
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
