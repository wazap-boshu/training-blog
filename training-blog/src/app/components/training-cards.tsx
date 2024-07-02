import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Training } from "../models/training";

interface TodayTrainingProps {
  training: Training
}

export const TrainingCard: FC<TodayTrainingProps> = (props) => {
  const { training } = props;

  return (
    <Box
      sx={{
        m: 1,
        border: 1,
      }}
    >
      <Typography
        variant={"h4"}
      >
        {training.trainingName}
      </Typography>
      <Typography
        variant={"h4"}
      >
        TRAINING: {training.trainingName}
      </Typography>
      <Typography
        variant={"h4"}
      >
        REPS: {training.reps}
      </Typography>
      <Typography
        variant={"h4"}
      >
        WEIGHT: {training.weight}
      </Typography>
      <Typography
        variant={"h4"}
      >
        SET: {training.set}
      </Typography>
    </Box>
  )
}