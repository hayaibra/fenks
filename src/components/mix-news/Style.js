import { Box, styled } from "@mui/material";

export const MixBox = styled(Box)({
  padding: "40px",
});

export const MixContent = styled(Box)(({theme})=>({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]:{
    flexDirection:'column'
  }
  
}));
