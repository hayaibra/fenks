import { Box, styled, Typography } from "@mui/material";

export const ActionBox = styled(Box)(({ theme }) => ({
  flex: 1,
  marginRight: "40px",
  flexDirection: "column",
  columnGap: "30px",

  [theme.breakpoints.down("lg")]: {
    marginTop: "40px",
    marginRight: "0",
  },
}));

export const TitleBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",

  "&::after": {
    content: '""',
    width: "100%",
    height: "5px",
    backgroundColor: "#2A8BCD",
    position: "absolute",
    bottom: "-10px",
    right: "0",
  },
});

export const ActionContent = styled(Box)({
  marginTop: "60px",
});

export const Content = styled(Box)({
  display: "flex",
});

export const ImageBox = styled(Box)(({ theme }) => ({
  marginLeft: "30px",
  transition: "0.5s ease-in-out",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1)",
  },
}));

export const TextBox = styled(Box)({
  padding: "10px 0",
});

export const ActionTitle = styled(Typography)(({ theme }) => ({
  color: "#666666",
  fontSize: "20px",
  fontFamily: "Cairo, sans-serif",
  fontWeight: "bold",

  [theme.breakpoints.only("xs")]: {
    fontSize: "15px",
  },
}));

export const Date = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  color: "#808080",
  fontSize: "16px",
  fontWeight: "lighter",
  marginTop: "15px",
});
