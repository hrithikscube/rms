import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

let links = [
  {
    name: "Home",
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
          <div className="flex flex-col w-full h-20 bg-white"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Inventory;

export async function getServerSideProps() {
  let data = {};
  return {
    props: {
      data: data,
    },
  };
}
