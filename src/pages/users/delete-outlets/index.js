import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import Secondarybtn from '@/components/Secondarybtn';
import Primarybtn from '@/components/Primarybtn';

let links = [
  {
    name: 'Dashboard',
    link: '/users/dashboard',
  },

  {
    name: 'Delete Outlets',
    link: '',
  },
]

let dummy_data = [
  { name: 'Restaurant 1', value: 'restaurant_1', id: 'restaurant_1', isSelected: false },
  { name: 'Restaurant 2', value: 'restaurant_2', id: 'restaurant_2', isSelected: false },
  { name: 'Restaurant 3', value: 'restaurant_3', id: 'restaurant_3', isSelected: false },
  { name: 'Restaurant 4', value: 'restaurant_4', id: 'restaurant_4', isSelected: false },
  { name: 'Restaurant 5', value: 'restaurant_5', id: 'restaurant_5', isSelected: false },
  { name: 'Restaurant 6', value: 'restaurant_6', id: 'restaurant_6', isSelected: false },
  { name: 'Restaurant 7', value: 'restaurant_7', id: 'restaurant_7', isSelected: false },
  { name: 'Restaurant 8', value: 'restaurant_8', id: 'restaurant_8', isSelected: false },
];


const DeleteOutlets = () => {

  return (
    <Layout>
      <Head>
        <title>Delete Outlet | RMS </title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />

        <div className="flex flex-col p-5 w-full">
          <div className="flex flex-col bg-white w-full rounded-lg">

            <div className='p-4 w-full flex flex-col'>
              <div className='flex flex-col'>
                <h2 className='text-[#121212] font-semibold text-sm'>Outlet(Restaurant/Kitchen)</h2>
                <p className='text-xs text-cyan-700'>Note: Once deleted, the Outlets (Restaurant/Kitchen) would not be visible in the dashboard and retrieval of data would not be possible.</p>
              </div>
            </div>


            <div className="w-full flex flex-col p-6">

              <div className='w-full rounded-lg bg-slate-100 h-32 p-4 grid grid-cols-3'>

                {
                  React.Children.toArray(dummy_data.map((item, index) => (
                    <div className='flex items-center gap-1'>
                      <input id={item.id} type="checkbox" />
                      <label for={item.id} className='text-xs font-medium select-none cursor-pointer'>{item.name}</label>
                    </div>
                  )))
                }

              </div>


            </div>

            <div className='w-full flex flex-row items-end justify-end p-3 bg-red-50'>

              <div className='flex items-center gap-2'>
                <Secondarybtn label="Cancel" />
                <Primarybtn label="Delete" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DeleteOutlets

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
