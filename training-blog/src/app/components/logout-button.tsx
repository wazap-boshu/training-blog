import { Button } from "@mui/material";
import { FC } from "react";
import { signOut } from "next-auth/react";

interface LogOutButtonProps {

}

export const LogOutButton: FC<LogOutButtonProps> = (props) => {
  return (
    <Button
      onClick={() => signOut()}
      variant="contained"
    >
      ログアウト
    </Button>
  )
}