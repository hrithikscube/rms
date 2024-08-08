
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Input from '@/components/Input';
import Primarybtn from '@/components/Primarybtn';
import Secondarybtn from '@/components/Secondarybtn';
import Ternarybtn from '@/components/Ternarybtn';

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
    const [showFilters, setShowFilter] = useState(false)

    const [params, setParams] = useState({
        start_date: '',
        end_date: '',
        order_id: '',
        customer_name: '',
        customer_phone: '',
        order_type: '',
        sub_order_type: '',
        payment_type: '',
        order_status: '',
        other_status: '',
        grand_total: '',
        gstin: '',
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setParams({
            ...params,
            [name]: value
        })
    }

    const toggleFilters = () => {
        setShowFilter(!showFilters)
    }

    const filterInputs = [
        {
            name: 'start_date',
            type: 'text',
            value: params.start_date,
            handleChange: handleChange,
            label: 'Start Date'
        },
        {
            name: 'end_date',
            type: 'text',
            value: params.end_date,
            handleChange: handleChange,
            label: 'End Date'
        },
        {
            name: 'customer_name',
            type: 'text',
            value: params.customer_name,
            handleChange: handleChange,
            label: 'Customer Name'
        },
        {
            name: 'customer_phone',
            type: 'text',
            value: params.customer_phone,
            handleChange: handleChange,
            label: 'Customer Phone'
        },
        {
            name: 'order_type',
            type: 'text',
            value: params.order_type,
            handleChange: handleChange,
            label: 'Order Type'
        },
        {
            name: 'sub_order_type',
            type: 'text',
            value: params.sub_order_type,
            handleChange: handleChange,
            label: 'Sub Order Type'
        },
        {
            name: 'payment_type',
            type: 'text',
            value: params.payment_type,
            handleChange: handleChange,
            label: 'Payment Type'
        },
        {
            name: 'order_status',
            type: 'text',
            value: params.order_status,
            handleChange: handleChange,
            label: 'Order Status'
        },
        {
            name: 'other_status',
            type: 'text',
            value: params.other_status,
            handleChange: handleChange,
            label: 'Other Status'
        },
        {
            name: 'grand_total',
            type: 'text',
            value: params.grand_total,
            handleChange: handleChange,
            label: 'Grand Total'
        },
        {
            name: 'gstin',
            type: 'text',
            value: params.gstin,
            handleChange: handleChange,
            label: 'GSTIN'
        },
    ]

    return (
        <Layout>
            <Head>
                <title>All Orders </title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />

                <div className="flex flex-col p-5 w-full flex-shrink-0">

                    <div className="h-16 w-full relative flex items-center justify-start text-start pl-8 bg-blue-50 mt-5">
                        <div className="h-full w-2 bg-blue-600 absolute top-0 left-0" />

                        <h2 className="lg:text-sm text-xs font-semibold text-[#121212]">
                            Last 5 Days Orders
                        </h2>
                    </div>

                    <button onClick={toggleFilters} className='bg-white w-full flex flex-col lg:px-5 px-4'>

                        <div className='w-full flex items-center justify-between h-16'>
                            <div className='flex items-center gap-2'>
                                <Image src="/icons/search.svg" alt="search" width={16} height={16} />
                                <p className='text-xs font-semibold text-[#121212]'>Search</p>
                            </div>

                            <Image src="/icons/accArrow.svg" alt="search" width={10} height={10} />

                        </div>

                    </button>

                    {
                        showFilters ?
                            <div className='flex flex-col min-h-40 w-full items-center lg:p-5 p-4 bg-white border-t border-[#808080]/20'>
                                <div className='w-full grid lg:grid-cols-5 gap-4'>
                                    {
                                        React.Children.toArray(filterInputs.map((item) =>
                                            <Input
                                                type={item.type}
                                                name={item.name}
                                                value={item.value}
                                                handleChange={item.handleChange}
                                                label={item.label}
                                            />
                                        ))
                                    }
                                    <div className='lg:col-span-2 flex flex-row items-start lg:items-center gap-4'>
                                        <Ternarybtn label="Search" />
                                        <Secondarybtn label="Show All" />
                                    </div>

                                </div>

                                <div className='w-full mt-4 bg-[#f2f2f2] rounded-lg flex items-center justify-end p-3'>
                                    <Secondarybtn label="Clear All" />
                                </div>

                            </div> : ''
                    }

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
