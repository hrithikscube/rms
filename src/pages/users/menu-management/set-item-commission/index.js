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
        name: 'Menu Management',
        link: '',
    },
    {
        name: 'Set Item Commission',
        link: '',
    },
]

const SetItemCommission = () => {
    return (
        <Layout>
            <Head>
                <title>Set Item Commission</title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
    )
}

export default SetItemCommission

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
