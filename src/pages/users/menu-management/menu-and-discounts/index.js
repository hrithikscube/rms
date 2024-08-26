import React, { Fragment, useState } from 'react';

import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import Ternarybtn from '@/components/Ternarybtn';
import Secondarybtn from '@/components/Secondarybtn';

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

const list_of_types = [
    {
        name: 'Base Menu',
        value: 'base_menu',
    },
    {
        name: 'Home Delivery',
        value: 'home_delivery',
    },
    {
        name: 'Parcel',
        value: 'parcel',
    },
    {
        name: 'Dine In',
        value: 'dene_in',
    },
    {
        name: 'Swiggy',
        value: 'swiggy',
    },
    {
        name: 'Jungle Works',
        value: 'jungle_works',
    },
    {
        name: 'BlendVerse',
        value: 'blendverse',
    },
    {
        name: 'Magicpin',
        value: 'magicpin',
    },

]

const MenuAndDiscounts = () => {

    const [activeMenu, setActiveMenu] = useState('Categories')

    return (
        <Fragment>
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

                <div className='w-full p-5 flex flex-col lg;gap-5 gap-4'>

                    <div className='bg-white lg:p-5 p-4 flex flex-col w-full rounded-lg'>
                        <div className='grid grid-cols-4 lg:gap-6 gap-4'>
                            {
                                React.Children.toArray(
                                    list_of_types.map((item) => (
                                        <div className='w-full h-24 border rounded-lg shadow flex items-center justify-center text-sm font-medium text-[#404040]'>
                                            {item.name}
                                        </div>
                                    ))
                                )
                            }
                        </div>

                    </div>

                </div>
            </div>
        </Fragment>
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
