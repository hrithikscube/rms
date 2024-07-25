import Layout from '@/components/Layout'
import React from 'react'

const FranchiseeManagement = () => {
    return (
        <Layout>
            <div className='w-full h-full flex flex-col items-center justify-center flex-shrink-0'>FranchiseeManagement</div>
        </Layout>
    )
}

export default FranchiseeManagement

export async function getServerSideProps() {
    let data = {}
    return {
      props: {
        data: data,
      },
    }
  }
  