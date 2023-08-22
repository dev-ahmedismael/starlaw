import AOS from "@/templates/AOS";
import SecondaryBtn from "@/templates/SecondaryBtn";
import Section from "@/templates/Section";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const ContactSecOne = () => {
  const leftSec = [
    {
      id: 1,
      title: "Get in Touch",
      content: [
        "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse consequat.",
      ],
    },
    {
      id: 2,
      title: "The Office",
      content: [
        "Address: Regina ST, London, SK 8GH.",
        "Phone: (+44) 123 456 789",
        "Email: email@youradress.com",
      ],
    },
    {
      id: 3,
      title: "Business Hours",
      content: [
        "Monday - Friday: 9am to 5pm",
        "Saturday - 9am to 2pm",
        "Sunday - Closed",
      ],
    },
  ];
  return (
    <Section>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <AOS>
            <Typography variant="h4" color={"primary"} mb={5}>
              Let's Talk about Your Business
            </Typography>
            <form id="contact">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    label="Your Name"
                    variant="standard"
                    fullWidth
                    focused
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Your Email"
                    variant="standard"
                    fullWidth
                    focused
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Subject"
                    variant="standard"
                    fullWidth
                    focused
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    rows={6}
                    label="Message"
                    variant="standard"
                    fullWidth
                    focused
                  />
                </Grid>
                <Grid item xs={12}>
                  <SecondaryBtn
                    variant="contained"
                    sx={{ borderRadius: 0, height: 50, px: 5 }}
                  >
                    Send Message
                  </SecondaryBtn>
                </Grid>
              </Grid>
            </form>
          </AOS>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AOS>
            {leftSec.map((e) => (
              <Box key={e.id} mb={5}>
                <Typography variant="h5" color={"primary"} mb={3}>
                  {e.title}
                </Typography>
                {e.content.map((e, index) => (
                  <Typography key={index} mb={1}>
                    {e}
                  </Typography>
                ))}
              </Box>
            ))}
          </AOS>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ContactSecOne;
