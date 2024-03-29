import Image from "next/image";
import Link from "next/link";

import React from "react";
import styles from "../styles/layoutStyle/Footers.module.css";
export default function Footers() {
  return (
    <div id={styles.root} className='w-full bg-white'>
        <div className="grid grid-cols-3 ">
          <div className="left-container p-10 h-80 w-full grid place-content-center">
           <h1 className="text-xs md:text-sm w-24 md:w-full text-gray-600 font-semibold ">YOU CAN ALSO FIND ME HERE.</h1>
            <ul className="md:mt-10 md:flex md:space-x-10 md:space-y-0 space-y-3 inline ">
              <li>
              <Link href='https://github.com/adnan-ullah/'>
                <a ><i className="bi bi-github text-gray-800 text-2xl hover:text-black"></i></a>
              </Link>
              </li>
              <li>
              <Link href='https://www.instagram.com/adnan___ullah/'>
                <a ><i className="bi bi-instagram text-gray-800 text-2xl hover:text-black"></i></a>
              </Link>
              </li>
              <li>
              <Link href='https://facebook.com/adnan.ullah.99'>
                <a ><i className="bi bi-facebook text-gray-800 text-2xl hover:text-black"></i></a>
              </Link>
              </li>
              <li>
              <Link href='https://www.linkedin.com/in/adnan-ullah/'>
                <a ><i className="bi bi-linkedin text-gray-800 text-2xl hover:text-black"></i></a>
              </Link>
              </li>
            </ul>
            <p className="mt-10 text-gray-800 text-sm">Powered by Adnan Ullah</p>

          </div>
          <div className="right-container  bg-cyan-200 col-span-2 w-full">
           
          </div>
          
          
          </div>
    </div>
   
  );
}
