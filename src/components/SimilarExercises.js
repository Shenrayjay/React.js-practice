import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
    <Typography
      sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      針對{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        相同肌群
      </span>{" "}
      的訓練動作
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollBar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
        ml: "20px",
        mt: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      使用{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        相同器材
      </span>{" "}
      的訓練動作
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollBar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
