
"use client";
import { useState } from "react";
import { columns } from "./columns";
import { DataTable } from "../DataTable/data-table";


export default function DemoPage() {
    const [productsData, setProductsData] = useState([]);
    fetch("https://next-backend-three.vercel.app/api/products/all")
        .then(res => res.json())
        .then(data => setProductsData(data?.data));

    return (
        <div className="container mx-auto py-10">
            {/* <DataTable columns={columns} data={productsData} /> */}
        </div>
    );
}
