import Breadcrumb from '@/components/Breadcrumb'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

let links = [
  {
    name: 'Dashboard',
    link: '/users/dashboard',
  },

  {
    name: 'Briefcase Documents',
    link: '#',
  },
]


const BriefcaseDocuments = () => {

  return (
    <Layout>
      <Head>
        <title>Briefcase Documents</title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />

        <div className="flex flex-col p-5 w-full">
          <div className="flex flex-col bg-white w-full rounded-lg">

            <div className='w-full flex flex-row items-end justify-end p-3'>

              <button className='text-white text-xs bg-red-700 py-2 px-6 rounded-md font-medium'>
                Add
              </button>

            </div>

            <div className='w-full flex flex-row items-start justify-start border-y py-3 px-4'>

              <button className='text-xs font-semibold text-[#121212]/90 w-full text-start'>
                Search
              </button>

            </div>


            <div className="w-full flex flex-col p-6">

              <div className="w-full h-40 flex items-center justify-center">
                <div className="text-center flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-[#121212]">No Records Found</h3>
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

export default BriefcaseDocuments

export async function getStaticProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
