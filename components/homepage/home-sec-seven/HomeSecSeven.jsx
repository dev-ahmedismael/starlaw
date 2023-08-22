"use client";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

register();

const HomeSecSeven = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      autoplay: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section>
      <Box position={"relative"}>
        <img
          src="/images/testimonial_bg.png"
          alt="Man in library banner"
          width={"100%"}
          height={500}
        />
        <Box
          position={"absolute"}
          zIndex={5}
          top={0}
          left={0}
          width={"100%"}
          height={500}
          py={10}
        >
          <Container>
            <Typography variant="h3" mb={5} color={"white"}>
              What People Say
            </Typography>
            <Box display={"flex"}>
              <Box mr={5}>
                <img
                  src="/images/testimonial-icone.png"
                  alt="Testimonial icon"
                />
              </Box>
              <Box width={"80%"}>
                <swiper-container ref={swiperRef} init="false">
                  <swiper-slide>
                    <Box>
                      <Typography variant="h6" mb={5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At error <br /> doloremque dolore asperiores, iure
                        perferendis corrupti fuga rerum.
                      </Typography>
                      <Typography variant="h6" color={"white"}>
                        - by bittu Lee, Company CEO
                      </Typography>
                    </Box>
                  </swiper-slide>
                  <swiper-slide>
                    <Box>
                      <Typography variant="h6" mb={5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At error <br /> doloremque dolore asperiores.
                      </Typography>
                      <Typography variant="h6" color={"white"}>
                        - by James Bond, MI6 Agent - 007
                      </Typography>
                    </Box>
                  </swiper-slide>
                </swiper-container>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </section>
  );
};

export default HomeSecSeven;
