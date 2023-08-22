import CenteredTitle from "@/templates/CenteredTitle";
import OrangeSection from "@/templates/OrangeSection";
import SOS from "@/templates/SOS";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecSix = () => {
  const leftElements = [
    {
      id: 1,
      title: "GREAT DISCOUNT",
      description: "Lorem Ipsum is dummy typesetting industry.",
      icon: "/images/icone_1.png",
    },
    {
      id: 2,
      title: "COMMUNITY SERVICE",
      description: "Lorem Ipsum is dummy typesetting industry.",
      icon: "/images/icone_2.png",
    },
    {
      id: 3,
      title: "PROFESSIONAL LIABILITY",
      description: "Lorem Ipsum is dummy typesetting industry.",
      icon: "/images/icone_3.png",
    },
  ];
  const rightElements = [
    {
      id: 1,
      title: "GET LEGAL ADVICE",
      description: "Lorem Ipsum is dummy typesetting industry.",
      icon: "/images/icone_4.png",
    },
    {
      id: 2,
      title: "EXPERT LAWYERS",
      description: "Lorem Ipsum is dummy typesetting industry.",
      icon: "/images/icone_5.png",
    },
    {
      id: 3,
      title: "DEDICATION TO OUR CLIENTS",
      description: "Lorem Ipsum is dummy typesetting industry.",
      icon: "/images/icone_6.png",
    },
  ];
  return (
    <OrangeSection>
      <CenteredTitle>Why Choose Us</CenteredTitle>
      <Typography mt={5} mb={10} textAlign={"center"}>
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been The Industry's Standard.
      </Typography>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <SOS>
              {leftElements.map((e) => (
                <Box key={e.id} mb={3} display={"flex"}>
                  <Box>
                    <Typography
                      textAlign={"right"}
                      color={"black"}
                      fontWeight={"bold"}
                      mb={1}
                    >
                      {e.title}
                    </Typography>
                    <Typography textAlign={"right"}>{e.description}</Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <img src={e.icon} alt={e.title} />
                  </Box>
                </Box>
              ))}
            </SOS>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SOS>
              <img
                src="/images/shap-center.png"
                alt="Justice "
                width={"100%"}
              />
            </SOS>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SOS>
              {rightElements.map((e) => (
                <Box key={e.id} mb={3} display={"flex"}>
                  <Box>
                    <img src={e.icon} alt={e.title} />
                  </Box>
                  <Box>
                    <Typography color={"black"} fontWeight={"bold"} mb={1}>
                      {e.title}
                    </Typography>
                    <Typography>{e.description}</Typography>
                  </Box>
                </Box>
              ))}
            </SOS>
          </Grid>
        </Grid>
      </Container>
    </OrangeSection>
  );
};

export default HomeSecSix;
