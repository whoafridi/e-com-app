"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DataTableColumnHeader } from "@/components/ui/columnHeader";
import { ColumnDef } from "@tanstack/react-table";
import ECSelect from "@/app/utils/ECSelect";
import { Eye, Printer } from "lucide-react";
import { Badge } from "../ui/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  _id: string;
  invoice: string;
  cart: string;
  user: string;
  status: "active" | "inactive";
  totalAmount: number;
  updatedAt: string;
};

type user = {
  name: string;
};

type cart = {
  orderQuantity: number;
};

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

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "invoice",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice No" />
    ),
    cell: ({ row }) => {
      return <div>{`#${row.getValue("invoice")}`}</div>;
    },
  },
  {
    accessorKey: "cart",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="QTY" />
    ),
    cell: ({ row }) => {
      const cart: cart[] = row.getValue("cart");
      const qty = cart
        .map((e) => e.orderQuantity)
        .reduce((acc, cur) => acc + cur, 0);
      return <div>{qty}</div>;
    },
  },

  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      const date: string = row.getValue("updatedAt");
      return <div>{date.slice(0, 10)}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return <Badge variant="destructive">{row.getValue("status")}</Badge>;
    },
  },
  {
    accessorKey: "user",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User" />
    ),
    cell: ({ row }) => {
      const user: user = row.getValue("user");
      return <div>{user.name}</div>;
    },
  },
  {
    accessorKey: "totalAmount",
    header: () => <div>Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));
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
          <ECSelect options={options} placeholder="Select" />
        </div>
      );
    },
  },
  {
    accessorKey: "Invoice",
    header: () => <div>Invoice</div>,
    cell: ({ row }) => {
      // Function to handle printing
      const handlePrint = () => {
        console.log("Print action triggered for row:", row);
      };

      // Function to handle viewing
      const handleView = () => {
        console.log("View action triggered for row:", row);
      };

      return (
        <div>
          <>
            <div className="flex items-center gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-gray-300 text-white  rounded-md hover:bg-gray-400 opacity-85 hover:opacity-100 transition duration-300"
                      onClick={handlePrint}
                    >
                      <Printer color="#000" size={18} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Print</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className="flex justify-center items-center w-10 h-10 leading-10 text-tiny bg-gray-300 text-white  rounded-md hover:bg-gray-400 opacity-85 hover:opacity-100 transition duration-300"
                      onClick={handleView}
                    >
                      <Eye color="#000" size={18} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </>
        </div>
      );
    },
  },
];
