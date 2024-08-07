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
        name: 'Service Payment History',
        link: '',
    },
]

const ServicePaymentHistory = () => {
    return (
        <Layout>
            <Head>
                <title>Service Payment History </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
    )
}

export default ServicePaymentHistory

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
