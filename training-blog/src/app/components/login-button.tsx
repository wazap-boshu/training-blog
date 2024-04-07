import { Button } from "@mui/base";
import { FC } from "react";
import {signIn, signOut} from "next-auth/react";

interface LogInButtonProps {

}

export const LogInButton: FC<LogInButtonProps> = (props) => {
  return (
    <Button
      onClick={() => signIn()}
    >
      ログイン
    </Button>
  )
}