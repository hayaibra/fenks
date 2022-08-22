import { Box, styled } from "@mui/material";

export const OtherBox = styled(Box)({
  padding: "40px",
});

export const FTitle = styled(Box)({
  color: "#CA0C54",
  position: "relative",
  fontSize: "29px",
  fontWeight: "bold",
  fontFamily: "Cairo, sans-serif",

  "&::after": {
    content: '""',
    width: "100%",
    height: "5px",
    backgroundColor: "#CA0C54",
    position: "absolute",
    bottom: "-10px",
    right: "0",
  },
});

export const NewsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
