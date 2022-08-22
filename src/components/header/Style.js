import { Box, styled } from "@mui/material";

export const HeaderBox = styled(Box)(({ theme }) => ({
  padding: "40px 40px 0",
  width: "100%",
  margin: "auto",

  [theme.breakpoints.only("xs")]: {
    padding: "29px 18px 0",
  },
}));
