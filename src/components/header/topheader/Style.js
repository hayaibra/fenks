import { Box, styled } from "@mui/material";

export const TopHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "29px",
});

export const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "135px",
  height: "21px",
  [theme.breakpoints.only("sm")]: {
    width: "102px",
  },
  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
}));

export const ImgBox = styled("img")(({ theme }) => ({
  width: "264px",
  height: "95px",
  [theme.breakpoints.only("xs")]: {
    width:"200px"
  },
}));

export const SignBox = styled(Box)(({ theme }) => ({
  color: "#502885",
  fontFamily: "Cairo, sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "21px",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));
