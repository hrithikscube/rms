import Breadcrumb from '@/components/Breadcrumb'
import Input from '@/components/Input'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useState } from 'react'

let links = [
  {
    name: 'Dashboard',
    link: '/users/dashboard',
  },
  {
    name: 'Add Central Kitchen',
    link: '#',
  },
]

const AddKitchen = () => {

  const [params, setParams] = useState({
    outlet_name: '',
    outlet_alias: '',
    email: '',
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    setParams({
      ...params,
      [name]: value
    })
  }

  return (
    <Layout>
      <Head>
        <title>Add Kitchen</title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />

        <div className='flex flex-col py-5 w-11/12 mx-auto gap-4'>

          <p className='text-sm text-[#121212] font-medium'>Below are the configuration to manage your outlet information. Click on the Save button once you change the information.</p>

          <div className='w-full p-5 bg-white min-h-40 rounded-lg flex flex-col gap-6'>

            <div className='flex flex-col gap-4 w-full'>

              <h2 className='text-sm font-semibold text-[#121212]'>Outlet information</h2>

              <div className='flex flex-row w-8/12'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Outlet Name*:</p>
                </div>

                <div className='flex flex-col gap-1 w-full'>
                  <Input type="text" name="outlet_name" value={params.outlet_name} handleChange={handleChange} />
                  <p className='text-xs text-cyan-800'>You can not change the name of created outlet. Contact Petpooja support for help.</p>
                </div>
              </div>

              <div className='flex flex-row w-8/12'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Outlet Alias*:</p>
                </div>

                <Input type="text" name="outlet_alias" value={params.outlet_alias} handleChange={handleChange} />

              </div>

              <div className='flex flex-row w-8/12'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Email:</p>
                </div>

                <Input type="email" name="email" value={params.email} handleChange={handleChange} />

              </div>

            </div>


          </div>

        </div>
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
