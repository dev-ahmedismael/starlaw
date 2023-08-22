import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SOS from "./SOS";

const PrimaryBtn = ({ children }) => {
  return (
    <SOS>
      <Box boxShadow={10} width={"fit-content"} height={"fit-content"}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#4A53DD",
            height: "65px",
            px: 4,
            "&:hover": { bgcolor: "orange" },
          }}
        >
          <Typography variant="h6" color={"white"}>
            {children}
          </Typography>
        </Button>
      </Box>
    </SOS>
  );
};

export default PrimaryBtn;
