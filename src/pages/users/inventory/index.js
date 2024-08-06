import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

let links = [
  {
    name: "Dashboard",
    link: "/users/dashboard",
  },
  {
    name: "Outlet Type",
    link: "#",
  },
];

let dummy_data = [
  {
    kitchen_name: "CHAI FAST [id:1234]",
    type: "type1",
    state: "Karnataka",
    city: "Bengaluru",
    outlet_type: "out_type_1",
  },
  {
    kitchen_name: "CHAI FAST [id:1234]",
    type: "type1",
    state: "Karnataka",
    city: "Bengaluru",
    outlet_type: "out_type_1",
  },
  {
    kitchen_name: "CHAI FAST [id:1234]",
    type: "type1",
    state: "Karnataka",
    city: "Bengaluru",
    outlet_type: "out_type_1",
  },
  {
    kitchen_name: "CHAI FAST [id:1234]",
    type: "type1",
    state: "Karnataka",
    city: "Bengaluru",
    outlet_type: "out_type_1",
  },
  {
    kitchen_name: "CHAI FAST [id:1234]",
    type: "type1",
    state: "Karnataka",
    city: "Bengaluru",
    outlet_type: "out_type_1",
  },
  {
    kitchen_name: "CHAI FAST [id:1234]",
    type: "type1",
    state: "Karnataka",
    city: "Bengaluru",
    outlet_type: "out_type_1",
  },
  {
    kitchen_name: "CHAI FAST [id:1234]",
    type: "type1",
    state: "Karnataka",
    city: "Bengaluru",
    outlet_type: "out_type_1",
  },

];

const Inventory = () => {
  return (
    <Layout>
      <Head>
        <title>Inventory</title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />
        <div className="flex flex-col p-5 w-full">
          <div className="flex flex-col w-full h-20 bg-white items-end justify-center px-4">

            <button className="p-2 text-xs px-7 rounded-lg border border-[#C0C0C0] text-[#121212] font-medium">Save</button>

          </div>
          <div className="flex flex-col h-12 w-full px-5">

            <div className="grid grid-cols-5 gap-5 items-center h-full">

              {
                React.Children.toArray([
                  "Restaurant/Kitchen",
                  "Type",
                  "State",
                  "City",
                  "Outlet Type"
                ].map((item) => (
                  <p className="text-xs text-[#121212] font-medium">{item}</p>
                )))
              }

            </div>

          </div>

          <div className="flex flex-col bg-white">
            {
              React.Children.toArray(dummy_data.map(item => (
                <div className="grid grid-cols-5 gap-5 items-center h-full last:border-none border-b border-[#C0C0C0] p-4">
                  <p className="text-xs text-[#121212]">{item?.kitchen_name}</p>
                  <p className="text-xs text-[#121212]">{item?.type}</p>
                  <p className="text-xs text-[#121212]">{item?.state}</p>
                  <p className="text-xs text-[#121212]">{item?.city}</p>
                  <p className="text-xs text-[#121212]">{item?.outlet_type}</p>
                </div>
              )))
            }
          </div>
          <div className="flex flex-col w-full h-20 bg-red-50 items-end justify-center px-4">

            <button className="p-2 text-xs px-7 rounded-lg  text-white bg-red-700 font-medium">Save</button>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Inventory;

export async function getStaticProps() {
  let data = {};
  return {
    props: {
      data: data,
    },
  };
}
