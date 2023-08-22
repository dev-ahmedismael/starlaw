import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SOS from "./SOS";

const SecondaryBtn = ({ children }) => {
  return (
    <SOS>
      <Box boxShadow={10} width={"fit-content"} height={"fit-content"}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "orange",
            height: "65px",
            px: 4,
            "&:hover": { bgcolor: "#4A53DD" },
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

export default SecondaryBtn;
