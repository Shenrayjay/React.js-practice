import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="20px" alignItems="center" px="40px" pt="24px">
        <a
          href="https://github.com/Shenrayjay"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <FaGithub size={40} color="black" /> {/* 調整圖示大小 */}
        </a>
        <a
          href="https://github.com/Shenrayjay"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          我的GitHub
        </a>
        <Typography variant="h5" pb="40px" mt="20px">
          用於練習 React.js 和 Material-UI
          <br />
          以及以 RapidAPI 練習 API 的串接
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
