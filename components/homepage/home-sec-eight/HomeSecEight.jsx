"use client";
import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

register();

const HomeSecEight = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      autoplay: true,
      loop: true,
      slidesPerView: 5,
      spaceBetween: 50,
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  const images = [
    "/images/client_logo/client_logo-1.png",
    "/images/client_logo/client_logo-2.png",
    "/images/client_logo/client_logo-3.png",
    "/images/client_logo/client_logo-4.png",
    "/images/client_logo/client_logo-5.png",
    "/images/client_logo/client_logo-1.png",
    "/images/client_logo/client_logo-2.png",
    "/images/client_logo/client_logo-3.png",
    "/images/client_logo/client_logo-4.png",
    "/images/client_logo/client_logo-5.png",
    "/images/client_logo/client_logo-1.png",
    "/images/client_logo/client_logo-2.png",
    "/images/client_logo/client_logo-3.png",
    "/images/client_logo/client_logo-4.png",
    "/images/client_logo/client_logo-5.png",
    "/images/client_logo/client_logo-1.png",
    "/images/client_logo/client_logo-2.png",
    "/images/client_logo/client_logo-3.png",
    "/images/client_logo/client_logo-4.png",
    "/images/client_logo/client_logo-5.png",
  ];
  return (
    <Section>
      <swiper-container ref={swiperRef} init="false">
        {images.map((img, index) => (
          <swiper-slide key={index}>
            <Box>
              <img src={img} alt="company logo" width={"100%"} height={70} />
            </Box>
          </swiper-slide>
        ))}
      </swiper-container>
    </Section>
  );
};

export default HomeSecEight;
