import SOS from "@/templates/SOS";
import CenteredTitle from "@/templates/CenteredTitle";
import Section from "@/templates/Section";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecThree = () => {
  const items = [
    {
      id: 1,
      title: "Criminal Law",
      description:
        "Our criminal defense attorneys will protect your rights in court.",
      img: "/images/service1.png",
    },
    {
      id: 2,
      title: "Property Law",
      description:
        "Our criminal defense attorneys will protect your rights in court.",
      img: "/images/service2.png",
    },
    {
      id: 3,
      title: "Personal Injury",
      description:
        "Our criminal defense attorneys will protect your rights in court.",
      img: "/images/service3.png",
    },
    {
      id: 4,
      title: "Commercial Law",
      description:
        "Our criminal defense attorneys will protect your rights in court.",
      img: "/images/service4.png",
    },
    {
      id: 5,
      title: "Money Laundering",
      description:
        "Our criminal defense attorneys will protect your rights in court.",
      img: "/images/service5.png",
    },
    {
      id: 6,
      title: "Drug Offence",
      description:
        "Our criminal defense attorneys will protect your rights in court.",
      img: "/images/service6.png",
    },
  ];
  return (
    <Section>
      <CenteredTitle>Practice Areas</CenteredTitle>
      <Typography textAlign={"center"} mt={5} mb={10}>
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been The Industry's Standard.
      </Typography>
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={4}>
            <SOS>
              <Box bgcolor={"white"} p={5} boxShadow={2} borderRadius={1}>
                <Box display={"flex"} justifyContent={"center"}>
                  <img src={item.img} alt={item.title} />
                </Box>
                <Typography
                  textAlign={"center"}
                  variant="h5"
                  color={"black"}
                  my={5}
                >
                  {item.title}
                </Typography>
                <Typography textAlign={"center"}>{item.description}</Typography>
              </Box>
            </SOS>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default HomeSecThree;
