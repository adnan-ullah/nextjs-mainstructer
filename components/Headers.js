import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/layoutStyle/Headers.module.css";
import DropDown from "./DropDown";
export default function Headers() {
  return (
    <div id={styles.root} className="">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a
            href="https://github.com/adnan-ullah/"
            className="flex items-center"
          >
            <span className="self-center text-xl whitespace-nowrap dark:text-white">
              
              Adnan Ullah
            </span>
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-10 p-10 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 bg-red-700 rounded md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Work
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                   
                    className="block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    About Me
                  </a>
                
                </Link>
              </li>
              <li>
                <Link  href="/">
                  <a
                   
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                   Contacts
                  </a>
                </Link>
              </li>

             
            
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
