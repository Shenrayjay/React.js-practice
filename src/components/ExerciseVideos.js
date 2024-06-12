import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  //console.log(exerciseVideos);
  if (!exerciseVideos.length) return "Loading...";
  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="30px"
      >
        觀看{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        的相關影片
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {/* slice(0,?) 決定顯示幾個影片 */}
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="black">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#ff2625">
                <span style={{ color: "black" }}>頻道名稱 : </span>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
