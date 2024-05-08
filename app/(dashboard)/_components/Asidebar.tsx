"use client";
import React, { useState } from "react";

import {
  Users,
  UserRoundPlus,
  NotebookPen,
  FilePlus2,
  LayoutDashboard,
  ChevronRight,
  FileInput,
  ListPlus,
  CalendarPlus,
  CalendarClock,
  CalendarFold,
  CalendarDays,
  CreditCard,
  NotepadText,
  SquarePen,
  Handshake,
  ScanBarcode,
  CalendarRange,
  Command,
  PlaneTakeoff,
  Split,
  CircleDollarSign,
  UserSearch,
  ShieldCheck,
  Settings,
  PackageSearch,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const Asidebar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(true);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState<number | null>(
    null
  );

  const handleSubMenuClick = (index: number) => {
    setActiveSubMenuIndex(index === activeSubMenuIndex ? null : index);
  };

  const menus = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      title: "Products",
      icon: <PackageSearch size={18} />,
      href: "#",
      subMenus: [
        {
          label: "Product List",
          href: "/product-list",
          icon: <Users size={18} />,
        },
        {
          label: "Add Product",
          href: "/add-product",
          icon: <UserRoundPlus size={18} />,
        },
      ],
    },
    {
      title: "Category",
      icon: <FileInput size={18} />,
      href: "#",
      subMenus: [
        {
          label: "Category List",
          href: "/",
          icon: <ListPlus size={18} />,
        },
        {
          label: "Add Category",
          href: "/",
          icon: <CalendarPlus size={18} />,
        },
      ],
    },
    {
      title: "Orders",
      icon: <CalendarClock size={18} />,
      href: "#",
      subMenus: [
        {
          label: "Order List",
          href: "/",
          icon: <CalendarDays size={18} />,
        },
        {
          label: "POS",
          href: "/",
          icon: <CalendarFold size={18} />,
        },
      ],
    },
    {
      title: "Brand",
      icon: <CreditCard size={18} />,
      href: "#",
    },
    {
      title: "Cupons",
      icon: <Handshake size={18} />,
      href: "#",
    },
    {
      title: "Settings",
      icon: <Settings size={18} />,
      href: "/settings",
    },
  ];

  return (
    <aside className="w-[300px] lg:w-[250px] xl:w-[300px] border-r border-gray overflow-y-auto fixed left-0 top-0 h-full bg-white z-50 transition-transform duration-300  -translate-x-[300px] lg:translate-x-[0] p-5">
      <div className="flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-96">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className={`duration-300`}>
            <svg
              id="logo-86"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="custom"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
                fill="#007DFC"
              ></path>
              <path
                className="ccustom"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z"
                fill="#007DFC"
              ></path>
            </svg>
          </span>
          <h1
            className={`text-slate-800 origin-left font-medium text-2xl duration-300`}
          >
            DashBoard
          </h1>
        </Link>
      </div>
      <ul className="pt-2">
        {menus &&
          menus.map((menu, index) => (
            <React.Fragment key={index}>
              <li
                key={index}
                className={` flex justify-between my-2 rounded-md p-2 cursor-pointer hover:bg-slate-600 text-slate-800 text-sm items-center gap-x-4 gap-3`}
                onClick={() => handleSubMenuClick(index)}
              >
                <Link
                  href={menu.href}
                  key={index}
                  className={`nav-link text-slate-800 flex items-center`}
                  onClick={() => handleSubMenuClick(index)}
                >
                  {menu.icon ? menu.icon : <LayoutDashboard size={18} />}
                  <span className={`text-base font-medium duration-300 ps-2`}>
                    {menu.title}
                  </span>
                </Link>
                {menu.subMenus && (
                  <ChevronRight
                    size={18}
                    onClick={() => handleSubMenuClick(index)}
                    className={`${
                      activeSubMenuIndex === index ? "rotate-90" : ""
                    }`}
                  />
                )}
              </li>
              {menu.subMenus && activeSubMenuIndex === index && (
                <ul className="ps-4">
                  {menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className={`select-none flex cursor-pointer text-center font-medium text-medium text-slate-800 py-2 hover:bg-slate-600 rounded-md my-1 
                      
                   `}
                    >
                      <Link
                        href={subMenuItem.href}
                        key={idx}
                        className={`nav-link text-light flex items-center`}
                      >
                        {subMenuItem.icon ? (
                          subMenuItem.icon
                        ) : (
                          <LayoutDashboard size={18} />
                        )}
                        <span
                          className={`text-base font-medium ps-2 duration-300 `}
                        >
                          {subMenuItem.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
      </ul>
    </aside>
  );
};
