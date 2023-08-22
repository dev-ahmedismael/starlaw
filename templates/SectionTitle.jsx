import { Box, Typography } from "@mui/material";
import React from "react";
import SOS from "./SOS";

const SectionTitle = ({ children }) => {
  return (
    <Box>
      <SOS>
        <Typography variant="h4" fontWeight={"bold"} color={"primary"} mb={3}>
          {children}
        </Typography>
      </SOS>
      <img src="/images/headding-img.png" alt="Heading underline" />
    </Box>
  );
};

export default SectionTitle;
