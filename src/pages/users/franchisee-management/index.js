import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import Secondarybtn from "@/components/Secondarybtn";
import Ternarybtn from "@/components/Ternarybtn";

let links = [
  {
    name: "Dashboard",
    link: "/users/dashboard",
  },
  {
    name: "Franchisee Management",
    link: "#",
  },
];

const dummy_data = Array.from({ length: 5 }, (v, i) => ({
  outlet: `Restaurant ${i + 1}`,
  ref_id: 1234 + i,
}));


const FranchiseeManagement = () => {
  return (
    <Layout>
      <Head>
        <title>Franchisee Management | RMS </title>
      </Head>
      <div className="w-full h-full flex flex-col flex-shrink-0">
        <Breadcrumb links={links} />
        <div className="flex flex-col p-5 w-full">
          <div className="flex flex-row w-full h-20 bg-white items-center gap-4 justify-start px-4">

            <input placeholder="Name" className="p-2 text-xs px-3 outline-none bg-white border border-[#808080]/40 rounded-lg" />
            <input placeholder="Ref id" className="p-2 text-xs px-3 outline-none bg-white border border-[#808080]/40 rounded-lg" />

            <Ternarybtn label="Search" />
            <Secondarybtn label="Show All" />


          </div>
          <div className="flex flex-col h-12 w-full px-5 bg-gray-200">

            <div className="grid grid-cols-3 gap-5 items-center h-full ">

              {
                React.Children.toArray([
                  "Outlet",
                  "Ref Id",
                  "Actions"
                ].map((item) => (
                  <p className="text-xs text-[#121212] font-medium">{item}</p>
                )))
              }

            </div>

          </div>

          <div className="flex flex-col bg-white">
            {
              React.Children.toArray(dummy_data.map(item => (
                <div className="grid grid-cols-3 gap-5 items-center h-full last:border-none border-b border-[#C0C0C0] p-4">
                  <p className="text-xs text-[#121212]">{item?.outlet}</p>
                  <p className="text-xs text-[#121212]">{item?.ref_id}</p>
                  <div>
                    <Ternarybtn label="Lock" />
                  </div>

                </div>
              )))
            }
          </div>
          <div className="flex flex-col w-full h-12 bg-red-50 items-start justify-center px-4">

            <p className="text-[#121212] text-xs font-medium">Showing {dummy_data.length} out of {dummy_data.length} results</p>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FranchiseeManagement;

export async function getServerSideProps() {
  let data = {};
  return {
    props: {
      data: data,
    },
  };
}
