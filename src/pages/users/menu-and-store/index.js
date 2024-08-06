import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

let links = [
  {
    name: 'Dashboard',
    link: '/users/dashboard',
  },
  {
    name: 'All Outlets',
    link: '/users/menu-and-store',
  },
  {
    name: 'Third Party User List',
    link: '#',
  },
]

let all_outlets_list = [
  'Swiggy',
  'Jungle Works Web',
  'BlendVerse',
  'Magicpin',
  'Pick Up Menu QR',
  'Zomato',
]

const MenuAndStore = () => {
  return (
    <Layout>
      <Head>
        <title>Menu and Store</title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />

        <div className="p-5">
          <div className="bg-white px-6 py-8 w-full rounded-lg grid grid-cols-4 gap-6">
            {React.Children.toArray(
              all_outlets_list.map((item) => (
                <div className="border border-[#808080]/90 rounded-lg px-4 py-6 hover:bg-red-50 cursor-pointer group">
                  <div className="flex flex-row items-start gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div className="flex flex-col items-start text-start gap-1">
                      <p className="text-sm font-medium group-hover:text-red-700 text-[#121212]">
                        {item}
                      </p>
                      <p className="text-xs group-hover:text-red-700 text-[#808080]">
                        Tap to view
                      </p>
                    </div>
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

export default MenuAndStore

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
