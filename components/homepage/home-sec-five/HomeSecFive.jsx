import SOS from "@/templates/SOS";
import SecondaryBtn from "@/templates/SecondaryBtn";
import { Box, Typography } from "@mui/material";
import React from "react";

const HomeSecFive = () => {
  return (
    <section>
      <Box className="img-wrap">
        <Box position={"relative"}>
          <img
            src="/images/banner-bg-bottom.png"
            alt="Man in library banner"
            width={"100%"}
            height={500}
          />
          <SOS>
            <Box
              position={"absolute"}
              zIndex={5}
              top={0}
              left={0}
              width={"100%"}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h5" textAlign={"center"} color={"orange"}>
                20 Years Of Experience In Various Case
              </Typography>
              <Typography
                variant="h6"
                textAlign={"center"}
                color={"white"}
                my={5}
              >
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. <br /> Lorem Ipsum Has Been The Industry's Standard.
              </Typography>
              <SecondaryBtn>FREE CONSULTATION</SecondaryBtn>
            </Box>{" "}
          </SOS>
        </Box>
      </Box>
    </section>
  );
};

export default HomeSecFive;
