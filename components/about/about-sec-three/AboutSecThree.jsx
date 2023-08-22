import SOS from "@/templates/SOS";
import CenteredTitle from "@/templates/CenteredTitle";
import Section from "@/templates/Section";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const AboutSecThree = () => {
  const lawyers = [
    {
      id: 1,
      title: "DEVIS BILL",
      job: "Business Lawyer",
      img: "/images/team-1.png",
    },
    {
      id: 2,
      title: "JONATHAN LEE",
      job: "Criminal Lawyer",
      img: "/images/team-2.png",
    },
    {
      id: 3,
      title: "MARK LEE",
      job: "Business Lawyer",
      img: "/images/team-3.png",
    },
    {
      id: 4,
      title: "LOHIS TIM",
      job: "Business Lawyer",
      img: "/images/team-4.png",
    },
    {
      id: 5,
      title: "SHENA LOI",
      job: "Criminal Lawyer",
      img: "/images/team-5.png",
    },
    {
      id: 6,
      title: "JAMS MILL",
      job: "Business Lawyer",
      img: "/images/team-6.png",
    },
  ];
  return (
    <Section>
      <CenteredTitle>Our Attorneys</CenteredTitle>
      <Typography textAlign={"center"} mt={5} mb={10}>
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been The Industry's Standard.
      </Typography>
      <Grid container spacing={7}>
        {lawyers.map((lawyer) => (
          <Grid key={lawyer.id} item xs={12} sm={4}>
            <SOS>
              <Box position={"relative"}>
                <img
                  src={lawyer.img}
                  alt="Lawyer"
                  width={"100%"}
                  height={400}
                />
                <Box
                  position={"absolute"}
                  zIndex={1}
                  bottom={0}
                  left={0}
                  width={"100%"}
                  height={150}
                  bgcolor={"black"}
                  sx={{ opacity: 0.7 }}
                ></Box>
                <Box
                  position={"absolute"}
                  zIndex={5}
                  bottom={0}
                  left={0}
                  width={"100%"}
                  height={150}
                  bgcolor={"transparent"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="h6"
                    color={"orange"}
                    textAlign={"center"}
                  >
                    {lawyer.title}
                  </Typography>
                  <Typography variant="h6" color={"white"} textAlign={"center"}>
                    {lawyer.job}
                  </Typography>
                </Box>
              </Box>
            </SOS>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default AboutSecThree;
