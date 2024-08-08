import React, { Fragment } from 'react';


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <p className='lg:text-base text-sm'>Please wait while we redirect you</p>
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const { req, res } = context;

  let isLoggedIn = false

  if (isLoggedIn) {
    res.writeHead(301, { Location: "/users/dashboard" });
  } else {
    res.writeHead(301, { Location: "/users/login" });
  }

  res.end();

  return { props: {} };
}