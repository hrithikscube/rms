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
        name: 'Denomination',
        link: '',
    },
]

const Denomination = () => {
    return (
        <Layout>
            <Head>
                <title>Denomination | RMS </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
    )
}

export default Denomination

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
