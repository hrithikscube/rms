import Layout from '@/components/Layout'
import React from 'react'


let dashboard_stats = [
    {
        title: 'Total Sales',
        value: 12403.00,
        info: 'Total Sales of 7 outlets'
    },
    {
        title: 'Net Sales',
        value: 11928.00,
        info: 'Net Sales of 7 outlets'
    },

    {
        title: 'No. of Orders',
        value: 123,
        info: 'No. of invoices generated'
    },

    {
        title: 'Expenses',
        value: 0.00,
        info: 'Expenses Recorded'
    },
    {
        title: 'Cash Collection',
        value: 9232.00,
        info: '75.15% of total sales has been collected via cash (excluding online orders)'
    },
    {
        title: 'Online Sales',
        value: 189.00,
        info: '1.52% of sales generated from Online'
    },
    {
        title: 'Taxes',
        value: 445.00,
        info: 'Taxes recorded on POS'
    },
    {
        title: 'Discounts',
        value: 180.00,
        info: ' 1.48% of My Amount'
    },

]

let dummy_data = [
    {
        orders: 10,
        sales: 100,
        net_sales: 120,
        tax: 18,
        discount: 20,
        modified: 0,
        re_printed: 0,
        waived_off: 0,
        round_off: 11,
        charges: 0
    },
    {
        orders: 15,
        sales: 200,
        net_sales: 220,
        tax: 36,
        discount: 25,
        modified: 1,
        re_printed: 1,
        waived_off: 1,
        round_off: 10,
        charges: 5
    },
    {
        orders: 8,
        sales: 150,
        net_sales: 170,
        tax: 27,
        discount: 10,
        modified: 0,
        re_printed: 2,
        waived_off: 0,
        round_off: 8,
        charges: 3
    },
    {
        orders: 12,
        sales: 180,
        net_sales: 210,
        tax: 32,
        discount: 15,
        modified: 0,
        re_printed: 0,
        waived_off: 0,
        round_off: 9,
        charges: 2
    },
    {
        orders: 20,
        sales: 250,
        net_sales: 280,
        tax: 45,
        discount: 30,
        modified: 1,
        re_printed: 0,
        waived_off: 0,
        round_off: 12,
        charges: 0
    },
    {
        orders: 5,
        sales: 120,
        net_sales: 130,
        tax: 21,
        discount: 5,
        modified: 0,
        re_printed: 1,
        waived_off: 0,
        round_off: 6,
        charges: 1
    },
    {
        orders: 18,
        sales: 300,
        net_sales: 330,
        tax: 54,
        discount: 20,
        modified: 1,
        re_printed: 0,
        waived_off: 0,
        round_off: 14,
        charges: 4
    },
    {
        orders: 7,
        sales: 140,
        net_sales: 160,
        tax: 24,
        discount: 10,
        modified: 0,
        re_printed: 2,
        waived_off: 1,
        round_off: 7,
        charges: 0
    },
    {
        orders: 10,
        sales: 170,
        net_sales: 190,
        tax: 28,
        discount: 15,
        modified: 0,
        re_printed: 1,
        waived_off: 0,
        round_off: 9,
        charges: 3
    },
    {
        orders: 13,
        sales: 220,
        net_sales: 250,
        tax: 40,
        discount: 25,
        modified: 1,
        re_printed: 0,
        waived_off: 0,
        round_off: 10,
        charges: 2
    }
];

const Dashboard = () => {
    return (
        <Layout>
            <div className='w-full h-full flex flex-col flex-shrink-0  pb-5'>

                <div className='w-full h-14 flex items-center justify-between px-5 bg-white shadow'>
                    <p className='text-sm font-medium text-[#121212]'>Outlet Statistics</p>

                    <div className='flex items-center gap-5'>
                        <p className='text-sm font-medium text-[#121212]'>Export Data</p>
                        <p className='text-sm font-medium text-[#121212]'>Create Zone</p>
                        <p className='text-sm font-medium text-[#121212]'>Date</p>
                    </div>
                </div>


                <div className='lg:p-6 flex flex-row w-full gap-5 items-start'>

                    <div className='lg:w-8/12 grid grid-cols-4 gap-5 items-start'>

                        {React.Children.toArray(dashboard_stats.map(item => (
                            <div className='min-h-40 rounded-lg shadow-xl bg-white p-4 flex flex-col items-start justify-between text-start'>
                                <p className='text-sm text-[#121212] font-medium'>{item?.title}</p>

                                <p className='text-base font-semibold'>{item.value}</p>
                                <p className='text-xs'>{item.info}</p>
                            </div>
                        )))}

                    </div>

                    <div className='lg:w-4/12 grid gap-5'>

                        {React.Children.toArray(
                            [1, 2].map(item => (
                                <div className='min-h-40 rounded-lg shadow-xl bg-white'>
                                </div>
                            ))
                        )}

                    </div>

                </div>


                <div className='flex flex-col gap-4 px-6'>
                    <h2 className='lg:text-xl text-lg font-semibold'>Zone Wise Statistics</h2>

                    <div className='flex flex-col w-full'>
                        <div className='grid grid-cols-10 bg-white/60 py-3 px-4 border-y border-[#808080]/20'>
                            {
                                React.Children.toArray(["Orders", "Sales", "Net Sales", "Tax", "Discount", "Modified", "Re-Printed", "Waived Off", "Round Off", "Charges"]
                                    .map(item => (
                                        <div className='text-xs text-[#121212] font-medium'>
                                            {item}
                                        </div>
                                    )))
                            }
                        </div>

                        {
                            React.Children.toArray(dummy_data.map(item => (
                                <div className='grid grid-cols-10 bg-white py-3 px-4 border-b border-[#808080]/20'>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.orders}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.sales}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.net_sales}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.tax}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.discount}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.modified}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.re_printed}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.waived_off}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.round_off}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.charges}
                                    </div>
                                </div>
                            )))
                        }

                    </div>

                </div>

                <div className='flex flex-col gap-4 px-6 pt-6'>
                    <h2 className='lg:text-xl text-lg font-semibold'>Outlets Wise Statistics</h2>

                    <div className='flex flex-col w-full'>
                        <div className='grid grid-cols-10 bg-white/60 py-3 px-4 border-y border-[#808080]/20'>
                            {
                                React.Children.toArray(["Orders", "Sales", "Net Sales", "Tax", "Discount", "Modified", "Re-Printed", "Waived Off", "Round Off", "Charges"]
                                    .map(item => (
                                        <div className='text-xs text-[#121212] font-medium'>
                                            {item}
                                        </div>
                                    )))
                            }
                        </div>

                        {
                            React.Children.toArray(dummy_data.map(item => (
                                <div className='grid grid-cols-10 bg-white py-3 px-4 border-b border-[#808080]/20'>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.orders}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.sales}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.net_sales}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.tax}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.discount}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.modified}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.re_printed}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.waived_off}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.round_off}
                                    </div>
                                    <div className='text-xs text-[#121212] font-medium'>
                                        {item.charges}
                                    </div>
                                </div>
                            )))
                        }

                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Dashboard