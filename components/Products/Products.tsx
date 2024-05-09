"use client";
import DashboardTitle from "@/app/utils/DashboardTiltle";
import ECBreadCrumb from "@/app/utils/ECBreadCrumb";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

import { Button } from "@/components/ui/button";
import ECSelect from "@/app/utils/ECSelect";

const Products = () => {
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

        {/* search & filter starts */}
        <div className="container py-8 flex flex-wrap gap-2 justify-between">

          <div className="relative  flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by product name"
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>

          <div className="flex items-center gap-4">
            <ECSelect options={options} label="Status" placeholder="Select status" />
            <Button>Add Product</Button>
          </div>


        </div>
        {/* search & filter ends */}

      </div>
    </section>
  );
};

export default Products;
