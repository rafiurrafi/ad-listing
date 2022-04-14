import React, { useState } from "react";
import "./app.scss";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

const App = () => {
  const [openSidebar, setOpenSidebar] = useState("none");

  return (
    <div className={`${openSidebar ? "visible" : ""}  app`}>
      <Header setOpenSidebar={setOpenSidebar} />
      <Banner />
      <Sidebar isOpen={openSidebar === "left"} onClose={setOpenSidebar} />
    </div>
  );
};

export default App;
