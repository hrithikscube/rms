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
        link: '/users/orders-and-billing/all-orders',
        isActive: false,
      },
      {
        name: 'Online Orders',
        link: '/users/orders-and-billing/online-orders',
        isActive: false,

      },
      {
        name: 'KOT',
        link: '/users/orders-and-billing/kot',
        isActive: false,

      },
      {
        name: 'Due Payment Settlement',
        link: '/users/orders-and-billing/due-payment-settlement',
        isActive: false,

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
        link: '/users/tables/running-orders',
        isActive: false,

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
        link: '/users/menu-management/menu-and-discounts',
        isActive: false,

      },
      {
        name: 'Online Menu on/off',
        link: '/users/menu-management/menu-on-off',
        isActive: false,

      },
      {
        name: 'Special Note',
        link: '/users/menu-management/special-note',
        isActive: false,

      },
      {
        name: 'Set Item Commission',
        link: '/users/menu-management/set-item-commission',
        isActive: false,

      },
      {
        name: 'Schedule Changes',
        link: '/users/menu-management/schedule-changes',
        isActive: false,
      },
    ]
  },
  {
    name: 'Inventory',
    link: '/users/inventory',
    isActive: false,
    sub_modules: [
      {
        name: 'Inventory Dashboard',
        link: '/users/inventory/inventory-dashboard',
        isActive: false,
      },
      {
        name: 'Raw Materials',
        link: '/users/inventory/raw-materials',
        isActive: false,
      },
      {
        name: 'Item Recipes',
        link: '/users/inventory/item-recipes',
        isActive: false,
      },
      {
        name: 'Closing Stock',
        link: '/users/inventory/closing-stock',
        isActive: false,
      },
      {
        name: 'Suppliers',
        link: '/users/inventory/suppliers',
        isActive: false,
      },
      {
        name: 'Purchase',
        link: '/users/inventory/purchase',
        isActive: false,
      },
      {
        name: 'Consumption',
        link: '/users/inventory/consumption',
        isActive: false,
      },
      {
        name: 'Conversion',
        link: '/users/inventory/conversion',
        isActive: false,
      },
      {
        name: 'Report',
        link: '/users/inventory/report',
        isActive: false,
      },
      {
        name: 'Units',
        link: '/users/inventory/units',
        isActive: false,
      },
      {
        name: 'Inventory Settings',
        link: '/users/inventory/settings',
        isActive: false,
      },
    ]
  },
  {
    name: 'CRM',
    link: '/users/crm',
    isActive: false,
    sub_modules: [
      {
        name: 'Marketing',
        link: '/users/crm/marketing',
        isActive: false,

      },
      {
        name: 'Customers',
        link: '/users/crm/customers',
        isActive: false,

      },
      {
        name: 'Campaign',
        link: '/users/crm/campaign',
        isActive: false,

      },
      {
        name: 'Feedback',
        link: '/users/crm/feedback',
        isActive: false,

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
        link: '/users/accounting/payments',
        isActive: false,

      },
      {
        name: 'Online Order Reconciliation',
        link: '/users/accounting/online-order-reconciliation',
        isActive: false,

      },
      {
        name: 'GST Information',
        link: '/users/accounting/gst-information',
        isActive: false,

      },
      {
        name: 'Bank Details',
        link: '/users/accounting/bank-details',
        isActive: false,

      },
      {
        name: 'KYC Details',
        link: '/users/accounting/kyc-details',
        isActive: false,

      },
      {
        name: 'Utility Bill',
        link: '/users/accounting/utility-bill',
        isActive: false,

      },
      {
        name: 'Expenses & Withdrawal',
        link: '/users/accounting/expenses-and-withdrawal',
        isActive: false,

      },
      {
        name: 'Service Payment History',
        link: '/users/accounting/service-payment-history',
        isActive: false,

      },
      {
        name: 'Agreement Information',
        link: '/users/accounting/agreement-information',
        isActive: false,

      },
      {
        name: 'Loan Information',
        link: '/users/accounting/loan-information',
        isActive: false,

      },
      {
        name: 'Denomination',
        link: '/users/accounting/denomination',
        isActive: false,

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
        link: '/users/reports/day-end-summary',
        isActive: false,

      },
      {
        name: 'Other Reports',
        link: '/users/reports/other-reports',
        isActive: false,

      },
      {
        name: 'Report Notifications',
        link: '/users/reports/report-notifications',
        isActive: false,

      },
      {
        name: 'Delivery Management',
        link: '/users/reports/delivery-management',
        isActive: false,

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
        link: '/users/configuration/sub-order-type',
        isActive: false,

      },
      {
        name: 'Remove Orders',
        link: '/users/configuration/remove-orders',
        isActive: false,

      },
      {
        name: 'Delivery Distance',
        link: '/users/configuration/delivery-distance',
        isActive: false,

      },
      {
        name: 'Outlet Configuration',
        link: '/users/configuration/outlet-configuration',
        isActive: false,

      },
      {
        name: 'Marketplace Settings',
        link: '/users/configuration/marketplace-settings',
        isActive: false,

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
        link: '/users/user-management/biller-group',
        isActive: false,

      },
      {
        name: 'Admin Group Management',
        link: '/users/user-management/admin-group',
        isActive: false,

      },
      {
        name: 'Admin Management',
        link: '/users/user-management/admin',
        isActive: false,

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
        link: '/users/user-logs/notifications',
        isActive: false,

      },
      {
        name: 'Menu Trigger Logs',
        link: '/users/user-logs/menu-trigger-logs',
        isActive: false,

      },
      {
        name: 'Online Store Logs',
        link: '/users/user-logs/online-store-logs',
        isActive: false,

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

  const updateActiveState = (modules) => {
    return modules.map((module) => {
      const isActive = module.link === asPath || module.sub_modules.some(sub => sub.link === asPath);
      const updatedSubModules = module.sub_modules.map((sub) => ({
        ...sub,
        isActive: sub.link === asPath,

      }));
      return {
        ...module,
        isActive,
        sub_modules: updatedSubModules,
      };
    });
  };

  useEffect(() => {
    setAllModules(updateActiveState(modules_list));
  }, [asPath]);

  useEffect(() => {

    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const activeIndex = modules_list.findIndex((item) => item.link === asPath)
      if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
        setTimeout(() => {
          buttonRefs.current[activeIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }, 300) // Delay in milliseconds (e.g., 300ms)
      }
    }

  }, [asPath])

  const buttonRefs = useRef([])

  const [showMenu, setShowMenu] = useState(false)

  const [lmenu, setLMenu] = useState(false)

  return (
    <div className="flex flex-col w-full relative min-h-screen">
      <div className="h-12 bg-white w-full fixed top-0 left-0 z-[10] lg:px-5 px-4 flex items-center shadow justify-between">
        <div className='invert'>
          <Logo />
        </div>

        <div className='flex flex-row items-center gap-4'>
          <button
            onClick={
              () => {
                setShowMenu(!showMenu)
              }
            }
            className="lg:hidden block"
          >
            <Image width={28} height={28} src="/icons/burger.svg" alt="burger" className="w-7 h-7" />
          </button>

          <button
            onClick={() => {
              setLMenu(!lmenu)
            }}
            className="text-sm text-white font-medium relative"
          >
            <div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-[#121212]'>
              A
            </div>

            {
              lmenu && <div className='w-40 bg-blue-50 absolute top-10 shadow-xl right-0 overflow-hidden'>

                {
                  React.Children.toArray(["Edit Profile", "Logout"].map(item => (
                    <button
                      onClick={() => {
                        if (item === 'Logout') {
                          Router.push('/users/login')
                        }
                        setLMenu(false)
                      }}
                      className='text-xs py-2 text-[#121212] hover:bg-blue-500 hover:text-white w-full text-start px-3'>
                      <p>{item}</p>
                    </button>
                  )))
                }

              </div>
            }
          </button>
        </div>

      </div>

      <div className="w-full flex flex-row h-full flex-shrink-0 relative">
        <div className={`lg:w-60 ${showMenu ? 'flex flex-col' : 'lg:flex flex-col hidden'} w-full h-full bg-[#121212] flex-shrink-0 overflow-y-auto fixed top-0 left-0 shadow z-[10]`}>
          <div className='flex items-center justify-start lg:justify-center h-12 flex-shrink-0 lg:pl-0 pl-4'>
            <Logo />
          </div>

          <div className="flex flex-col w-full">
            {React.Children.toArray(
              allModules.map((item, index) => (
                <div className='flex flex-col w-full'>
                  <button
                    ref={(el) => (buttonRefs.current[index] = el)}
                    onClick={() => {
                      if (!item.isActive) {
                        if (item.sub_modules.length > 0) {
                          let temp = [...modules_list]
                          temp[index] = {
                            ...temp[index],
                            isActive: true
                          }
                          setAllModules(temp)
                        }
                        else {
                          Router.push(item.link)
                          setShowMenu(false)
                        }
                      }
                    }}
                    className={`h-[46px] w-full px-5 text-xs font-medium text-start relative ${item.isActive
                      ? item.sub_modules.length > 0 ? 'text-white bg-[#27272A]' : 'text-white bg-blue-600'
                      : 'text-white'
                      }`}
                  >
                    {item.name}

                    {
                      item.sub_modules.length > 0 && <div className='absolute top-0 right-5 h-full flex flex-col items-center justify-center'>
                        <Image width={12} height={12} src="/icons/accArrow.svg" alt="accArrow" className={`w-3 h-3 invert ${item.isActive ? '-rotate-180' : ''}`} />
                      </div>
                    }
                  </button>

                  <div className={`w-full bg-[#27272A] ${item.isActive ? 'block' : 'hidden'}`}>
                    {React.Children.toArray(item.sub_modules.map((child, childIndex) =>
                      <button
                        onClick={() => {
                          Router.push(child.link)
                          setShowMenu(false)
                        }}
                        className={`h-[46px] w-full px-5 text-xs font-medium text-start ${child.isActive
                          ? 'text-white bg-blue-600'
                          : 'text-white'
                          }`}
                      >
                        <div className='flex items-center gap-2'>
                          <div className={`w-2 h-2 ${child.isActive ? 'bg-white' : 'bg-[#808080]/50'}  rounded-full`} />
                          {child.name}
                        </div>
                      </button>
                    ))}
                  </div>

                </div>
              )),
            )}
          </div>
        </div>

        <div className="lg:ml-60 w-full min-h-screen flex flex-col bg-[#f2f2f2] pt-12">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
