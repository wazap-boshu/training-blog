import { Button } from "@mui/material";
import { FC } from "react";
import { signIn } from "next-auth/react";

interface LogInButtonProps {

}

export const LogInButton: FC<LogInButtonProps> = (props) => {
  return (
    <Button
      onClick={() => signIn()}
      variant="contained"
    >
      ログイン
    </Button>
  )
}