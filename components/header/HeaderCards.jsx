import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HeaderCards = () => {
  const items = [
    {
      id: 1,
      title: "ESTABLISHED & BUSINESS LITIGATION",
      icon: "/images/service_c.png",
    },
    { id: 2, title: "REAL PROPERTY LITIGATION", icon: "/images/service_d.png" },
    {
      id: 3,
      title: "PERSONAL INJURY LITIGATION",
      icon: "/images/service_e.png",
    },
  ];
  return (
    <Box position={"relative"} zIndex={9}>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={4}>
            <Box bgcolor={"white"} className="header-card">
              <Box>
                <Box mb={5} display={"flex"} justifyContent={"center"}>
                  <img src={item.icon} alt={item.title} />
                </Box>
                <Typography variant="h6" textAlign={"center"}>
                  {item.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeaderCards;
