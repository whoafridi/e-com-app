import React from "react";

const Header = () => {
  return (
    <header className="relative z-10 bg-white border-b border-gray border-solid py-5 px-8 pr-8">
      <div className="flex justify-between">
        <div className="flex items-center space-x-6 lg:space-x-0">
          <button type="button" className="block lg:hidden text-2xl text-black">
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H19"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M1 6H19"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M1 11H19"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>
          <div className="w-[30%] hidden md:block">
            <form action="#">
              <div className="w-[250px] relative">
                <input
                  className="input h-12 w-full pr-[45px]"
                  placeholder="Search Here..."
                  type="text"
                />
                <button className="absolute top-1/2 right-6 translate-y-[-50%] hover:text-theme">
                  <svg
                    className="-translate-y-[2px]"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M18.9999 19L14.6499 14.65"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-6">
          <div className="md:hidden">
            <button className="relative w-[40px] h-[40px] leading-[40px] rounded-md text-textBody border border-gray hover:bg-themeLight hover:text-theme hover:border-themeLight">
              <svg
                className="-translate-y-[2px]"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.9999 19L14.6499 14.65"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="relative">
            <div>
              <button className="relative w-[40px] h-[40px] leading-[40px] rounded-md text-gray border border-gray hover:bg-themeLight hover:text-theme hover:border-themeLight">
                <svg
                  className="-translate-y-[1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <g>
                    <path
                      stroke="currentColor"
                      d="M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z"
                    ></path>
                  </g>
                </svg>
                <span className="w-[20px] h-[20px] inline-block bg-danger rounded-full absolute -top-[4px] -right-[4px] border-[2px] border-white text-xs leading-[18px] font-medium text-white">
                  4
                </span>
              </button>
            </div>
          </div>
          <div className="relative w-[70%] flex justify-end items-center">
            <button className="relative" type="button">
              <span className="w-[12px] h-[12px] inline-block bg-green-500 rounded-full absolute -top-[4px] -right-[4px] border-[2px] border-white"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full bg-white p-10 z-50 transition-transform duration-300 md:hidden  -translate-y-[230px] lg:translate-y-[0]">
        <form action="#">
          <div className="relative mb-3">
            <input
              className="input h-12 w-full pr-[45px]"
              placeholder="Search Here..."
              type="text"
            />
            <button className="absolute top-1/2 right-6 translate-y-[-50%] hover:text-theme">
              <svg
                className="-translate-y-[2px]"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.9999 19L14.6499 14.65"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </form>
        <div className="">
          <span className="text-tiny mr-2">Keywords :</span>
          <a
            href="#"
            className="inline-block px-3 py-1 border border-gray6 text-tiny leading-none rounded-[4px] hover:text-white hover:bg-theme hover:border-theme"
          >
            Customer
          </a>
          <a
            href="#"
            className="inline-block px-3 py-1 border border-gray6 text-tiny leading-none rounded-[4px] hover:text-white hover:bg-theme hover:border-theme"
          >
            Product
          </a>
          <a
            href="#"
            className="inline-block px-3 py-1 border border-gray6 text-tiny leading-none rounded-[4px] hover:text-white hover:bg-theme hover:border-theme"
          >
            Orders
          </a>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full z-40 bg-black/70 transition-all duration-300   invisible opacity-0 "></div>
    </header>
  );
};

export default Header;
