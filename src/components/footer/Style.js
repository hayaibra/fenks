import { Box, styled, Typography } from "@mui/material";

export const FooterBox = styled(Box)({
  backgroundImage: `url(${require("../../assests/imgs/footer.png")})`,
  width: "100%",
  height: "600px",
  backgroundSize: "cover",
  padding: "40px",
  display: "flex",
  justifyContent: "center",
  position: "relative",
});

export const Rights = styled(Typography)({
  width: "100%",
  position: "absolute",
  bottom: "0",
  textAlign: "center",
  fontFamily: "Poppins , sens-serif",
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: "bold",
});
