"use client";
import DashboardTitle from "@/app/utils/DashboardTiltle";
import ECBreadCrumb from "@/app/utils/ECBreadCrumb";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DataTable } from "../DataTable/data-table";
import { columns } from "./columns";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  fetch("https://next-backend-three.vercel.app/api/products/all")
    .then(res => res.json())
    .then(data => setProductsData(data?.data));
  const breadcrumbItems = [
    { label: "Home", href: "/dashboard" },
    { label: "Product List", href: "/dashboard/product-list" },
  ];
  const options = [
    {
      label: "Active",
      value: 'active'
    },
    {
      label: "Inactive",
      value: 'inactive'
    }
  ];


  return (
    <section className="relative ">

      <DashboardTitle title="Product" />
      <ECBreadCrumb breadcrumbItems={breadcrumbItems} />

      <div className="mt-6 bg-white min-h-screen">
        <div className="container pt-4 flex justify-end gap-4">
          <Button>Add Product</Button>
        </div>

        {/* products list starts */}
        <div className="container">
          <DataTable filterItem="title" filterPlaceHolder="Search by product name" options={options} placeholder="Status" selectItem="status" label="Status" columns={columns} data={productsData} />
        </div>
        {/* products list ends */}

      </div>
    </section>
  );
};

export default Products;
