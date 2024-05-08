"use client";
import "../../../globals.css";
import { Asidebar } from "../../_components/Asidebar";
import Header from "../../_components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tp-main-wrapper bg-slate-100 h-screen">
      <Asidebar />
      <div className="tp-main-content lg:ml-[250px] xl:ml-[300px] w-[calc(100% - 300px)]">
        <Header />
        <div className="body-content px-8 py-8 bg-slate-100">{children}</div>
      </div>
    </div>
  );
}
