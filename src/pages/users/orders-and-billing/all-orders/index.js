
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

let links = [
    {
        name: 'Dashboard',
        link: '/users/dashboard',
    },
    {
        name: 'Orders and Billing',
        link: '',
    },
    {
        name: 'All Orders',
        link: '',
    },
]

let category_types = [
    {
        name: 'All',
        slug: 'all',
    },
    {
        name: 'Zomato',
        slug: 'zomato',
    },
    {
        name: 'Swiggy',
        slug: 'swiggy',
    },
    {
        name: 'Jungle Works Web',
        slug: 'jungle_works_web',
    },
    {
        name: 'Menu QR Code',
        slug: 'menu_qr_code',
    },
    {
        name: 'Magicpin',
        slug: 'magicpin',
    },
    {
        name: 'BlendVerse',
        slug: 'blendverse',
    },
]

let dummy_data = [
    {
        order_no: 1234,
        outlet_name: 'Outlet 1',
        order_type: 'Type A',
        details: 'Hrithik',
        otp: 12345,
        date_time: '25/07/2024',
        total: 123,
        status: 'Pending',
        at: '12:00 PM',
        actions: 'None',
    },
    {
        order_no: 1235,
        outlet_name: 'Outlet 2',
        order_type: 'Type B',
        details: 'Aishwarya',
        otp: 12346,
        date_time: '25/07/2024',
        total: 234,
        status: 'Completed',
        at: '01:00 PM',
        actions: 'Delivered',
    },
    {
        order_no: 1236,
        outlet_name: 'Outlet 3',
        order_type: 'Type A',
        details: 'Shahrukh',
        otp: 12347,
        date_time: '25/07/2024',
        total: 345,
        status: 'Pending',
        at: '02:00 PM',
        actions: 'None',
    },
    {
        order_no: 1237,
        outlet_name: 'Outlet 4',
        order_type: 'Type B',
        details: 'Katrina',
        otp: 12348,
        date_time: '25/07/2024',
        total: 456,
        status: 'Completed',
        at: '03:00 PM',
        actions: 'Delivered',
    },
    {
        order_no: 1238,
        outlet_name: 'Outlet 5',
        order_type: 'Type A',
        details: 'Salman',
        otp: 12349,
        date_time: '25/07/2024',
        total: 567,
        status: 'Pending',
        at: '04:00 PM',
        actions: 'None',
    },
    {
        order_no: 1239,
        outlet_name: 'Outlet 6',
        order_type: 'Type B',
        details: 'Deepika',
        otp: 12350,
        date_time: '25/07/2024',
        total: 678,
        status: 'Completed',
        at: '05:00 PM',
        actions: 'Delivered',
    },
    {
        order_no: 1240,
        outlet_name: 'Outlet 7',
        order_type: 'Type A',
        details: 'Ranbir',
        otp: 12351,
        date_time: '25/07/2024',
        total: 789,
        status: 'Pending',
        at: '06:00 PM',
        actions: 'None',
    },
    {
        order_no: 1241,
        outlet_name: 'Outlet 8',
        order_type: 'Type B',
        details: 'Priyanka',
        otp: 12352,
        date_time: '25/07/2024',
        total: 890,
        status: 'Completed',
        at: '07:00 PM',
        actions: 'Delivered',
    },
    {
        order_no: 1242,
        outlet_name: 'Outlet 9',
        order_type: 'Type A',
        details: 'Akshay',
        otp: 12353,
        date_time: '25/07/2024',
        total: 901,
        status: 'Pending',
        at: '08:00 PM',
        actions: 'None',
    },
    {
        order_no: 1243,
        outlet_name: 'Outlet 10',
        order_type: 'Type B',
        details: 'Alia',
        otp: 12354,
        date_time: '25/07/2024',
        total: 1012,
        status: 'Completed',
        at: '09:00 PM',
        actions: 'Delivered',
    },
]

const AllOrders = () => {
    const [activeMenu, setActiveMenu] = useState('all')

    return (
        <Layout>
            <Head>
                <title>All Orders </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />

                <div className="flex flex-col p-5 w-full flex-shrink-0">
                    {/* <div className="w-full h-20 bg-white shadow">
                        {React.Children.toArray(
                            category_types.map((item) => (
                                <button
                                    onClick={() => {
                                        setActiveMenu(item.slug)
                                    }}
                                    className={`h-full px-10 w-fit relative text-center text-sm font-medium ${activeMenu === item.slug ? 'text-blue-600' : 'text-[#121212]'
                                        }`}
                                >
                                    {item.name}
                                    {activeMenu === item.slug && (
                                        <div className="w-full border-2 border-blue-600 absolute bottom-0 left-0" />
                                    )}
                                </button>
                            )),
                        )}
                    </div> */}


                    <div className="h-16 w-full relative flex items-center justify-start text-start pl-8 bg-blue-50 mt-5">
                            <div className="h-full w-2 bg-blue-600 absolute top-0 left-0" />

                            <h2 className="lg:text-sm text-xs font-semibold text-[#121212]">
                                Last 5 Days Orders
                            </h2>
                        </div>

                    <div className="flex flex-col w-full overflow-x-auto flex-shrink-0">

                        <div className="lg:grid lg:grid-cols-10 flex flex-row w-full flex-shrink-0 ">
                            {React.Children.toArray(
                                [
                                    'Order No.',
                                    'Outlet Name',
                                    'Order Type',
                                    'Customer Details',
                                    'OTP',
                                    'Date Time',
                                    'Total',
                                    'Status',
                                    'AT',
                                    'Actions',
                                ].map((item) => (
                                    <div className="lg:w-full w-40 flex-shrink-0 text-xs text-[#121212] font-medium bg-white/60 py-3 px-4 border-y border-[#808080]/20">
                                        {item}
                                    </div>
                                )),
                            )}
                        </div>

                        {React.Children.toArray(
                            dummy_data.map((item) => (
                                <div className="lg:grid lg:grid-cols-10 flex flex-row w-full flex-shrink-0">
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        {item?.order_no ?? '-'}
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        {item?.outlet_name ?? '-'}
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        {item?.order_type ?? '-'}
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        {item?.details ?? '-'}
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        {item?.otp ?? '-'}
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        {item?.date_time ?? '-'}
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        {item?.total ?? '-'}
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        {item?.status ?? '-'}
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        {item?.at ?? '-'}
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        {item?.actions ?? '-'}
                                    </div>
                                </div>
                            )),
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AllOrders

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
