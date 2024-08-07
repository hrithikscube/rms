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
        name: 'DayEndSummary',
        link: '#',
    },
]

const DayEndSummary = () => {
    return (
        <Layout>
            <Head>
                <title>DayEndSummary</title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
    )
}

export default DayEndSummary

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
