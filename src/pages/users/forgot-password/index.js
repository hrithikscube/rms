import Logo from '@/components/Logo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [params, setParams] = useState({
    username: '',
    password: '',
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

  const Router = useRouter()

  const resetPassword = () => {
    alert('reset password trigger')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#f1f1f1] lg:px-0 px-5 gap-5">
      <Head>
        <title>Forgot Password | RMS </title>
      </Head>

      {/* <h1 className="lg:text-4xl text-2xl font-bold italic text-red-700">
        RMS
      </h1> */}
      <Logo />

      <div className="lg:w-9/12 w-full mx-auto bg-white shadow-2xl min-h-[300px] rounded-xl overflow-hidden">
        <div className="grid lg:grid-cols-2 w-full h-full">
          <div className="bg-gradient-to-r from-cyan-300 to-red-300 w-full min-h-[300px] flex-shrink-0 overflow-hidden flex flex-col items-center justify-center">
            <Logo isIntro />
          </div>

          <div className="flex flex-col py-10 lg:px-16 px-8 gap-4">
            <div className="flex flex-col items-start text-start gap-1">
              <h2 className="text-base font-semibold">Forgot Password?</h2>
              <p className="text-xs">
                Submit your email address and we&apos;ll send you a link to
                reset your password.
              </p>
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

              <div className="flex flex-col w-full gap-2">
                <button
                  onClick={resetPassword}
                  className="h-[46px] bg-red-700/90 text-white px-5 rounded w-full text-sm"
                >
                  Reset Password
                </button>

                <button
                  onClick={() => Router.push('/users/login')}
                  className="h-[46px] underline w-full px-5 text-sm text-[#808080] font-medium"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data,
    },
  }
}
