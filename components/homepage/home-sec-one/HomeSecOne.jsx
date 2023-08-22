import AOS from "@/templates/AOS";
import PrimaryBtn from "@/templates/PrimaryBtn";
import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecOne = () => {
  return (
    <Section>
      <Grid container spacing={7}>
        <Grid
          item
          xs={12}
          sm={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <AOS>
            <SectionTitle>WELCOME TO ABOUT US?</SectionTitle>
            <Typography variant="h6" my={5}>
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Type Setting
              Industry. Lorem Ipsum Has Been The Industry's Standar
            </Typography>
            <PrimaryBtn>READ MORE ABOUT US</PrimaryBtn>
          </AOS>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AOS>
            <img
              src="/images/about-right.png"
              alt="About Image"
              width={"100%"}
            />
          </AOS>
        </Grid>
      </Grid>
    </Section>
  );
};

export default HomeSecOne;
