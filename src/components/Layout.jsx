import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import Footer from './Footer'

const modules_list = [
  { name: 'Dashboard', link: '/users/dashboard' },
  { name: 'Add New HO', link: '/users/add-head-office' },
  { name: 'Add Kitchen', link: '/users/add-kitchen' },
  { name: 'Briefcase Documents', link: '/users/briefcase-documents' },
  { name: 'Create Zone', link: '/users/create-zone' },
  { name: 'Delete Outlets', link: '/users/delete-outlets' },
  { name: 'Franchisee Management', link: '/users/franchisee-management' },

  { name: 'Inventory', link: '/users/inventory' },
  { name: 'Item out-of-stock tracking', link: '/users/out-of-stock-tracking' },
  { name: 'Help Manual', link: '/users/help-manual' },
  { name: 'Menu Trigger & Store On / Off', link: '/users/menu-and-store' },
  { name: 'Orders And Billing', link: '/users/orders-and-billing' },
  { name: 'User Management', link: '/users/user-management' },
  { name: 'User Logs', link: '/users/user-logs' },
  { name: 'Store status tracking dashboard', link: '/users/store-status-tracking-dashboard' },
  { name: 'Tables', link: '/users/tables' },
  { name: 'Reports', link: '/users/reports' },
];

const Layout = ({ children }) => {

  const Router = useRouter()

  const { asPath } = useRouter()

  useEffect(() => {
    const activeIndex = modules_list.findIndex((item) => item.link === asPath)
    if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
      setTimeout(() => {
        buttonRefs.current[activeIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 300) // Delay in milliseconds (e.g., 300ms)
    }
  }, [asPath])

  const buttonRefs = useRef([])

  return (
    <div className="flex flex-col w-full relative min-h-screen">
      <div className="h-12 bg-white w-full fixed top-0 left-0 z-[10] px-5 flex items-center shadow justify-between">
        <h1 className="lg:text-2xl text-xl font-bold italic text-red-700">
          RMS
        </h1>

        <button
          onClick={() => Router.push('/users/login')}
          className="text-sm underline text-red-700 font-medium"
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
                  className={`h-[46px] w-full px-5 text-xs font-medium text-start ${item.link === asPath
                    ? 'text-red-700 bg-red-100'
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
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
