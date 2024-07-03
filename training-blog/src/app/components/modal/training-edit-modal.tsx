import { InputLabel, Select, TextField, Input, FormLabel, Typography, FormControl, Modal, MenuItem } from "@/app/libs/mui"
import { Box, Stack } from "@mui/system"
import { FC, useState } from "react";
import { Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Controller, SubmitHandler, useForm, UseFormRegister, UseFormHandleSubmit } from "react-hook-form"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TrainingRepository } from "@/app/repositories/training-repository";
import CircularProgress from '@mui/material/CircularProgress';

interface TrainingEditModalProps {
  prop: {
    open: boolean,
    isBusy: boolean,
    register: UseFormRegister<TrainingFormInputType>
  },
  action: {
    startEdit: () => void
    close: () => void
  },
  handler: {
    handleSubmit: UseFormHandleSubmit<TrainingFormInputType, undefined>
    onSubmit: SubmitHandler<TrainingFormInputType>
  }
}

type TrainingFormInputType = {
  trainingName: string,
  weight: string,
  reps: string,
  set: string,
  date: Date
};

const TrainingEditModal: FC<TrainingEditModalProps> = (props) => {
  const { prop, action, handler } = props;

  const {
    close,
    startEdit
  } = action;

  const {
    register,
    isBusy,
    open,
  } = prop

  const {
    onSubmit,
    handleSubmit
  } = handler

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#EEE',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
        <Stack spacing={3} sx={style}>
          <FormControl>
            <InputLabel id="trainingName">メニュー</InputLabel>
            <Select
              labelId="trainingName"
              id="trainingName"
              label="セレクトボックス"
              defaultValue="BENCH_PRESS"
              {...register("trainingName")}
            >
              <MenuItem value={"BENCH_PRESS"}>ベンチプレス</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <Input defaultValue={new Date()} {...register("date")} type={'date'} />
          </FormControl>
          <FormControl>
            <InputLabel id="weight">重量(kg)</InputLabel>
            <Input  {...register("weight", { required: true })} type={"number"}></Input>
          </FormControl>
          <FormControl>
            <InputLabel id="reps">レップ数</InputLabel>
            <Input  {...register("reps", { required: true })} type={"number"}></Input>
          </FormControl>
          <FormControl>
            <InputLabel id="set">セット数</InputLabel>
            <Input  {...register("set", { required: true })} type={"number"}></Input>
          </FormControl>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
          >
            {isBusy ? <CircularProgress /> : "ボタン"}
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

const useTraininigEditModal = (): TrainingEditModalProps => {
  const startEdit = () => {
    setOpen(true)
  }

  const close = () => {
    if (isBusy) return
    setOpen(false);
  }

  const { register, handleSubmit } = useForm<TrainingFormInputType>()

  const onSubmit: SubmitHandler<TrainingFormInputType> = async (data) => {
    setBusy(true)
    // データの中身を検証する
    try {

      const response = await new TrainingRepository().save(
        data.trainingName,
        Number(data.weight),
        Number(data.reps),
        Number(data.set),
        new Date(data.date),
      )
    } catch(error) {
      console.log(error)
    }

    close()
    setBusy(false)
  }

  const [open, setOpen] = useState<boolean>(false);

  const [isBusy, setBusy] = useState<boolean>(false);

  return {
    prop: {
      open,
      isBusy,
      register
    },
    action: {
      startEdit,
      close,
    },
    handler: {
      onSubmit,
      handleSubmit,
    }
  }
}

export {
  useTraininigEditModal,
  TrainingEditModal,
}