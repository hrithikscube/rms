import React, { useState } from 'react';
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
        name: 'Menu and Discounts',
        link: '',
    },
]

let list_of_headers = [
    {
        name: 'Items',
        value: 'Items'
    },
    {
        name: 'Categories',
        value: 'Categories'
    },
    {
        name: 'Variants',
        value: 'Variants'
    },
    {
        name: 'Addons',
        value: 'Addons'
    },
    {
        name: 'Tables/Areas',
        value: 'Tables/Areas'
    },
    {
        name: 'Taxes',
        value: 'Taxes'
    },
    {
        name: 'Discounts',
        value: 'Discounts'
    },

]

const MenuAndDiscounts = () => {

    const [activeMenu, setActiveMenu] = useState('Categories')

    return (
        <Layout>
            <Head>
                <title>Menu and Discounts </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />
                <div className='h-10 flex items-center px-10 justify-evenly w-full bg-blue-50 border-y border-[#808080]/10'>

                    {
                        React.Children.toArray(list_of_headers.map(item => (
                            <button
                                onClick={() => {
                                    setActiveMenu(item.value)
                                }}
                                className={`text-xs font-semibold text-[#121212] h-full px-12 border-2 rounded-lg ${activeMenu === item.value ? 'bg-white border-blue-600' : 'border-transparent'}`}>{item.name}</button>
                        )))
                    }

                </div>
            </div>
        </Layout>
    )
}

export default MenuAndDiscounts

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
