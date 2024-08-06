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
    name: 'Add Head Office',
    link: '#',
  },
]

const AddHeadOffice = () => {
  return (
    <Layout>
      <Head>
        <title>Add Head Office</title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />
      </div>
    </Layout>
  )
}

export default AddHeadOffice

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
