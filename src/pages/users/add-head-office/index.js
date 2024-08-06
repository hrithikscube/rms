import Head from 'next/head';
import Input from '@/components/Input';
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Textarea from '@/components/Textarea';
import Breadcrumb from '@/components/Breadcrumb';

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

let serving_types = [
  {
    name: 'Service',
    value: 'Service',
    id: 'Service',
  },
  {
    name: 'Goods',
    value: 'Goods',
    id: 'Goods',
  },
  {
    name: 'Both',
    value: 'Both',
    id: 'Both',
  },
]

const AddHeadOffice = () => {

  const [params, setParams] = useState({
    outlet_name: '',
    outlet_alias: '',
    email: '',

    landmark: '',
    zipcode: '',
    fax: '',
    tin_no: '',
    country: '',
    state: '',
    city: '',
    timezone: '',
    address: '',
    area: '',
    latitude: '',
    longitude: '',
    code: '',
    serving_type: '',
    enable_kot: false,

    manager_phone: '',
    owner_phone: '',
    direct_number: '',
    decision_maker: ''
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    setParams({
      ...params,
      [name]: value
    })
  }

  const handleCheckBox = (e) => {
    let { name, value, checked } = e.target
    setParams({
      ...params,
      [name]: checked
    })
  }

  return (
    <Layout>
      <Head>
        <title>Add Head Office</title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />

        <div className='flex flex-col py-5 w-11/12 mx-auto'>

          <p className='text-sm text-[#121212] font-medium pb-4'>Below are the configuration to manage your outlet information. Click on the Save button once you change the information.</p>

          <div className='w-full p-5 bg-white rounded-tl-lg rounded-tr-lg flex flex-col gap-6'>
            {/* Outlet Information */}
            <div className='flex flex-col gap-4 w-full'>

              <h2 className='text-sm font-semibold text-[#121212]'>Outlet information</h2>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Outlet Name*:</p>
                </div>

                <div className='flex flex-col gap-1 w-full'>
                  <Input type="text" name="outlet_name" value={params.outlet_name} handleChange={handleChange} />
                  <p className='text-xs text-cyan-800 font-medium'>You can not change the name of created outlet. Contact RMS support for help.</p>
                </div>
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Outlet Alias*:</p>
                </div>

                <Input type="text" name="outlet_alias" value={params.outlet_alias} handleChange={handleChange} />

              </div>

              <div className='flex flex-row w-8/12'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Email:</p>
                </div>

                <div className='flex flex-col w-full gap-1'>
                  <Input type="email" name="email" value={params.email} handleChange={handleChange} />
                  <p className='text-xs text-cyan-800 font-medium'>Enter Email ID through which you will receive all communications from RMS.</p>

                </div>
              </div>

            </div>

            {/* Address Information */}
            <div className='flex flex-col gap-4 w-full'>

              <div className='flex flex-col'>
                <h2 className='text-sm font-semibold text-[#121212]'>Address information</h2>
                <p className='text-[#121212]/90 text-xs'>Enter physical location of your outlet. Provide your ZipCode and State accurately for GST calculation whenever applicable.</p>
              </div>

              <div className='flex flex-row w-8/12 items-center pt-2'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Landmark:</p>
                </div>

                <Input type="text" name="outlet_name" value={params.outlet_name} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Zip Code *:</p>
                </div>

                <Input type="text" name="zipcode" value={params.zipcode} handleChange={handleChange} />

              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Fax:</p>
                </div>

                <Input type="text" name="fax" value={params.fax} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Tin No:</p>
                </div>

                <Input type="text" name="tin_no" value={params.tin_no} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Company:</p>
                </div>

                <Input type="text" name="company" value={params.company} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>State:</p>
                </div>

                <Input type="text" name="state" value={params.state} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>City:</p>
                </div>

                <Input type="text" name="city" value={params.city} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Timezone:</p>
                </div>

                <Input type="text" name="timezone" value={params.timezone} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Address:</p>
                </div>

                <Textarea rows={5} type="text" name="address" value={params.address} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Area:</p>
                </div>

                <Textarea rows={4} type="text" name="area" value={params.area} handleChange={handleChange} />
              </div>


              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Latitude:</p>
                </div>

                <Input type="text" name="latitude" value={params.latitude} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Longitude:</p>
                </div>

                <Input type="text" name="longitude" value={params.longitude} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Code:</p>
                </div>

                <Input type="text" name="code" value={params.code} handleChange={handleChange} />
              </div>

              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Outlet Serving Type:</p>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-row items-center gap-4'>

                    {
                      React.Children.toArray(serving_types.map((item) => (
                        <div className='flex items-center gap-1'>
                          <input id={item.id} type="radio" value={item.value} name="serving_type" onChange={handleChange} />
                          <label htmlFor={item.id} className='text-xs font-medium text-[#121212]/90 select-none cursor-pointer'>{item.name}</label>
                        </div>
                      )))
                    }

                  </div>
                  <p className='text-xs text-cyan-800 font-medium'>Note: In case if "Both" option is selected, then in an invoice if both (goods and services ) type of items are available then the master tax of items tagged as service would be calculated.</p>
                </div>
              </div>



              <div className='flex flex-row w-8/12 items-center'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Enable KOT for online order:</p>
                </div>

                <div className='w-full'>
                  <input
                    type="checkbox"
                    name="enable_kot"
                    checked={params.enable_kot}
                    onChange={handleCheckBox} />
                </div>
              </div>


            </div>

            {/* Communication Details */}
            <div className='flex flex-col gap-4 w-full'>

              <h2 className='text-sm font-semibold text-[#121212]'>Communication Details:</h2>

              <div className='flex flex-row w-8/12 items-start'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Manager's Phone Number*:</p>
                </div>

                <div className='flex flex-col gap-1 w-full'>
                  <Input type="text" name="manager_phone" value={params.manager_phone} handleChange={handleChange} />
                  <p className='text-xs text-cyan-800 font-medium'>Provide contact details of Manager who manages the outlet. ( comma separated if multiple )</p>
                </div>
              </div>

              <div className='flex flex-row w-8/12 items-start'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Owner's Phone Number*:</p>
                </div>

                <div className='flex flex-col gap-1 w-full'>
                  <Input type="text" name="manager_phone" value={params.manager_phone} handleChange={handleChange} />
                  <p className='text-xs text-cyan-800 font-medium'>Provide contact details ( comma separated if multiple ) to reach.</p>
                </div>
              </div>

              <div className='flex flex-row w-8/12 items-start'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Direct Number*:</p>
                </div>

                <div className='flex flex-col gap-1 w-full'>
                  <Input type="text" name="manager_phone" value={params.manager_phone} handleChange={handleChange} />
                  <p className='text-xs text-cyan-800 font-medium'>
                    Provide a direct mobile number for Petpooja support to reach in case of any Point of Sale related support. ( Comma separated if multiple )</p>
                </div>
              </div>

              <div className='flex flex-row w-8/12 items-start'>
                <div className='w-4/12'>
                  <p className='text-xs font-medium text-[#121212]'>Decision Maker:</p>
                </div>

                <Input type="text" name="decision_maker" value={params.decision_maker} handleChange={handleChange} />
              </div>



            </div>
          </div>

          <div className='w-full bg-red-50 px-5 py-3'>

            <div className='flex items-center justify-end gap-4'>

              <button className="p-2 text-xs px-7 rounded-lg border border-[#808080] text-[#121212] font-medium bg-white">Cancel</button>

              <button className="p-2 text-xs px-7 rounded-lg  text-white border bg-red-700 font-medium hover:bg-red-50">Save Changes</button>

            </div>


          </div>



        </div>
      </div>
    </Layout>
  )
}

export default AddHeadOffice

export async function getStaticProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
