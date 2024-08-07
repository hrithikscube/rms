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
        name: 'User Logs',
        link: '',
    },
    {
        name: 'Menu Trigger Logs',
        link: '',
    },
]

const MenuTriggerLogs = () => {
    return (
        <Layout>
            <Head>
                <title>Menu Trigger Logs </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Layout>
    )
}

export default MenuTriggerLogs

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
