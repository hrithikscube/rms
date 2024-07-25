import Layout from '@/components/Layout'
import React from 'react'

const AddKitchen = () => {
    return (
        <Layout>
            <div className='w-full h-full flex flex-col items-center justify-center flex-shrink-0'>AddKitchen</div>
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
  