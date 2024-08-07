import Input from '@/components/Input';
import Logo from '@/components/Logo';
import Primarybtn from '@/components/Primarybtn';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';

const Login = () => {
  const [params, setParams] = useState({
    username: 'hrithik@scube.me',
    password: 'admin123',
    remember_me: false
  })

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    let { name, value, checked } = e.target
    setParams({
      ...params,
      [name]: name === 'remember_me' ? checked : value,
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

      <div className="invert">
        <Logo />
      </div>

      <div className="lg:w-5/12 md:w-8/12 w-full mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="grid w-full h-full">

          <div className="flex flex-col py-10 lg:px-16 px-8 gap-4">
            {isInit ? (
              <Fragment>
                <div className="flex flex-col items-start text-start gap-1">
                  <h2 className="text-base font-semibold">Sign in</h2>
                  <p className="lg:text-sm text-xs">to access Account</p>
                </div>

                <div className="flex flex-col items-start w-full lg:gap-6 gap-5">
                 
                  <Input
                    label="Enter address or mobile number"
                    type="text"
                    name="username"
                    value={params.username}
                    handleChange={handleChange}
                  />

                  <Primarybtn onClick={() => toggleInit(false)} label="Submit" width="w-full" />
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="flex flex-col items-start text-start gap-1">
                  <h2 className="text-base font-semibold">Sign in</h2>

                  <div className="flex items-center gap-2 w-full">
                    <p className="lg:text-sm text-xs">With</p>

                    <div className="flex items-center bg-gray-200 py-1 px-4 rounded-full w-full justify-between">
                      <p className="lg:text-sm text-xs">
                        {params.username || 'test@gmail.com'}
                      </p>

                      <button
                        onClick={() => toggleInit(true)}
                        className="text-xs text-blue-600 font-medium"
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
                    {/* 
                    <input
                      placeholder="Enter here"
                      type="password"
                      name="password"
                      value={params.password}
                      onChange={handleChange}
                      className="h-[46px] w-full border border-[#808080]/60 rounded text-sm outline-none pl-3"
                    /> */}

                    <Input
                      type="password"
                      name="password"
                      value={params.password}
                      handleChange={handleChange}
                    />

                    <div className="flex items-center justify-between w-full mt-2">
                      <div className="flex items-center gap-2">
                        <input id="remember_me" name="remember_me" value={params.remember_me} type="checkbox" className="w-3 h-3 cursor-pointer" />
                        <label htmlFor="remember_me" className="text-xs font-medium select-none cursor-pointer">Rememeber Me</label>
                      </div>
                      <button
                        onClick={() => Router.push('/users/forgot-password')}
                        className="text-[#121212] hover:text-blue-600 text-xs font-medium medium"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  </div>
                  {/* <button
                    onClick={() => {
                      Router.push('/users/dashboard')
                    }}
                    className="h-[46px] bg-blue-600 text-white px-5 rounded w-full text-sm"
                  >
                    Sign in
                  </button> */}

                  <Primarybtn onClick={() => Router.push('/users/dashboard')} label="Sign in" width="w-full" />

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

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
