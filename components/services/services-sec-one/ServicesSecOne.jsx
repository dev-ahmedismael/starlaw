import AOS from "@/templates/AOS";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ServicesSecOne = () => {
  const items = [
    {
      id: 1,
      title: "We Provide Solid Law Practice",
      description:
        "We are dedicated to your best interests. Our nationally recognized law firm has the experience, ingenuity, looking for.",
      color: "#9999ff",
    },
    {
      id: 2,
      title: "Aggressive Criminal Defense",
      description:
        "We are dedicated to your best interests. Our nationally recognized law firm has the experience, ingenuity, looking for.",
      color: "#a3a3ff",
    },
    {
      id: 3,
      title: "Experienced Court Performance",
      description:
        "We are dedicated to your best interests. Our nationally recognized law firm has the experience, ingenuity, looking for.",
      color: "#b7b7ff",
    },
  ];
  return (
    <section>
      <Grid container>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={4}>
            <AOS>
              <Box bgcolor={item.color} p={10}>
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  mb={5}
                  color={"white"}
                >
                  {item.title}
                </Typography>
                <Typography variant="h6" color={"white"}>
                  {item.description}
                </Typography>
              </Box>
            </AOS>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default ServicesSecOne;
