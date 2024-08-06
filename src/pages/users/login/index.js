import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'

const Login = () => {
  const [params, setParams] = useState({
    username: 'hrithik@scube.me',
    password: 'admin123',
  })

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    setParams({
      ...params,
      [name]: value,
    })
  }

  const [isInit, setIsInit] = useState(true)

  const toggleInit = (value) => {
    setIsInit(value)
  }

  const Router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#f1f1f1] lg:px-0 px-5 gap-5">
      <Head>
        <title>Login</title>
      </Head>

      <h1 className="lg:text-4xl text-2xl font-bold italic text-red-700">
        RMS
      </h1>

      <div className="lg:w-9/12 w-full mx-auto bg-white shadow-2xl min-h-[300px] rounded-xl overflow-hidden">
        <div className="grid lg:grid-cols-2 w-full h-full">
          <div className="bg-gradient-to-r from-cyan-300 to-red-300 w-full min-h-[300px] flex-shrink-0"></div>

          <div className="flex flex-col py-10 lg:px-16 px-8 gap-4">
            {isInit ? (
              <Fragment>
                <div className="flex flex-col items-start text-start gap-1">
                  <h2 className="text-base font-semibold">Sign in</h2>
                  <p className="lg:text-sm text-xs">to access Account</p>
                </div>

                <div className="flex flex-col items-start w-full lg:gap-6 gap-5">
                  <input
                    placeholder="Enter address or mobile number"
                    type="text"
                    name="username"
                    value={params.username}
                    onChange={handleChange}
                    className="h-[46px] w-full border border-[#808080]/60 rounded text-sm outline-none pl-3"
                  />

                  <button
                    onClick={() => toggleInit(false)}
                    className="h-[46px] bg-red-700/90 text-white px-5 rounded w-full text-sm"
                  >
                    Submit
                  </button>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="flex flex-col items-start text-start gap-1">
                  <h2 className="text-base font-semibold">Sign in</h2>

                  <div className="flex items-center gap-2 w-full">
                    <p className="lg:text-sm text-xs">With</p>

                    <div className="flex items-center bg-gray-200 py-1 px-4 rounded-full w-full justify-between">
                      <p className="lg:text-sm text-sm">
                        {params.username || 'test@gmail.com'}
                      </p>

                      <button
                        onClick={() => toggleInit(true)}
                        className="text-xs text-red-700/90 font-medium"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start w-full lg:gap-6 gap-4 pt-2">
                  <div className="flex flex-col gap-2 w-full">
                    <p className="text-xs text-[#808080] font-medium">
                      Password
                    </p>

                    <input
                      placeholder="Enter here"
                      type="password"
                      name="password"
                      value={params.password}
                      onChange={handleChange}
                      className="h-[46px] w-full border border-[#808080]/60 rounded text-sm outline-none pl-3"
                    />

                    <div className="flex items-center justify-between w-full">
                      <p className="text-xs font-medium">Rememeber Me</p>
                      <button
                        onClick={() => Router.push('/users/forgotpassword')}
                        className="text-red-700/90 hover:text-blue-600 text-xs font-medium underline medium"
                      >
                        Forgot Password
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      Router.push('/users/dashboard')
                    }}
                    className="h-[46px] bg-red-700/90 text-white px-5 rounded w-full text-sm"
                  >
                    Sign in
                  </button>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

export async function getStaticProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
