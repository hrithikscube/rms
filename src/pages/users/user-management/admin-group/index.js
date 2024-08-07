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
        name: 'Configuration',
        link: '',
    },
    {
        name: 'Admin Group Management',
        link: '',
    },
]

const AdminGroupManagement = () => {
    return (
        <Layout>
            <Head>
                <title>Admin Group Management </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
    )
}

export default AdminGroupManagement

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
