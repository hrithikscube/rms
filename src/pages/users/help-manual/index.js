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
    name: 'Help Manual',
    link: '',
  },
]

const HelpManual = () => {
  return (
    <Layout>
      <Head>
        <title>Download Help Manual </title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />
      </div>
    </Layout>
  )
}

export default HelpManual

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
