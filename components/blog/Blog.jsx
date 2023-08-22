import AOS from "@/templates/AOS";
import Section from "@/templates/Section";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Blog = () => {
  const blog = [
    {
      id: 1,
      title: "Wonderful Serenity Has Taken",
      description:
        "wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy",
      img: "/images/blog/1.jpg",
    },
    {
      id: 2,
      title: "Of My Entire Soul",
      description:
        "wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy",
      img: "/images/blog/2.jpg",
    },
    {
      id: 3,
      title: "Serenity Has Taken Possession",
      description:
        "wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy",
      img: "/images/blog/3.jpg",
    },
    {
      id: 4,
      title: "Suffered Have Majority",
      description:
        "wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy",
      img: "/images/blog/4.jpg",
    },
    {
      id: 5,
      title: "Majority Have Suffered",
      description:
        "wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy",
      img: "/images/blog/5.jpg",
    },
    {
      id: 6,
      title: "Majority Have Suffered",
      description:
        "wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy",
      img: "/images/blog/6.jpg",
    },
  ];
  return (
    <Section>
      <Grid container spacing={5}>
        {blog.map((e) => (
          <Grid item xs={12} sm={4} key={e.id}>
            <AOS>
              <img src={e.img} alt={e.title} width={"100%"} />
              <Typography
                variant="h5"
                fontWeight={"bold"}
                my={3}
                textAlign={"center"}
                color={"primary"}
              >
                {e.title}
              </Typography>
              <Typography textAlign={"center"}>{e.description}</Typography>
            </AOS>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Blog;
