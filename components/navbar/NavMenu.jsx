"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const NavMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const pages = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "ABOUT", url: "/about" },
    { id: 3, title: "SERVICES", url: "/services" },
    { id: 4, title: "BLOG", url: "/blog" },
    { id: 5, title: "CONTACT", url: "/contact" },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      height={"100%"}
      onClick={() => setIsMenuActive(!isMenuActive)}
    >
      <Button>
        <MenuIcon sx={{ color: "white" }} />
      </Button>
      {isMenuActive && (
        <Box
          position={"absolute"}
          zIndex={10}
          top={90}
          left={0}
          width={"100%"}
          bgcolor={"#01020B"}
          py={7}
        >
          {pages.map((page) => (
            <Box key={page.id} mb={2}>
              <Container>
                <Link href={page.url}>
                  <Typography>{page.title}</Typography>
                </Link>
              </Container>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NavMenu;
