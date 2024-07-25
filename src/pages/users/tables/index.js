import Breadcrumb from '@/components/Breadcrumb'
import Layout from '@/components/Layout'
import React, { useState } from 'react'

let links = [
    {
        name: 'Home',
        link: '/users/dashboard'
    },
    {
        name: 'Tables',
        link: '/users/tables'
    },
    {
        name: 'Running Orders',
        link: '#'
    },
]

let category_types = [
    {
        name: 'Running Orders',
        slug: 'running_orders'
    },
    {
        name: 'Running Tables',
        slug: 'running_tables'
    }
]

let page_stats = [
    {
        name: 'Orders',
        value: 5
    },
    {
        name: '$',
        value: 680
    }
]

let order_types = [
    {
        name: 'Dine In',
        orders: {
            name: 'Orders/KOTS',
            value: 5
        },
        est_obj: {
            name: 'Estimate Total Amount',
            value: 790
        }
    },
    {
        name: 'Pick Up',
        orders: {
            name: 'Orders',
            value: 5
        },
        est_obj: {
            name: 'Estimate Total Amount',
            value: 790
        }
    },
    {
        name: 'Delivery',
        orders: {
            name: 'Orders',
            value: 5
        },
        est_obj: {
            name: 'Estimate Total Amount',
            value: 790
        }
    },

    {
        name: 'Order yet to be marked ready',
        orders: {
            name: 'Orders',
            value: 5
        },
        est_obj: {
            name: 'Estimate Total Amount',
            value: 790
        }
    },

    {
        name: 'Order yet to be picked up',
        orders: {
            name: 'Orders',
            value: 5
        },
        est_obj: {
            name: 'Estimate Total Amount',
            value: 790
        }
    },

    {
        name: 'Order yet to be delivered',
        orders: {
            name: 'Orders',
            value: 5
        },
        est_obj: {
            name: 'Estimate Total Amount',
            value: 790
        }
    },

]


const Tables = () => {

    const [activeMenu, setActiveMenu] = useState('running_orders')

    return (
        <Layout>
            <div className='w-full h-full flex flex-col flex-shrink-0'>

                <Breadcrumb links={links} />

                <div className='flex flex-col p-5 w-full'>

                    <div className='flex flex-col bg-white w-full rounded-lg'>

                        <div className='h-12 flex items-center'>
                            {React.Children.toArray(category_types.map(item => (
                                <button onClick={() => {
                                    setActiveMenu(item.slug)
                                }} className={`h-full flex-shrink-0 px-10 relative w-fit text-sm font-medium ${activeMenu === item?.slug ? 'text-red-600' : 'text-[#121212]'}`}>
                                    {item?.name}

                                    {
                                        activeMenu === item.slug && <div className='border border-red-600 absolute bottom-0 left-0 w-full' />
                                    }
                                </button>
                            )))}

                        </div>

                        <div className='h-20 w-full bg-blue-50 flex items-center justify-center'>
                            <div className='flex flex-row items-center justify-center flex-wrap divide-x divide-[#808080]'>
                                {
                                    React.Children.toArray(page_stats.map(item => (
                                        <div className='flex flex-col px-10 text-center'>
                                            <p className='text-xs font-medium'>{item.name}</p>
                                            <p className='text-sm font-semibold text-[#121212]'>{item.value}</p>
                                        </div>
                                    )))
                                }
                            </div>
                        </div>

                        {
                            activeMenu === "running_orders" && <div className='grid grid-cols-4 py-10 px-20 gap-5'>
                                {
                                    React.Children.toArray(order_types.map(item => (
                                        <div className='flex flex-col h-56 shadow-lg border border-[#808080]/20 rounded-lg p-4 justify-around text-center'>
                                            <p className='text-xs font-semibold text-[#808080]'>{item.name}</p>
                                            <div className='flex flex-col'>
                                                <p className='text-xs font-semibold text-[#808080]'>{item.orders.name}</p>
                                                <p className='text-sm font-semibold text-[#121212]'>{item.orders.value}</p>
                                            </div>

                                            <div className='flex flex-col'>
                                                <p className='text-xs font-semibold text-[#808080]'>{item.est_obj.name}</p>
                                                <p className='text-sm font-semibold text-[#121212]'>{item.est_obj.value}</p>
                                            </div>

                                        </div>
                                    )))
                                }

                            </div>
                        }

                        {
                            activeMenu === 'running_tables' &&

                            <div className='border border-[#808080]/40 w-full'>

                                <div className='h-16 w-full flex items-center justify-between pl-5'>

                                    <h2 className='text-sm font-semibold text-[#121212] uppercase'>Chai Fast</h2>

                                    <div className='flex items-center divide-x divide-[#808080]/50 h-full'>

                                        <div className='flex flex-col text-start px-4 h-full items-start justify-center flex-shrink-0 bg-gray-100'>
                                            <p className='text-xs text-[#808080] font-medium'>Estimated Total</p>
                                            <p className='text-lg font-bold text-[#121212]'>$105.00</p>
                                        </div>

                                        <div className='flex flex-col text-start px-4 h-full items-start justify-center flex-shrink-0 bg-gray-100'>
                                            <p className='text-xs text-[#808080] font-medium'>Total Running Tables</p>
                                            <p className='text-lg font-bold text-[#121212]'>1</p>
                                        </div>

                                    </div>
                                </div>

                                <div className='p-4 flex flex-wrap gap-5 w-full overflow-x-auto flex-shrink-0'>
                                    <div className='h-80 w-80 rounded-lg border border-[#808080]/40 flex flex-col justify-between overflow-hidden'>

                                        <div className='py-4 px-6 w-full flex items-center justify-between bg-[#f2f2f2] border-b border-[#808080]/40'>
                                            <p className='text-sm font-medium text-[#121212]/90'>Table</p>

                                            <p className='text-sm font-medium text-[#121212]/90'>23 Mins</p>
                                        </div>


                                        <div className='py-4 px-6 w-full flex items-center justify-between bg-green-100'>
                                            <p className='text-sm font-medium text-[#121212]/90'>$ <span className='text-lg font-bold text-green-600'>105.00</span></p>

                                            <button>
                                                <p className='text-sm font-semibold text-[#121212]/90 underline'>View Details</p>
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        }

                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Tables