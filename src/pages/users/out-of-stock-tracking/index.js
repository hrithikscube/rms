import Breadcrumb from '@/components/Breadcrumb'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useState } from 'react'
import { Fragment } from 'react'

let links = [
  {
    name: 'Home',
    link: '/users/dashboard',
  },

  {
    name: 'Item out-of-stock-tracking',
    link: '#',
  },
]

let category_types = [
  {
    name: 'Items',
    slug: 'items',
  },
  {
    name: 'Addons',
    slug: 'addons',
  },
]

let running_orders_stats = [
  {
    name: 'Orders',
    value: 5,
  },
  {
    name: '$',
    value: 680,
  },
]

let running_table_stats = [
  {
    name: 'Estimated Total',
    value: 179,
  },
  {
    name: 'Total Running Tables',
    value: 1,
  },
]

let order_types = [
  {
    name: 'Dine In',
    orders: {
      name: 'Orders/KOTS',
      value: 5,
    },
    est_obj: {
      name: 'Estimate Total Amount',
      value: 790,
    },
  },
  {
    name: 'Pick Up',
    orders: {
      name: 'Orders',
      value: 5,
    },
    est_obj: {
      name: 'Estimate Total Amount',
      value: 790,
    },
  },
  {
    name: 'Delivery',
    orders: {
      name: 'Orders',
      value: 5,
    },
    est_obj: {
      name: 'Estimate Total Amount',
      value: 790,
    },
  },

  {
    name: 'Order yet to be marked ready',
    orders: {
      name: 'Orders',
      value: 5,
    },
    est_obj: {
      name: 'Estimate Total Amount',
      value: 790,
    },
  },

  {
    name: 'Order yet to be picked up',
    orders: {
      name: 'Orders',
      value: 5,
    },
    est_obj: {
      name: 'Estimate Total Amount',
      value: 790,
    },
  },

  {
    name: 'Order yet to be delivered',
    orders: {
      name: 'Orders',
      value: 5,
    },
    est_obj: {
      name: 'Estimate Total Amount',
      value: 790,
    },
  },
]

const RenderStats = (list) => {
  return (
    <Fragment>
      {React.Children.toArray(
        list.map((item) => (
          <div className="flex flex-col px-10 text-center">
            <p className="text-xs font-medium">{item.name}</p>
            <p className="text-sm font-semibold text-[#121212]">{item.value}</p>
          </div>
        )),
      )}
    </Fragment>
  )
}

const OutOfStockTracking = () => {
  const [activeMenu, setActiveMenu] = useState('items')

  return (
    <Layout>
      <Head>
        <title>Out of Stock Tracking</title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />

        <div className="flex flex-col p-5 w-full">
          <div className="flex flex-col bg-white w-full rounded-lg">
            <div className="h-12 flex items-center">
              {React.Children.toArray(
                category_types.map((item) => (
                  <button
                    onClick={() => {
                      setActiveMenu(item.slug)
                    }}
                    className={`h-full flex-shrink-0 px-10 relative w-fit text-sm font-medium ${
                      activeMenu === item?.slug
                        ? 'text-red-600'
                        : 'text-[#121212]'
                    }`}
                  >
                    {item?.name}

                    {activeMenu === item.slug && (
                      <div className="border border-red-600 absolute bottom-0 left-0 w-full" />
                    )}
                  </button>
                )),
              )}
            </div>

            <div className="w-full flex flex-col p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xs text-[#121212] font-medium">
                  Restaurant Wise
                </h2>

                <p className="text-xs text-[#121212] font-medium">
                  Show restaurant with all items in stock
                </p>
              </div>

              <div className="w-full h-40 flex items-center justify-center">
                <div className="text-center flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-[#121212]">No Records Found!</h3>
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

export default OutOfStockTracking

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
