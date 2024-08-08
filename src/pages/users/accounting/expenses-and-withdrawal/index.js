import Head from 'next/head';
import React, { Fragment } from 'react';
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
        name: 'Expenses And Withdrawal',
        link: '',
    },
]

const ExpensesAndWithdrawal = () => {
    return (
        <Fragment>
            <Head>
                <title>Expenses And Withdrawal </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
            </div>
        </Fragment>
    )
}

export default ExpensesAndWithdrawal

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
