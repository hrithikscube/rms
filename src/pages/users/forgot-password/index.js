import Input from '@/components/Input';
import Logo from '@/components/Logo';
import Primarybtn from '@/components/Primarybtn';
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
        <title>Forgot Password </title>
      </Head>

      <div className="invert">
        <Logo />
      </div>

      <div className="lg:w-4/12 md:w-8/12 w-full mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="grid w-full h-full">

          <div className="flex flex-col py-10 lg:px-16 px-8 gap-4">
            <div className="flex flex-col items-start text-start gap-1">
              <h2 className="text-base font-semibold">Forgot Password?</h2>
              <p className="text-xs">
                Submit your email address and we&apos;ll send you a link to
                reset your password.
              </p>
            </div>

            <div className="flex flex-col items-start w-full gap-4">
         
              <Input
                label="Enter address or mobile number"
                type="text"
                name="username"
                value={params.username}
                handleChange={handleChange}
              />

              <div className="flex flex-col w-full">
               
                <Primarybtn width="w-full" label="Reset Password" />

                <button
                  onClick={() => Router.push('/users/login')}
                  className="h-[46px] underline w-full px-5 text-xs text-[#808080] font-medium"
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
