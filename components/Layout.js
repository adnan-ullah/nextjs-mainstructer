import React from "react";
import Headers from "../components/Headers";
import Footers from "../components/Footers";
import styles from "../styles/layoutStyle/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div id={styles.rootHead}>
      <Headers />

      <div className="grid grid-cols-1 w-full">
        <div className="bg-white">{children}</div>
      </div>

      {/* if rigth side navbar 
      <div className="row mt-20  vh-100 bg-linkyello">
        <div className="container-fluid p-8 col-md-10">
          {/* <div className="col-6 col-md-2 p-0 " id = {styles.sideLayout}>
         
          </div> 

          <div className="">{children}</div>
            </div>
         <div className="p-8 col-md-2 ">

         </div>
          <nav className="hidden col-md-2 p-0 vh-100 md:block" id={styles.sideLayout}>
            <SideBar />
          </nav>
       
      </div>
      
      */}

      <Footers />
    </div>
  );
}
