import { Box, styled, Typography } from "@mui/material";

export const OtherNewsBox = styled(Box)({
  flexBasis: "40%",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

export const News = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("lg")]: {
    justifyContent: "flex-start",
  },
}));

export const TextBox = styled(Box)({
  marginRight: "20px",
  width: "40%",
});
export const OtherTitle = styled(Box)(({ theme }) => ({
  fontFamily: "Cairo, sans-serif",
  fontWeight: "bold",
  fontSize: "20px",
  color: "#666666",

  [theme.breakpoints.only("xs")]: {
    fontSize: "15px",
  },
}));

export const Date = styled(Typography)(({theme})=>({
  fontFamily: "Poppins, sans-serif",
  fontWeight: "lighter",
  color: "#808080",
  fontSize: "16px",

  [theme.breakpoints.only("xs")]: {
    fontSize: "14px",
  },
}));
