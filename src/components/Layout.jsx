import { useRouter } from 'next/router'
import React, { useEffect,useRef } from 'react'
import Footer from './Footer'

const Layout = ({ children }) => {
  let modules_list = [
    {
      name: 'Dashboard',
      link: '/users/dashboard',
    },
    {
      name: 'Orders And Billing',
      link: '/users/orders-and-billing',
    },
    {
      name: 'Tables',
      link: '/users/tables',
    },
    {
      name: 'Menu Trigger & Store On / Off',
      link: '/users/menu-and-store',
    },
    {
      name: 'Item out-of-stock tracking',
      link: '/users/out-of-stock-tracking',
    },
    {
      name: 'Store status tracking dashboard',
      link: '/users/store-status-tracking-dashboard',
    },
    {
      name: 'Inventory',
      link: '/users/inventory',
    },
    {
      name: 'Reports',
      link: '/users/reports',
    },
    {
      name: 'User Management',
      link: '/users/user-management',
    },
    {
      name: 'Delete Outlets',
      link: '/users/delete-outlets',
    },
    {
      name: 'Franchisee Management',
      link: '/users/franchisee-management',
    },
    {
      name: 'Briefcase Documents',
      link: '/users/briefcase-documents',
    },
    {
      name: 'User Logs',
      link: '/users/user-logs',
    },
    {
      name: 'Add New HO',
      link: '/users/add-head-office',
    },
    {
      name: 'Add Kitchen',
      link: '/users/add-kitchen',
    },
    {
      name: 'Create Zone',
      link: '/users/create-zone',
    },
    {
      name: 'HMS APPs',
      link: '/users/hms-apps',
    },
    {
      name: 'Help Manual',
      link: '/users/help-manual',
    },
  ]

  const Router = useRouter()

  const { asPath } = useRouter()

  useEffect(() => {
    const activeIndex = modules_list.findIndex((item) => item.link === asPath)
    if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
      buttonRefs.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [asPath])

  const buttonRefs = useRef([])

  return (
    <div className="flex flex-col w-full relative min-h-screen">
      <div className="h-12 bg-white w-full fixed top-0 left-0 z-[10] px-5 flex items-center shadow justify-between">
        <h1 className="lg:text-2xl text-xl font-bold italic text-red-600">
          HMS
        </h1>

        <button
          onClick={() => Router.push('/users/login')}
          className="text-sm underline text-red-600 font-medium"
        >
          Logout
        </button>
      </div>

      <div className="pt-12 w-full flex flex-row h-full flex-shrink-0 relative">
        <div className="w-60 h-full bg-white flex-shrink-0 overflow-y-auto fixed top-12 left-0 shadow z-[10]">
          <div className="flex flex-col w-full">
            {React.Children.toArray(
              modules_list.map((item, index) => (
                <button
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onClick={() => {
                    Router.push(item.link)
                  }}
                  className={`h-[46px] w-full px-5 text-xs font-medium text-start ${
                    item.link === asPath
                      ? 'text-red-600 bg-red-100'
                      : 'hover:bg-gray-200 text-[#121212]'
                  }`}
                >
                  {item.name}
                </button>
              )),
            )}
          </div>
        </div>

        <div className="ml-60 w-full min-h-screen flex flex-col bg-[#f2f2f2]">
          {/* {
                        React.Children.toArray([...Array(10)].map(item => (
                            <div className='w-full h-60 bg-red-200 flex-shrink-0'></div>
                        )))
                    } */}
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
