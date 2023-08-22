import OrangeSection from "@/templates/OrangeSection";
import SecondaryBtn from "@/templates/SecondaryBtn";
import { Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecTen = () => {
  return (
    <OrangeSection>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" color={"#01020b"} mb={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <Typography>
            Get started for free to see who your customers are, what they do and
            what keeps them coming back.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} display={"flex"} justifyContent={"flex-end"}>
          <SecondaryBtn>FREE CONSULTATION</SecondaryBtn>
        </Grid>
      </Grid>
    </OrangeSection>
  );
};

export default HomeSecTen;
