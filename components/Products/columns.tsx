"use client";
import { CrossCircledIcon, Pencil1Icon } from "@radix-ui/react-icons";

import { DataTableColumnHeader } from "@/components/ui/columnHeader";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  _id: string;
  sku: string;
  title: string;
  image: string;
  status: "active" | "inactive";
  price: number;
  quantity: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={product?.image}
                alt={product?.title}
                height={40}
                width={60}
                style={{ height: "60px", width: "60px" }}
                className="rounded-md object-cover"
              />
            </div>
            <span>{product?.title}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "sku",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SKU" />
    ),
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="QTY" />
    ),
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },

  {
    accessorKey: "price",
    header: () => <div>Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },

  {
    accessorKey: "Action",
    header: () => <div>Action</div>,
    cell: ({ row }) => {
      return (
        <div>
          <>
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-green-600 text-white  rounded-md hover:bg-green-600 opacity-85 hover:opacity-100 transition duration-300 ">
                <Pencil1Icon />
              </div>
              <div className="flex justify-center items-center w-10 h-10 leading-10 text-tiny hover:text-white  rounded-md hover:bg-red-600 transition duration-300">
                <CrossCircledIcon />
              </div>
            </div>
          </>
        </div>
      );
    },
  },
];
