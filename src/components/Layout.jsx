import Footer from './Footer';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import Image from 'next/image';

let modules_list = [
  {
    name: 'Dashboard',
    link: '/users/dashboard',
    isActive: false,
    sub_modules: [
    ]
  },
  {
    name: 'Orders And Billing',
    link: '/users/orders-and-billing',
    isActive: false,
    sub_modules: [
      {
        name: 'All Orders',
        link: '/users/orders-and-billing/all-orders'
      },
      {
        name: 'Online Orders',
        link: '/users/orders-and-billing/online-orders'
      },
      {
        name: 'KOT',
        link: '/users/orders-and-billing/kot'
      },
      {
        name: 'Due Payment Settlement',
        link: '/users/orders-and-billing/due-payment-settlement'
      }

    ]
  },
  {
    name: 'Tables',
    link: '/users/tables',
    isActive: false,
    sub_modules: [
      {
        name: 'Running Orders',
        link: '/users/tables/running-orders'
      }
    ]
  },
  {
    name: 'Menu Management',
    link: '/users/menu-management',
    isActive: false,
    sub_modules: [
      {
        name: 'Menu & Discounts',
        link: '/users/menu-management/menu-and-discounts'
      },
      {
        name: 'Online Menu on/off',
        link: '/users/menu-management/menu-on-off'
      },
      {
        name: 'Special Note',
        link: '/users/menu-management/special-note'
      },
      {
        name: 'Set Item Commission',
        link: '/users/menu-management/set-item-commission'
      },
      {
        name: 'Schedule Changes',
        link: '/users/menu-management/schedule-changes'
      },
    ]
  },
  {
    name: 'Inventory',
    link: '/users/inventory',
    isActive: false,
    sub_modules: [

    ]
  },
  {
    name: 'CRM',
    link: '/users/crm',
    isActive: false,
    sub_modules: [
      {
        name: 'Marketing',
        link: '/users/crm/marketing'
      },
      {
        name: 'Customers',
        link: '/users/crm/customers'
      },
      {
        name: 'Campaign',
        link: '/users/crm/campaign'
      },
      {
        name: 'Feedback',
        link: '/users/crm/feedback'
      },
    ]
  },
  {
    name: 'Accounting',
    link: '/users/accounting',
    isActive: false,
    sub_modules: [
      {
        name: 'Payments',
        link: '/users/accounting/payments'
      },
      {
        name: 'Online Order Reconciliation',
        link: '/users/accounting/online-order-reconciliation'
      },
      {
        name: 'GST Information',
        link: '/users/accounting/gst-information'
      },
      {
        name: 'Bank Details',
        link: '/users/accounting/bank-details'
      },
      {
        name: 'KYC Details',
        link: '/users/accounting/kyc-details'
      },
      {
        name: 'Utility Bill',
        link: '/users/accounting/utility-bill'
      },
      {
        name: 'Expenses & Withdrawal',
        link: '/users/accounting/expenses-and-withdrawal'
      },
      {
        name: 'Service Payment History',
        link: '/users/accounting/service-payment-history'
      },
      {
        name: 'Agreement Information',
        link: '/users/accounting/agreement-information'
      },
      {
        name: 'Loan Information',
        link: '/users/accounting/loan-information'
      },
      {
        name: 'Denomination',
        link: '/users/accounting/denomination'
      },
    ]
  },
  {
    name: 'Reports',
    link: '/users/reports',
    isActive: false,
    sub_modules: [
      {
        name: 'Day End Summary',
        link: '/users/reports/day-end-summary'
      },
      {
        name: 'Other Reports',
        link: '/users/reports/other-reports'
      },
      {
        name: 'Report Notifications',
        link: '/users/reports/report-notifications'
      },
      {
        name: 'Delivery Management',
        link: '/users/reports/delivery-management'
      },
    ]
  },
  {
    name: 'Configuration',
    link: '/users/configuration',
    isActive: false,
    sub_modules: [
      {
        name: 'Sub Order Type',
        link: '/users/configuration/sub-order-type'
      },
      {
        name: 'Remove Orders',
        link: '/users/configuration/remove-orders'
      },
      {
        name: 'Delivery Distance',
        link: '/users/configuration/delivery-distance'
      },
      {
        name: 'Outlet Configuration',
        link: '/users/configuration/outlet-configuration'
      },
      {
        name: 'Marketplace Settings',
        link: '/users/configuration/marketplace-settings'
      },
    ]
  },
  {
    name: 'User Management',
    link: '/users/user-management',
    isActive: false,
    sub_modules: [
      {
        name: 'Biller Group Management',
        link: '/users/user-management/biller-group'
      },
      {
        name: 'Admin Group Management',
        link: '/users/user-management/admin-group'
      },
      {
        name: 'Admin Management',
        link: '/users/user-management/admin'
      },
    ]
  },
  {
    name: 'Marketplace',
    link: '/users/marketplace',
    isActive: false,
    sub_modules: [
    ]
  },
  {
    name: 'Suppliers Hub',
    link: '/users/suppliers-hub',
    isActive: false,
    sub_modules: [
    ]
  },
  {
    name: 'User Logs',
    link: '/users/user-logs',
    isActive: false,
    sub_modules: [
      {
        name: 'Notifications',
        link: '/users/user-logs/notifications'
      },
      {
        name: 'Menu Trigger Logs',
        link: '/users/user-logs/menu-trigger-logs'
      },
      {
        name: 'Online Store Logs',
        link: '/users/user-logs/online-store-logs'
      },
    ]
  },
  {
    name: 'Add New HO',
    link: '/users/add-head-office',
    isActive: false,
    sub_modules: [
    ]
  },
  {
    name: 'Add Kitchen',
    link: '/users/add-kitchen',
    isActive: false,
    sub_modules: [
    ]
  },
  {
    name: 'Create Zone',
    link: '/users/create-zone',
    isActive: false,
    sub_modules: [
    ]
  },
  {
    name: 'Delete Outlets',
    link: '/users/delete-outlets',
    isActive: false,
    sub_modules: [
    ]
  },
  {
    name: 'Franchisee Management',
    link: '/users/franchisee-management',
    isActive: false,
    sub_modules: [
    ]
  },
  {
    name: 'Item out-of-stock tracking',
    link: '/users/out-of-stock-tracking',
    isActive: false,
    sub_modules: [
    ]
  },
  {
    name: 'Store status tracking dashboard',
    link: '/users/store-status-tracking-dashboard',
    isActive: false,
    sub_modules: [
    ]
  },
  {
    name: 'Help Manual',
    link: '/users/help-manual',
    isActive: false,
    sub_modules: [
    ]
  },
];

const Layout = ({ children }) => {

  const [allModules, setAllModules] = useState(modules_list)

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


    let temp = [...modules_list]

    temp.map((item, index) => {
      if (item.sub_modules.length > 0) {
        item.sub_modules.map((child, childIndex) => {
          if (child.link === asPath) {
            temp[index].isActive = true
            setAllModules(temp)
          }
        })
      }
      else {
        if (temp === asPath) {
          temp[index].isActive = true
        }
        setAllModules(temp)
      }
    })


  }, [asPath])

  const buttonRefs = useRef([])

  return (
    <div className="flex flex-col w-full relative min-h-screen">
      <div className="h-12 bg-white w-full fixed top-0 left-0 z-[10] px-5 flex items-center shadow justify-between">
        {/* <h1 className="lg:text-2xl text-xl font-bold italic text-red-700">
          RMS
        </h1> */}
        <Logo />

        <button
          onClick={() => Router.push('/users/login')}
          className="text-sm underline text-red-700 font-medium"
        >
          Logout
        </button>
      </div>

      <div className="pt-12 w-full flex flex-row h-full flex-shrink-0 relative">
        <div className="w-60 h-full bg-white flex-shrink-0 overflow-y-auto fixed top-0 pt-12 left-0 shadow z-[9]">
          <div className="flex flex-col w-full">
            {React.Children.toArray(
              allModules.map((item, index) => (
                <div className='flex flex-col w-full'>
                  <button
                    ref={(el) => (buttonRefs.current[index] = el)}
                    onClick={() => {
                      if (item.sub_modules.length > 0) {
                        let temp = [...modules_list]
                        temp[index].isActive = !temp[index].isActive
                        setAllModules(temp)
                      }
                      else {
                        Router.push(item.link)
                      }
                    }}
                    className={`h-[46px] w-full px-5 text-xs font-medium text-start relative ${item.link === asPath
                      ? 'text-red-700 bg-red-100'
                      : 'hover:bg-gray-200 text-[#121212]'
                      }`}
                  >
                    {item.name}

                    {
                      item.sub_modules.length > 0 && <div className='absolute top-0 right-5 h-full flex flex-col items-center justify-center'>
                        <Image width={12} height={12} src="/icons/accArrow.svg" alt="accArrow" className={`w-3 h-3 ${item.isActive ? '-rotate-180' : ''}`} />
                      </div>
                    }
                  </button>

                  {
                    item.isActive &&
                    <div className='w-full bg-slate-100'>
                      {item.sub_modules.map((child, childIndex) =>
                        <button
                          onClick={() => {
                            Router.push(child.link)
                          }}
                          className={`h-[46px] w-full px-5 text-xs font-medium text-start ${child.link === asPath
                            ? 'text-red-700 bg-red-100'
                            : 'hover:bg-gray-200 text-[#121212]'
                            }`}
                        >
                          <div className='flex items-center gap-2'>
                            <div className={`w-2 h-2 ${child.link === asPath ? 'bg-red-700' : 'bg-[#121212]/60'}  rounded-full`} />
                            {child.name}
                          </div>
                        </button>
                      )}
                    </div>
                  }

                </div>
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
