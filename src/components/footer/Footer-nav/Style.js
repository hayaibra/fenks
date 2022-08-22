import { Box, styled } from "@mui/material";

export const NavBox = styled(Box)(({ theme }) => ({
  width: "75%",
  position: "absolute",
  bottom: "0",
  marginBottom: "24px",

  [theme.breakpoints.only("xs")]: {
    width: "90%",
  },
}));

export const NavList = styled("ul")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#50288596",
  borderRadius: "14px",
  height: "40px",
  alignItems: "center",
  padding: "0 20px",
});

export const Nav = styled("a")(({ theme }) => ({
  cursor: "pointer",
  fontFamily: "Cairo , sens-serif",
  color: "#FFFFFF",
  fontSize: "26px",
  display: "block",
  height: "100%",
  fontWeight: "lighter",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.only("md")]: {
    fontSize: "20px",
  },

  [theme.breakpoints.only("sm")]: {
    fontSize: "13px",
  },

  [theme.breakpoints.only("xs")]: {
    fontSize: "10px",
  },
}));
