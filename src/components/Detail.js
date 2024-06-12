import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail; //解構從父元件傳遞下來的 exerciseDetail
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      text: "部位", // 添加中文描述
    },
    {
      icon: TargetImage,
      name: target,
      text: "目標肌群", // 添加中文描述
    },
    {
      icon: EquipmentImage,
      name: equipment,
      text: "使用器材", // 添加中文描述
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h2">{name}</Typography>
        <Typography variant="h5">
          Exercises keep you strong.
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>{name}</span>
          {` `}is one of the best exercises to target your{" "}
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>{target}</span>
          .It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
              <p style={{ color: "black" }}>{item.text}</p>
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
