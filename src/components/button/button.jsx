import styled from "styled-components";
export const IconButton = styled.button({
  height: "4rem",
  width: "4rem",
  borderRadius: "50%",
  position: "relative",
  backgroundColor: "#f1f1f1",
  border: "none",
  textAlign: "center",
  cursor: "pointer",
  transition: "all .3s ",
  "&:focus ": {
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "blue",
    color: "white",
  },
});
export const IconButtonNotification = styled.div({
  height: "2rem",
  width: "2rem",
  backgroundColor: "blue",
  color: "white",
  position: "absolute",
  right: "-.5rem",
  top: "-1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  zIndex: "2",
  border: "1px solid #fff",
});
export const PostButton = styled.button({
  border: "none",
  color: "white",
  backgroundColor: "blue",
  padding: "1.3rem 2rem",
  cursor: "pointer",
  borderRadius: ".7rem",
  fontSize: "inherit",
  transition: "all .4s",
  "& > svg": {
    fontSize: "1.3rem",
    marginRight: ".7rem",
  },
  "&:focus": {
    outline: "none",
  },
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 1rem 1.2rem rgba(0, 0, 0, .15)",
  },
  "&:active": {
    transform: "translateY(-1px)",
    boxShadow: "0 .9rem 1rem rgba(0, 0, 0, .25)",
  },
});
