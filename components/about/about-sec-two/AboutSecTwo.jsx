import AOS from "@/templates/AOS";
import OrangeSection from "@/templates/OrangeSection";
import { Grid, Typography } from "@mui/material";
import React from "react";

const AboutSecTwo = () => {
  return (
    <OrangeSection>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={8}>
          <AOS>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              color={"primary"}
              mb={3}
            >
              STAR LEE LAW FIRM
            </Typography>
            <Typography variant="h6">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of
              Type And Scrambled It To Make A Type Specimen Book. It Has
              Survived Not Only Five Centuries, But Also The Leap Into
              Electronic Typesetting, Remaining Essentially Unchanged. It Was
              Popularised In The 1960s With The Release Of Letraset Sheets
              Containing Lorem Ipsum Passages, And More Recently With Desktop
              Publishing Software Like Aldus PageMaker Including Versions Of
              Lorem Ipsum.
            </Typography>
          </AOS>
        </Grid>
        <Grid item xs={12} sm={4}>
          <AOS>
            <img src="/images/team-1.png" alt="lawyer" width={"100%"} />
          </AOS>
        </Grid>
      </Grid>
    </OrangeSection>
  );
};

export default AboutSecTwo;
