import React, { useState } from "react";

const PopOver = ({ profilePicSrc }) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleMouseEnter = () => setPopoverOpen(true);
  const handleMouseLeave = () => setPopoverOpen(false);

  return (
    <div className="hs-tooltip inline-block sm:placement-right">
      <div className="hs-tooltip-toggle max-w-xs p-3 flex items-center gap-x-3 rounded-xl ">
        <div
          className="hs-tooltip-toggle max-w-xs p-3 flex items-center gap-x-3 rounded-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="rounded-full w-[120px] h-[120px] mb-2 cursor-pointer"
            alt="popup"
            src={profilePicSrc}
            onMouseEnter={() => setPopoverOpen(true)}
            onMouseLeave={() => setPopoverOpen(false)}
          />

          {isPopoverOpen && (
            <div
              className="hs-tooltip-content opacity-100 visible transition-opacity inline-block absolute z-10 max-w-xs w-full  text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full  dark:border-gray-700 left-[370px] top-[-50px]"
              role="tooltip"
            >
              {/* Header */}
              <div className="py-3 px-4 border-b border-gray-200 ">
                <div className="flex items-center gap-x-3">
                  <img
                    className="flex-shrink-0 inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src={profilePicSrc}
                    alt="profilePic"
                  />
                  <div className="grow">
                    <h4 className="font-semibold text-sm text-black">
                      Zadarch Caunca
                      <span className="ms-0.5 inline-flex items-center align-middle gap-x-1.5 py-0.5 px-1.5 rounded-md text-[11px] font-medium bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                        ...
                      </span>
                    </h4>
                    <p className="text-sm text-gray-500">Front-End Developer</p>
                  </div>
                </div>
              </div>

              {/* List */}
              <ul className="py-3 px-4 space-y-1">
                <li>
                  <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 ">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    </svg>
                    Antipolo City, RIZAL
                  </div>
                </li>

                <li>
                  <div className="inline-flex items-center gap-x-3 text-sm text-gray-800">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                    (+63) 9129862812
                  </div>
                </li>

                <li>
                  <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 ">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    zadrachcaunca777@gmail.com
                  </div>
                </li>
              </ul>

              <div className="py-2 px-4 flex justify-between items-center border-b bg-gray-100 dark:bg-gray-800">
                <a
                  href="https://www.instagram.com/zadrach_caunca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-1.5 text-xs text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <i className="fab fa-instagram"></i>
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/ZachGwapo777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-1.5 text-xs text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <i className="fab fa-facebook"></i>
                  Facebook
                </a>

                <a
                  href="https://www.linkedin.com/in/zadrach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-1.5 text-xs text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopOver;
