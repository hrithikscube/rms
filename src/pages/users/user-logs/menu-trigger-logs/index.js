import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Input from '@/components/Input';
import Secondarybtn from '@/components/Secondarybtn';
import Ternarybtn from '@/components/Ternarybtn';


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

const dummy_data = [...Array(5)]


const Notifications = () => {
    const [showFilters, setShowFilter] = useState(true)

    const [params, setParams] = useState({
        search_key: '',
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
            name: 'search_key',
            type: 'text',
            value: params.search_key,
            handleChange: handleChange,
            label: 'Search'
        },
    ]

    return (
        <Fragment>
            <Head>
                <title>Menu Trigger Logs</title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />

                <div className="flex flex-col p-5 w-full flex-shrink-0">
                    <div className='p-4 bg-white w-full flex items-center justify-end border-b border-[#808080]/20'>

                        <div className='flex lg:items-center items-end lg:flex-row flex-col gap-4'>

                            {/* <Primarybtn label="Create Zone" /> */}
                            <Secondarybtn label="Export" />


                        </div>

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
                                <div className='w-full grid lg:grid-cols-6 gap-4'>
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

                        <div className="lg:grid lg:grid-cols-5 flex flex-row w-full flex-shrink-0 ">
                            {React.Children.toArray(
                                [
                                    'Zone Name',
                                    'Restaurant',
                                    'Status',
                                    'Created Date',
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
                                <div className="lg:grid lg:grid-cols-5 flex flex-row w-full flex-shrink-0">
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        -
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        -
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        -
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        -
                                    </div>
                                    <div className="text-xs text-[#121212] font-medium lg:w-full w-40 bg-white py-3 px-4 border-b border-[#808080]/20 flex-shrink-0">
                                        -
                                    </div>
                                </div>
                            )),
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Notifications

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
