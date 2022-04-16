import React from "react";
import styled from "styled-components";
const CategoryContainer = styled.div({
  padding: "10rem 0",
  "& > *": {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridGap: "5rem",
    textAlign: "center",
  },
});
const CategoryContentStyle = styled.div({
  padding: "3rem 0",
  transition: "all .3s",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0rem 0rem 1.5rem rgba(0, 0, 0, .25)",
  },
});
const CategoryImgStyle = styled.img({
  height: "8rem",
  width: "8rem",
  objectFit: "cover",
  marginBottom: "1rem",
});

const Category = ({ children }) => {
  return <CategoryContainer>{children}</CategoryContainer>;
};
export const CategoryContent = ({ children }) => {
  return <CategoryContentStyle>{children}</CategoryContentStyle>;
};
export const CategoryImg = ({ src }) => {
  return <CategoryImgStyle src={src} />;
};

export const CategoryTitle = ({ children }) => {
  return <div className="category__title">{children}</div>;
};

export default Category;
