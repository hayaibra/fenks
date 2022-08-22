import { Box, styled, Typography } from "@mui/material";

export const LandingBox = styled(Box)(({ theme }) => ({
  padding: "40px",

  [theme.breakpoints.down("md")]: {
    padding: "18px",
  },
}));

export const LandingContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#F4F2F4",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const ArticleBox = styled(Box)({
  flex: 1,
  padding: "30px",
});

export const FirstTitle = styled(Typography)({
  fontFamily: "Cairo, sans-serif",
  fontSize: "29px",
  fontWeight: "bold",
  color: "#502885",
  position: "relative",
  marginBottom: "40px",

  "&::after": {
    content: '""',
    width: "150px",
    height: "5px",
    backgroundColor: "#502885",
    position: "absolute",
    bottom: "-10px",
    right: "0",
  },
});

export const Date = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  color: "#808080",
  marginBottom: "30px",
  fontWeight: "lighter",
});

export const Title = styled(Typography)({
  fontFamily: "Cairo, sans-serif",
  fontSize: "30px",
  color: "#666666",
  marginBottom: "30px",
  fontWeight: "bold",
});

export const Article = styled(Typography)({
  fontFamily: "Cairo, sans-serif",
  fontSize: "16px",
  color: "#808080",
  height: "140px",
  overflow: "auto",
});

export const More = styled("a")({
  textDecoration: "none",
  fontSize: "17px",
  color: "#502885",
  fontWeight: "bold",
  marginBottom: "30px",
});

export const ImgDot = styled("img")({
  display: "block",
  marginTop: "45px",
  cursor: "pointer",
});

export const ImgBox = styled(Box)(({ theme }) => ({
  flex: 2,

  [theme.breakpoints.down("md")]: {
    marginLeft: "6px",
  },
}));

export const Img = styled("img")({
  width: "100%",
  height: "100%",
});
export const DotBox = styled(Box)({});
export const Dot = styled(Box)({});
