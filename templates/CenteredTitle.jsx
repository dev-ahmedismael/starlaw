import React from "react";
import { Box, Typography } from "@mui/material";
import SOS from "./SOS";

const CenteredTitle = ({ children }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SOS>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          color={"primary"}
          textAlign={"center"}
          mb={3}
        >
          {children}
        </Typography>
      </SOS>
      <img src="/images/headding-img.png" alt="Heading underline" />
    </Box>
  );
};

export default CenteredTitle;
