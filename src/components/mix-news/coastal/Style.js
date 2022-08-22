import { Box, styled, Typography } from "@mui/material";

export const CoastalBox = styled(Box)({
  flex: 2,
});

export const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",

  "&::after": {
    content: '""',
    width: "100%",
    height: "5px",
    backgroundColor: "#8C1B6D",
    position: "absolute",
    bottom: "-10px",
    right: "0",
  },

  [theme.breakpoints.down("lg")]: {
    marginBottom: "40px",
  },
}));

export const FTitle = styled(Typography)({
  fontFamily: "Cairo, sans-serif",
  color: "#8C1B6D",
  fontSize: "29px",
  fontWeight: "bold",
  padding: "0 5px",
});

export const ArrowBox = styled(Box)({
  display: "flex",
  width: "37px",
  justifyContent: "space-between",
});

export const CoastalContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  marginTop: "60px",
  marginBottom: "190px",

  [theme.breakpoints.only("md")]: {
    marginBottom: "290px",
  },

}));
export const Content = styled(Box)(({ theme }) => ({
  width: "30%",

  [theme.breakpoints.down("md")]: {
    width: "50%",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Image = styled(Box)({
  marginBottom: "40px",
});

export const NewTitle = styled(Typography)({
  fontFamily: "Cairo, sans-serif",
  fontWeight: "bold",
  fontSize: "18px",
  color: "#666666",
  marginBottom: "20px",
});

export const ImageCoastal = styled("img")({ width: "100%" });

export const Date = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  color: "#808080",
  fontSize: "16px",
  fontWeight: "lighter",
});

export const Ads = styled("img")({
  width: "100%",
});
