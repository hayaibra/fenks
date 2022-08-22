import { Box, styled } from "@mui/material";

export const BottomBox = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: "14px",
  background:
    "linear-gradient(-90deg, #F60143 0%,#F60143 20%, #68237A 60% ,#68237A 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "30px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    height: "55px",
  },
}));

export const LinkBox = styled("ul")({
  display: "flex",
  alignItems: "center",
  height: "100%",
});

export const LinkWithArrow = styled("a")(({ theme }) => ({
  display: "flex",
  fontFamily: "Cairo, sans-serif",
  fontSize: "22px",
  height: "100%",
  alignItems: "center",
  color: "#FFFFFF",
  textDecoration: "none",
  padding: "0 30px",

  "@media (min-width: 900px) and (max-width: 1100px)": {
    fontSize: "13px",
    padding: "0 12px",
  },
  "@media (min-width: 1100px) and (max-width: 1290px)": {
    fontSize: "20px",
    padding: "0 12px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "14px",
    padding: "0 12px",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "9px",
    padding: "0 8px",
  },
}));

export const LinkName = styled("p")({
  marginLeft: "5px",
});

export const ArrowBox = styled("img")({
  display: "flex",
  alignItems: "center",
});

export const SearchBox = styled(Box)(({ theme }) => ({
  width: "20%",
  padding: "15px 0 15px 15px",
  borderBottom: "1px solid #FFFFFF",
  height: "45%",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    marginBottom: "20px",
    width: "50%",
  },
}));

export const Input = styled("input")({
  width: "100%",
  outline: "none",
  backgroundColor: "transparent",
  border: "none",
});
