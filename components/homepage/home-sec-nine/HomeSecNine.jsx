import AOS from "@/templates/AOS";
import CenteredTitle from "@/templates/CenteredTitle";
import Section from "@/templates/Section";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecNine = () => {
  const images = [
    "/images/blog/blog-home-1.png",
    "/images/blog/blog-home-2.png",
    "/images/blog/blog-home-3.png",
  ];
  return (
    <Section>
      <CenteredTitle>News & Resources</CenteredTitle>
      <Typography mt={5} mb={10} textAlign={"center"}>
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been The Industry's Standard.
      </Typography>
      <Grid container spacing={5}>
        {images.map((img, index) => (
          <Grid key={index} item xs={12} sm={4}>
            <AOS>
              <Box key={index} bgcolor={"white"} boxShadow={10}>
                <img src={img} alt="blog" width={"100%"} />
                <Box pb={2}>
                  <Container>
                    <Typography
                      textAlign={"center"}
                      variant="h6"
                      color={"black"}
                      my={2}
                    >
                      Lorem Ipsum is simply
                    </Typography>
                    <Typography textAlign={"center"}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Typography>
                  </Container>
                </Box>
              </Box>
            </AOS>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default HomeSecNine;
