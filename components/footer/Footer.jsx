import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

const Footer = () => {
  const footer = [
    {
      id: 1,
      title: "Star Law Firm",
      content: [
        "It is a long established fact that a reader will be distracted by the readable content.",
      ],
    },
    {
      id: 2,
      title: "QUICK LINKS",
      content: [
        "HOME",
        "THE FIRM",
        "PRACTICE AREAS",
        "NEWS & RESOURCES",
        "CONTACT",
      ],
    },
    {
      id: 3,
      title: "Contact Info",
      content: [
        "505 Thornall St #301,Edison, NJ 08837, USA",
        "Email : dev.ahmedismael@outlook.com",
        "Call Us: +20 128 652-3946",
      ],
    },
  ];
  return (
    <footer>
      <Box py={10}>
        <Container>
          <Grid container spacing={10}>
            {footer.map((e) => (
              <Grid key={e.id} item xs={12} sm={4}>
                <Typography variant="h4" mb={3}>
                  {e.title}
                </Typography>
                {e.content.map((e, index) => (
                  <Typography key={index} mb={1}>
                    {e}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
          <Typography textAlign={"center"} mt={5}>
            Copyright ©2023 All rights reserved
          </Typography>
          <Typography textAlign={"center"} mb={3}>
            Developed with <FavoriteIcon sx={{ color: "red" }} /> by
            <Link href={"https://ahmedismael.vercel.app"} target="_blank">
              <Button>Ahmed Ismael</Button>
            </Link>
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
