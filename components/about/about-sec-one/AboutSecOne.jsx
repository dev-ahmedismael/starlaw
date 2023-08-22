import SOS from "@/templates/SOS";
import PrimaryBtn from "@/templates/PrimaryBtn";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const AboutSecOne = () => {
  const images = [
    {
      id: 1,
      title: "Free Consultation",
      img: "/images/s_a.png",
    },
    { id: 2, title: "Legal Information", img: "/images/s_b.png" },
    { id: 3, title: "Proven Result", img: "/images/s_c.jpg" },
  ];
  return (
    <section>
      <Box py={10} bgcolor={"#141211"} position={"relative"}>
        <Container>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4}>
              <SOS>
                <Box>
                  <Typography variant="h4" color={"#615631"}>
                    We Are Experienced Trial Lawyers
                  </Typography>
                </Box>
              </SOS>
            </Grid>
            <Grid item xs={12} sm={8}>
              <SOS>
                <Typography variant="h6" color={"white"}>
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And
                  Typesetting Industry. Lorem Ipsum Has Been The Industry's
                  Standard Dummy Text Ever Since The 1500s, When An Unknown .
                </Typography>
              </SOS>
            </Grid>
          </Grid>
          <Box display={"flex"} justifyContent={"flex-end"} pt={5}>
            <Link href={"/services"}>
              <PrimaryBtn>READ MORE</PrimaryBtn>
            </Link>
          </Box>
          <Box mt={10}>
            <Container>
              <Grid container>
                {images.map((img) => (
                  <Grid key={img.id} item xs={12} sm={4}>
                    <SOS>
                      <Box className="img-wrap">
                        <img src={img.img} alt="service" width={"100%"} />
                        <Box
                          position={"absolute"}
                          bottom={30}
                          left={30}
                          zIndex={2}
                          display={"flex"}
                        >
                          <Box mr={2}>
                            <img
                              src="/images/after_img.png"
                              alt="Orange line"
                            />
                          </Box>
                          <Typography variant="h5" color={"white"}>
                            {img.title}
                          </Typography>
                        </Box>
                      </Box>
                    </SOS>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default AboutSecOne;
