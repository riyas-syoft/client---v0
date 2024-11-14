"use client";
import React, { useState } from "react";
import { StepList } from "./StepList";
import CommonModal from "@/components/CommonModal";

interface BluetoothConnectionGuideProps {
  title: string;
  subtitle: string;
  isSidebarOpen: boolean;
  steps: Array<{
    title: string;
    description: string;
    subSteps?: string[];
  }>;
}

export const BluetoothConnectionGuide: React.FC<
  BluetoothConnectionGuideProps
> = ({ title, subtitle, steps, isSidebarOpen }) => {
  const [showPopup, setshowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <article className="p w-full mt-2 text-center h-full flex overflow-hidden flex-col items-center py-2.5 pr-5 pl-2 text-black bg-white justify-center">
      <div
        onClick={() => showPopup && setshowPopup(!showPopup)}
        className={`${
          isSidebarOpen ? "lg:ml-64 ml-10" : "md:ml-20 ml-10"
        } flex   mt-10 lg:mt-0 text-center  flex-wrap gap-5 justify-between  md:justify-center lg:justify-between self-stretch w-full max-md:max-w-full`}
      >
        <nav className="flex gap-1 md:gap-5 self-start w-full mr-5 md:mr-20 md:justify-between">
          <div className="flex  md:gap-5">
            <span
              className="text-sm md:text-md cursor-pointer"
              onClick={() => {
                return (
                  toggleModal(),
                  setDesc("Bluetooth connection Windows"),
                  setHeading("Rename Chat")
                );
              }}
            >
              <span className="hidden lg:flex">Bluetooth connection windows</span>
              <span className="flex lg:hidden">Bluetooth connection</span>
            </span>
            <span
              onClick={() => {
                return (
                  toggleModal(),
                  setDesc("Private or Public"),
                  setHeading("Share Chat")
                );
              }}
              className="text-sm ml-2 flex cursor-pointer  font-extralight pt-1  rounded-2xl bg-white md:border border-gray-300"
            >
              <svg
                className="w-6 h-6 text-gray-800 lg:ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path
                  fillRule="evenodd"
                  d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mr-5  hidden md:flex">Private</span>
            </span>
          </div>
          <div className="flex gap-1 lg:gap-5">
            <svg
              onClick={() => {
                return (
                  toggleModal(),
                  setDesc("Private or Public"),
                  setHeading("Share Chat")
                );
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-share cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-three-dots text-black ml-auto"
              viewBox="0 0 16 16"
              onClick={() => setshowPopup(!showPopup)}
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>
            {showModal && (
              <CommonModal
                heading={heading}
                Desc={desc}
                toggleModal={toggleModal}
                showModal={showModal}
              />
            )}
            {showPopup && (
              <>
                <div
                  id="select-modal"
                  tabIndex={1}
                  aria-hidden={!showPopup}
                  className={`${
                    showPopup ? "block" : "hidden"
                  } overflow-y-auto overflow-x-hidden mt-14  fixed top-0 right-0 z-50 justify-center items-start w-[250px] h-[calc(100%-1rem)] max-h-full`}
                >
                  <div className="relative  w-full max-w-md max-h-full ">
                    <div className="relative bg-white rounded-lg shadow border border-gray-200">
                      <div className="flex items-center justify-between  "></div>
                      <div className="">
                        <ul className="space-y-0">
                          <li>
                            <input
                              type="radio"
                              id="job-1"
                              name="job"
                              value="job-1"
                              className="hidden peer"
                              required
                            />
                            <label
                              htmlFor="job-1"
                              onClick={() => {
                                return (
                                  toggleModal(),
                                  setDesc("Bluetooth connection Windows"),
                                  setHeading("Rename Chat")
                                );
                              }}
                              className="inline-flex items-center justify-between w-full p-5 text-black bg-white rounded-lg cursor-pointer dark:hover:bg-gray-300 "
                            >
                              <div className="block">
                                <div className="w-full text-sm">Rename</div>
                              </div>
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="job-2"
                              name="job"
                              value="job-2"
                              className="hidden peer"
                            />
                            <label
                              htmlFor="job-2"
                              className="inline-flex items-center justify-between w-full p-5 text-black bg-white rounded-lg cursor-pointer dark:hover:bg-gray-300 "
                            >
                              <div className="block">
                                <div className="w-full text-sm">Favorite</div>
                              </div>
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="job-3"
                              name="job"
                              value="job-3"
                              className="hidden peer"
                            />
                            <label
                              htmlFor="job-3"
                              onClick={() => {
                                return (
                                  toggleModal(),
                                  setDesc(
                                    "The chat will be deleted and removed from your chat history"
                                  ),
                                  setHeading("Delete Chat")
                                );
                              }}
                              className="inline-flex items-center justify-between w-full p-5 text-black bg-white rounded-lg cursor-pointer dark:hover:bg-gray-300 "
                            >
                              <div className=" flex gap-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="red"
                                  className="bi bi-trash3-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                </svg>
                                <div className="w-full text-sm">Delete</div>
                              </div>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <button className="md:hidden p-2 mr-5 bg-black text-sm text-white rounded-md ml-1 mt-[-10px]">
              New Chat
            </button>
          </div>
        </nav>
      </div>
      <main className="flex flex-wrap gap-10 mt-5 p-5 w-full text-md max-w-[650px] max-md:max-w-full">
        <section
          className="hide-scrollbar flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full overflow-y-auto"
          style={{ maxHeight: "400px" }} // Set max height to enable scrolling
        >
          <div className="flex gap-2">
            <img
              className={` h-10 w-10  md:flex`}
              src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
              alt="profile icon"
            />
            <h1 className="self-start text-md mt-2">{title}</h1>
          </div> 
           <p className="mt-8 leading-5 tex-sm max-md:max-w-full">{subtitle}</p>
          <StepList steps={steps} />
        </section>
        {/* <div className="self-end mt-96 max-md:mt-10">1</div> */}
      </main>
    </article>
  );
};
