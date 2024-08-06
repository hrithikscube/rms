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
    name: 'Add Kitchen',
    link: '#',
  },
]

const AddKitchen = () => {
  return (
    <Layout>
      <Head>
        <title>Add Kitchen</title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />
      </div>
    </Layout>
  )
}

export default AddKitchen

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
