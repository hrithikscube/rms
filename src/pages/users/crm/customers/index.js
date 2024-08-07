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
        name: 'CRM',
        link: '',
    },
    {
        name: 'Customers',
        link: '',
    },
]

const Customers = () => {
    return (
        <Layout>
            <Head>
                <title>Customers | RMS </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
    )
}

export default Customers

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
