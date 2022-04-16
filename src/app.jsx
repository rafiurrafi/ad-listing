import React, { useState } from "react";
import "./app.scss";
import Banner from "./components/banner/banner";
import Category, {
  CategoryContent,
  CategoryImg,
  CategoryTitle,
} from "./components/category/category";
import Container from "./components/container/container";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import automobile from "./assets/automobile.png";
import education from "./assets/education.png";
import electronics from "./assets/electronics.png";
import fashion from "./assets/fashion.png";
import food from "./assets/food.png";
import furniture from "./assets/furniture.png";
import Carousel from "./components/carousel/carousel";
import Footer from "./components/footer/footer";

const App = () => {
  const [openSidebar, setOpenSidebar] = useState("none");

  return (
    <div className={`${openSidebar ? "visible" : ""}  app`}>
      <Header setOpenSidebar={setOpenSidebar} />
      <Banner />
      <Category>
        <Container>
          <CategoryContent>
            <CategoryImg src={automobile} />
            <CategoryTitle>Electronics</CategoryTitle>
          </CategoryContent>
          <CategoryContent>
            <CategoryImg src={education} />
            <CategoryTitle>Electronics</CategoryTitle>
          </CategoryContent>
          <CategoryContent>
            <CategoryImg src={electronics} />
            <CategoryTitle>Electronics</CategoryTitle>
          </CategoryContent>
          <CategoryContent>
            <CategoryImg src={fashion} />
            <CategoryTitle>Electronics</CategoryTitle>
          </CategoryContent>
          <CategoryContent>
            <CategoryImg src={food} />
            <CategoryTitle>Electronics</CategoryTitle>
          </CategoryContent>
          <CategoryContent>
            <CategoryImg src={furniture} />
            <CategoryTitle>Electronics</CategoryTitle>
          </CategoryContent>
        </Container>
      </Category>
      <Carousel />
      <Footer />
      <Sidebar isOpen={openSidebar === "left"} onClose={setOpenSidebar} />
    </div>
  );
};

export default App;
