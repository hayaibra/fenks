import { Box, styled, Typography } from "@mui/material";

export const NewsBox = styled(Box)({
  flexBasis: "50%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const BoxImg = styled(Box)(({ theme }) => ({
  width: "400px",
  height: "530px",
  marginleft: "30px",

  [theme.breakpoints.down("lg")]: {
    height: "400px",
  },
  [theme.breakpoints.only("xs")]: {
    height: "300px",
  },
}));

export const Img = styled("img")({
  width: "100%",
});

export const TextBox = styled(Box)(({ theme }) => ({
  width: "400px",
  height: "530px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "20px",
  marginRight: "30px",

  [theme.breakpoints.down("lg")]: {
    height: "400px",
    paddingTop: "0",
  },
  [theme.breakpoints.only("xs")]: {
    height: "300px",
  },
}));

export const Title = styled(Box)(({ theme }) => ({
  fontFamily: "Cairo, sans-serif",
  fontSize: "30px",
  color: "#666666",
  marginBottom: "30px",
  fontWeight: "bold",

  [theme.breakpoints.only("sm")]: {
    fontSize: "20px",
  },

  [theme.breakpoints.only("xs")]: {
    fontSize: "14px",
    marginBottom: "22px",
  },
}));

export const Article = styled(Typography)(({ theme }) => ({
  fontFamily: "Cairo, sans-serif",
  fontSize: "16px",
  color: "#808080",
  height: "140px",
  overflow: "auto",

  [theme.breakpoints.only("xs")]: {
    fontSize: "12px",
    height: "114px",
  },
}));

export const Date= styled(Typography)(({ theme }) => ({
    fontFamily: "Poppins, sans-serif",
    fontSize: "16px",
    color: "#808080",
    marginBottom: "30px",
    fontWeight: "lighter",

  [theme.breakpoints.only("xs")]: {
    fontSize: "12px",
  },
}));
