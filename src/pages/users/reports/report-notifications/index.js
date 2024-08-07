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
        name: 'Report Notifications',
        link: '#',
    },
]

const ReportNotifications = () => {
    return (
        <Layout>
            <Head>
                <title>Report Notifications</title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
    )
}

export default ReportNotifications

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
