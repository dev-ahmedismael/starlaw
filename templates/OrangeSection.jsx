import { Box, Container } from "@mui/material";
import React from "react";

const OrangeSection = ({ children }) => {
  return (
    <section className="orange-section">
      <Container>
        <Box py={10}>{children}</Box>
      </Container>
    </section>
  );
};

export default OrangeSection;
