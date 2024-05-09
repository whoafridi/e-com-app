"use client";
import DashboardTitle from "@/app/utils/DashboardTiltle";
import ECBreadCrumb from "@/app/utils/ECBreadCrumb";
import { DeleteIcon, Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


import { Button } from "@/components/ui/button";
import ECSelect from "@/app/utils/ECSelect";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { CrossCircledIcon, Pencil1Icon } from "@radix-ui/react-icons";

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

        {/* products list starts */}
        <div className="container">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">PRODUCT</TableHead>
                <TableHead>NAME</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>QTY</TableHead>
                <TableHead>PRICE</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://next-admin-bay.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fecommerce1999%2Fimage%2Fupload%2Fv1712739413%2Fnxbdig3r8ezy5kq0zfic.jpg&w=128&q=75"
                      alt="Photo by Drew Beamer"
                      height={40}
                      width={60}
                      style={{ height: "60px", width: "60px" }}
                      className="rounded-md object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">Product 1</TableCell>
                <TableCell>#00DCS</TableCell>
                <TableCell>12</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>
                  <Badge variant="secondary">Active</Badge>
                </TableCell>
                <TableCell >
                  <div className="flex items-center gap-2">
                    <div className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-green-600 text-white  rounded-md hover:bg-green-600 opacity-85 hover:opacity-100 transition duration-300 ">
                      <Pencil1Icon />
                    </div>
                    <div className="flex justify-center items-center w-10 h-10 leading-10 text-tiny hover:text-white  rounded-md hover:bg-red-600 transition duration-300">
                      <CrossCircledIcon />
                    </div>
                  </div>

                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Image
                    src="https://next-admin-bay.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fecommerce1999%2Fimage%2Fupload%2Fv1712739413%2Fnxbdig3r8ezy5kq0zfic.jpg&w=128&q=75"
                    alt="Photo by Drew Beamer"
                    height={40}
                    width={60}
                    style={{ height: "60px", width: "60px" }}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">Product 2</TableCell>
                <TableCell>#00DCS</TableCell>
                <TableCell>12</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>
                  <Badge variant="destructive">Inactive</Badge>
                </TableCell>
                <TableCell >
                  <div className="flex items-center gap-2">
                    <div className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-green-600 text-white  rounded-md hover:bg-green-600 opacity-85 hover:opacity-100 transition duration-300 ">
                      <Pencil1Icon />
                    </div>
                    <div className="flex justify-center items-center w-10 h-10 leading-10 text-tiny hover:text-white  rounded-md hover:bg-red-600 transition duration-300">
                      <CrossCircledIcon />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>


          {/* <div>
            <Pagination >
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div> */}



        </div>


        {/* products list ends */}

      </div>
    </section>
  );
};

export default Products;
