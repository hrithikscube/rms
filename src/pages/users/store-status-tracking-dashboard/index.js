import Breadcrumb from '@/components/Breadcrumb'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useState } from 'react'
import { Fragment } from 'react'

let links = [
  {
    name: 'Dashboard',
    link: '/users/dashboard',
  },

  {
    name: 'Store Status Tracking Dashboard',
    link: '#',
  },
]

let category_types = [
  {
    name: 'Restaurant Wise',
    slug: 'restaurant_wise',
  },
  {
    name: 'Aggregator',
    slug: 'aggregator',
  },
]

const StoreStatusTrackingDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('restaurant_wise')

  return (
    <Layout>
      <Head>
        <title>Store Status Tracking</title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />

        <div className="flex flex-col p-5 w-full">
          <div className="flex flex-col bg-white w-full rounded-lg p-4">
            <div className="flex items-center w-fit bg-red-100 rounded-full p-1">
              {React.Children.toArray(
                category_types.map((item) => (
                  <button
                    onClick={() => {
                      setActiveMenu(item.slug)
                    }}
                    className={`h-full flex-shrink-0 px-2 relative w-fit text-xs font-semibold ${activeMenu === item?.slug
                      ? 'bg-white rounded-full py-1 text-red-700'
                      : 'text-[#121212]'
                      }`}
                  >
                    {item?.name}

                  </button>
                )),
              )}
            </div>

            <div className="w-full flex flex-col p-6">

              <div className="w-full h-40 flex items-center justify-center">
                <div className="text-center flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-[#121212]">No Stores Found With Offline Status</h3>
                  <p className="text-xs font-medium text-[#808080] w-8/12 mx-auto">We could not find what you searched for Try searching again</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default StoreStatusTrackingDashboard

export async function getStaticProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
