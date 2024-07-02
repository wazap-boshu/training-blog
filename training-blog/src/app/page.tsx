"use client";

import { Typography, Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import { PostSummary } from "./components/post-summary";
import { Post } from "./models/post";
import { PostRepository } from "./repositories/post-repository";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { TrainingRepository } from "./repositories/training-repository";
import { TrainingCard } from "./components/training-cards";
import { Training } from "./models/training";
import { TrainingEditModal, useTraininigEditModal } from "./components/modal/training-edit-modal";
import { Box } from "@mui/system";

export default function Home() {
  const [trainings, setTrainings] = useState<Training[]>([]);

  const { data: session, status } = useSession();

  const router = useRouter()

  const trainingEditModal = useTraininigEditModal()

  useEffect(() => {
    const init = async () => {
      console.log(session?.user?.email)
      if (!session?.user?.email) { return }
      const trainings = await new TrainingRepository().getByUserId(session!.user!.email!)
      console.log(trainings)
      setTrainings(trainings)
    }
    init();
  }, [session])

  // TODO: 専用クラス化する
  const isAdmin = () => {
    // TODO: セキュリティ上の脆弱性がある？
    return session?.user?.email == process.env.NEXT_PUBLIC_ADMIN_USER;
  }

  const handleClickCreateButton = () => {
    trainingEditModal.action.startEdit()
  }

  return (
    <Box
      sx={{
        height: "500px"
      }}
    >
      <Grid container>
        <Grid item xs={10}>
          <Typography
            variant="body1"
          >
            グラフ
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            alignItems: "right"
          }}>
          {
            <Button
              variant="contained"
              onClick={handleClickCreateButton}
            >
              記録する
            </Button>
          }
        </Grid>
      </Grid>
      {trainings.map(training => {
        return (
          <TrainingCard
            key={training.id}
            training={training}
          />
        )
      })}
      <TrainingEditModal
        {...trainingEditModal}
      />
    </Box>
  );
}