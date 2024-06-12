import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    // sx 為 MUI 語法，允許使用 JavaScript 語法來定義樣式，不用在 CSS 使用 @media
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Shen's Gym Library
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="30px"
        mt="30px"
      >
        Lift，Smile
        <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={5}>
        找出最有效、最適合自己的健身動作
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        尋找健身動作
      </Button>
      <img
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
        style={{ zIndex: 10 }}
      />
      <Typography
        fontWeight="600"
        fontSize="200px"
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercises
      </Typography>
    </Box>
  );
};

export default HeroBanner;
