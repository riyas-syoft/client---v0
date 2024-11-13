"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = ({ isSidebarOpen, toggleSidebar,profileOpen,toggleProfileBar,toggleUpgradePlan}: any) => {
  return (
    <div>
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          aria-controls="separator-sidebar"
          type="button"
          className="p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 fixed top-0 left-0 z-50"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <aside  onClick={() => profileOpen && toggleProfileBar()}
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40  h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-14"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
          <ul className="space-y-2 font-medium">
            <li className="flex flex-row justify-between">
              <Image
                width={20}
                height={20}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/976px-Apple_logo_black.svg.png?20220821121934"
                alt="Logo"
              />

              {isSidebarOpen && (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  stroke="black"
                  onClick={toggleSidebar}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </li>
            {/* Add other sidebar items here */}
          </ul>

          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-white dark:border-gray-700">
            <li className=" rounded-md">
              <Link href="/chat">
                {!isSidebarOpen ? (
                  <svg
                    className="w-6 h-6 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16M4 12h16"
                    />
                  </svg>
                ) : (
                  <div className="border border-gray-200 bg-white p-2 shadow-lg text-black rounded-2xl">
                    New Chat
                  </div>
                )}
              </Link>
            </li>
          </ul>
          <div className="flex flex-col fixed bottom-5 w-full">
            <>
              {!isSidebarOpen && (
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/collapse-2511427-2103355.png?f=webp&w=512"
                  alt="Collapse Icon"
                  className={`h-6 w-6 ml-2 hidden lg:flex`}
                  onClick={toggleSidebar}
                />
              )}
              <div
                className="flex flex-row"
                onClick={() => toggleProfileBar()}
              >
                <img
                  className={` mt-5 h-10 w-10  ${
                    isSidebarOpen ? "flex" : "hidden"
                  } md:flex`}
                  src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                  alt="profile icon"
                />
                {isSidebarOpen && (
                  <div className="flex flex-row justify-between w-full">
                    <h5 className="mt-7">Klen Mack</h5>
                    <svg className="mt-7 w-6 h-6 mr-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L128 370.7 128 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 306.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96zm352-333.3c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L448 141.3 448 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-306.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96z"/></svg>
                  </div>
                )}
              </div>
            </>
          </div>
        </div>
      </aside>
      {profileOpen && (
        <div className="fixed bottom-0 left-0 m-4 max-w-sm z-50">
          <div className="rounded-lg border bg-white px-8 pt-8 pb-5 shadow-lg">
            <p className="text-gray-400 text-start">sample@gmail.com</p>
           <div className="flex gap-2">
           <img
                  className={` mt-3 h-10 w-10 lg:flex`}
                  src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                  alt="profile icon"
                />
            <h1 className="mt-3 my-1 text-center text-xl font-bold leading-8 text-gray-900">
            Klen Mack
            </h1>
           </div>
            <ul className="mt-3 divide-y rounded  py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
              <li className="flex items-center py-3 text-sm">
                <span>Billing</span>
               
              </li>
              <li className="flex items-center py-3 text-sm">
                <span>Sign Out</span>
              </li>
            </ul>
            <ul className="mt-3 divide-y rounded  py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
              <li className="flex items-center py-3 text-sm">
                <span>Theme</span>
               
              </li>
              <li className="flex items-center py-3 text-sm">
                <span>Language</span>
              </li>
            </ul>
            <button onClick={()=>toggleUpgradePlan()} className="bg-black text-white w-full rounded-md p-3 mt-2">Upgrade Plan</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
