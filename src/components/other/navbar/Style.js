import { Box, styled } from "@mui/material";

export const NavBox = styled("ul")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px 0",
});

export const Nav = styled("li")(({theme})=>({
  width: "fit-content",
  backgroundColor: "#EFEFEF",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "20px",
  fontFamily: "Cairo, sans-serif",
  color: "#808080",
  transition: "0.3s linear",
  listStyle: "none",
  borderRadius: "14px",

  "&:hover": {
    backgroundColor: "#CA0C54",
    color: "#FFFFFF",
  },

  [theme.breakpoints.only("md")]:{
    fontSize: "10px",
  },

  [theme.breakpoints.only("sm")]:{
    fontSize: "10px",
    padding:"10px 10px",
  },

  [theme.breakpoints.only("xs")]:{
    fontSize: "9px",
    padding:"10px 2px",
  }
}));
