import Layout from '@/components/Layout'
import React from 'react'

const HelpManual = () => {
    return (
        <Layout>
            <div className='w-full h-full flex flex-col items-center justify-center flex-shrink-0'>HelpManual</div>
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
  