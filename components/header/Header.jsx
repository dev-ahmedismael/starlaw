"use client";
import React from "react";
import Navbar from "../navbar/Navbar";
import { Box, Container, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import HeaderCards from "./HeaderCards";

const Header = () => {
  const path = usePathname();
  return (
    <Box className="img-wrap">
      <header>
        <Box>
          <Navbar />
        </Box>
        <Box position={"relative"} zIndex={9}>
          <Container>
            <Box borderLeft={"5px solid #6871F4"} mt={20} mb={7}>
              <Container>
                <Typography variant="h6">ONE SIMPLE GOAL:</Typography>
                <Typography variant="h3" lineHeight={1.3}>
                  Working Tirlessly <br /> Toward Successful Resolutions
                </Typography>
              </Container>
            </Box>
            <Typography variant="h6" lineHeight={2}>
              LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
              <br />
              INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD <br />
              DUMMY TEXT EVER SINCE THE 1500S,
            </Typography>
          </Container>
        </Box>
        <Box mt={20}>
          <Container>
            <HeaderCards />
          </Container>
        </Box>
      </header>
    </Box>
  );
};

export default Header;
