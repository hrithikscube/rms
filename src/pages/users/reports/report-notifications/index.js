import Head from 'next/head';
import React, { Fragment } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

let links = [
    {
        name: 'Dashboard',
        link: '/users/dashboard',
    },
    {
        name: 'Reports',
        link: '',
    },
    {
        name: 'Report Notifications',
        link: '',
    },
]

const ReportNotifications = () => {
    return (
        <Fragment>
            <Head>
                <title>Report Notifications </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Fragment>
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
