import Breadcrumb from '@/components/Breadcrumb'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

let links = [
  {
    name: 'Home',
    link: '/users/dashboard',
  },
  {
    name: 'User Logs',
    link: '#',
  },
]

const UserLogs = () => {
  return (
    <Layout>
      <Head>
        <title>User Logs</title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />
      </div>
    </Layout>
  )
}

export default UserLogs

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
