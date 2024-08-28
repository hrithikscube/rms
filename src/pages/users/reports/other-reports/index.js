import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import FavoriteCard from '../(components)/FavoriteCard';

let links = [
    {
        name: 'Dashboard',
        link: '/users/dashboard',
    },
    {
        name: 'Reports',
        link: '#',
    },
    {
        name: 'OtherReports',
        link: '',
    },
]

let favorites = [
    {
        name: 'Favorite',
        value: 'Favorite',
        id: 'favorite'
    },
    {
        name: 'All Restaurant Report',
        value: 'All Restaurant Report',
        id: "all_restaurant_report",
    },
]

let dummy_data = [
    {
        name: 'Report 1',
        info: 'Total sales of all your restaurant',
        isFav: false
    },
    {
        name: 'Report 2',
        info: 'Customer feedback summary',
        isFav: true
    },
    {
        name: 'Report 3',
        info: 'Monthly expenses breakdown',
        isFav: false
    },
    {
        name: 'Report 4',
        info: 'Inventory stock levels',
        isFav: true
    },
    {
        name: 'Report 5',
        info: 'Daily sales comparison',
        isFav: false
    },
    {
        name: 'Report 6',
        info: 'Top-selling items',
        isFav: true
    },
    {
        name: 'Report 7',
        info: 'Staff performance evaluation',
        isFav: false
    },
    {
        name: 'Report 8',
        info: 'Monthly revenue growth',
        isFav: true
    },
    {
        name: 'Report 9',
        info: 'Weekly special offers analysis',
        isFav: false
    },
    {
        name: 'Report 10',
        info: 'Customer demographics overview',
        isFav: true
    }
];

const OtherReports = () => {

    const [fav, setFav] = useState('Favorite')

    const [records, setRecords] = useState(dummy_data)

    const toggleRecordActive = (index) => {
        let temp = [...records]
        temp[index].isFav = !temp[index].isFav
        setRecords(temp)
    }

    return (
        <Fragment>
            <Head>
                <title>OtherReports</title>
            </Head>
            <div className="w-full h-full flex flex-col flex-shrink-0">
                <Breadcrumb links={links} />

                <div className='w-full flex flex-col p-5'>

                    <div className='flex flex-row items-start w-full gap-4 min-h-screen'>

                        <div className='lg:w-3/12 pt-4 flex flex-col bg-white rounded-lg h-screen flex-shrink-0'>
                            {
                                React.Children.toArray(favorites.map(item => (
                                    <button
                                        onClick={() => {
                                            setFav(item.value)
                                        }}
                                        className={`h-[42px] px-3 relative text-start text-xs font-medium ${fav === item.value ? 'text-blue-600 bg-blue-100' : 'text-[#1212121] hover:bg-[#808080]/10'}`}>
                                        {item.name}
                                    </button>
                                )))
                            }
                        </div>

                        <div className='lg:w-9/12 flex flex-col gap-4'>
                            {/* search */}
                            <div className='w-full p-3 bg-white flex items-center justify-between rounded-lg'>

                                <input placeholder='Search for reports here...' className='outline-none bg-transparent border border-[#808080]/40  rounded w-6/12 text-xs p-2 placeholder:text-xs placeholder:font-medium' />

                                <button className='w-10 h-10 rounded bg-blue-100 flex items-center justify-center'>
                                    <Image width={20} height={20} src="/icons/settings.svg" alt="settings-icon" className='w-5 h-5' />
                                </button>

                            </div>

                            {/* favorite */}
                            <div className='flex flex-col bg-white w-full min-h-40 rounded-lg p-4'>

                                <div className='flex flex-col w-full'>

                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-sm text-[#121212] font-medium'>Favorite</h2>
                                        <p className='text-xs text-[#121212]/90'>All reports which are marked as favorites to refer frequently</p>
                                    </div>

                                    <div className='w-full flex flex-col items-center justify-center gap-1 text-center pt-16 pb-10'>
                                        <h2 className='text-sm text-[#121212] font-medium'>There are no Favorites</h2>
                                        <p className='text-xs text-[#121212]/90'>Add Reports to Favorite by selecting the star mark</p>
                                    </div>

                                </div>

                            </div>

                            {/* all restaurant report */}
                            <div className='flex flex-col bg-white w-full min-h-60 rounded-lg p-4'>

                                <div className='flex flex-col w-full'>

                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-sm text-[#121212] font-medium'>All Restaurant Report</h2>
                                        <p className='text-xs text-[#121212]/90'>Get insights to all your restaurant & sales related activities</p>
                                    </div>

                                    <div className='grid grid-cols-2 gap-6 py-5'>

                                        {
                                            React.Children.toArray(records.map((item, index) => (
                                                <FavoriteCard data={item} onClick={() => toggleRecordActive(index)} />
                                            )))
                                        }

                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>


        </Fragment>
    )
}

export default OtherReports

export async function getServerSideProps() {
    let data = {}
    return {
        props: {
            data: data,
        },
    }
}
