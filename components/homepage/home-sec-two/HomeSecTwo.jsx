import AOS from "@/templates/AOS";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecTwo = () => {
  const items = [
    "Lorem Ipsum Is Simply Dummy Text Of The Printing.",
    "Lorem Ipsum Is Simply Dummy Text Of The Printing.",
    "Lorem Ipsum Is Simply Of The Printing.",
    "Lorem Ipsum The Printing.",
    "Lorem Ipsum Is Simply Dummy Text Of The Printing.",
    "Lorem Ipsum Is Simply Dummy Text Of The Printing.",
  ];
  return (
    <section>
      <Box bgcolor={"#01020b"}>
        <Grid container>
          <Grid item xs={12} sm={6} p={10}>
            <AOS>
              <Typography variant="h4" fontWeight={"bold"} color={"white"}>
                OUR CAPABILTIES
              </Typography>
              <Typography variant="h6" my={5} color={"white"}>
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Type
                Setting Industry.
              </Typography>
              {items.map((item, index) => (
                <Box key={index} display={"flex"}>
                  <Box mr={2}>
                    <img src="/images/right.png" alt="Right Icon" />
                  </Box>
                  <Typography variant="h6" color={"white"}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </AOS>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src="/images/bg_video.png" alt="Library" width={"100%"} />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default HomeSecTwo;
