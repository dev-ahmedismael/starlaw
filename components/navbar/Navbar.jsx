"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Container, Typography } from "@mui/material";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const pages = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "ABOUT", url: "/about" },
    { id: 3, title: "SERVICES", url: "/services" },
    { id: 4, title: "BLOG", url: "/blog" },
    { id: 5, title: "CONTACT", url: "/contact" },
  ];

  return (
    <nav>
      <Container>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Link href={"/"}>
              <Typography variant="h5" fontWeight={"bold"}>
                STAR LAW FIRM
              </Typography>
            </Link>
          </Box>
          <Box
            display={{ xs: "none", sm: "none", md: "flex" }}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box display={"flex"}>
              {pages.map((page) => (
                <Link key={page.id} href={page.url}>
                  <Typography ml={3}>{page.title}</Typography>
                </Link>
              ))}
            </Box>
          </Box>
          <Box display={{ xs: "flex", sm: "flex", md: "none" }}>
            <NavMenu />
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
