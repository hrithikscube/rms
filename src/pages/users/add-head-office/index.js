import Layout from '@/components/Layout'
import React from 'react'

const AddHeadOffice = () => {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center flex-shrink-0">
        AddHeadOffice
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
