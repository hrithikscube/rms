import Head from 'next/head';
import React, { Fragment } from 'react';
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
    <Fragment>
      <Head>
        <title>Download Help Manual </title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />
      </div>
    </Fragment>
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
