"use client";
import DashboardTitle from "@/app/utils/DashboardTiltle";
import ECBreadCrumb from "@/app/utils/ECBreadCrumb";
import { DataTable } from "@/components/DataTable/data-table";
import { useEffect, useState } from "react";
import { columns } from "@/components/Orders/columns";

const OrderListPage = () => {
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    fetch("https://next-backend-three.vercel.app/api/order/orders")
      .then((res) => res.json())
      .then((data) => setOrdersData(data?.data));
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/dashboard" },
    { label: "Order List", href: "/dashboard/order-list" },
  ];

  const options = [
    {
      label: "Delivered",
      value: "delivered",
    },
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Processing",
      value: "processing",
    },
    {
      label: "Cancel",
      value: "cancel",
    },
  ];

  return (
    <section className="relative ">
      <DashboardTitle title="Orders" />
      <ECBreadCrumb breadcrumbItems={breadcrumbItems} />

      <div className="mt-6 bg-white min-h-screen rounded-md">
        {/* orders list starts */}
        {ordersData?.length > 0 ? (
          <div className="container">
            <DataTable
              filterItem="invoice"
              filterPlaceHolder="Search by invoice no"
              options={options}
              placeholder="Status"
              selectItem="status"
              label="Status"
              columns={columns}
              data={ordersData}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
          </div>
        )}

        {/* orders list ends */}
      </div>
    </section>
  );
};

export default OrderListPage;
