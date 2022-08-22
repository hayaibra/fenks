import { Box, styled, Typography } from "@mui/material";

export const FormBox = styled(Box)({
  marginBottom: "130px",
});

export const FormTitle = styled(Box)(({ theme }) => ({
  color: "#FFFFFF",
  fontFamily: "Cairo , sans-serif",
  fontSize: "59px",
  marginBottom: "50px",

  [theme.breakpoints.only("xs")]: {
    ontSize: "53px",
  },
}));

export const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "80%",
  position: "absolute",
  left: "50%",
  transform: "translate(-50%)",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
}));

export const PersonBox = styled(Box)(({ theme }) => ({
  width: "40%",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const BoxF = styled(Box)({});

export const Input = styled("input")(({ theme }) => ({
  width: "90%",
  outline: "none",
  border: "none",
  backgroundColor: "#50288596",
  borderRadius: "10px",
  position: "relative",
  padding: "10px ",
  marginBottom: "30px",

  "&::placeholder": {
    fontFamily: "Cairo , sens-serif",
    color: "#FFFFFF",
    fontSize: "20px",
  },

  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
}));

export const MsgBox = styled(Box)(({ theme }) => ({
  width: "40%",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const SentButton = styled(Box)(({ theme }) => ({
  width: "fit-content",
  backgroundColor: "#FFFFFF",
  padding: "10px 40px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Cairo , sens-serif",
  fontSize: "20px",
  color: "#502885",
  position: "absolute",
  bottom: "200px",
  right: "50%",
  transform: "translateX(61%)",

  [theme.breakpoints.down("md")]: {
    bottom: "165px",
  },
}));
