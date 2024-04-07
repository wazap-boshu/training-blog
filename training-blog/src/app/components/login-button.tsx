import { Button } from "@mui/base";
import { FC } from "react";
import {signIn, signOut} from "next-auth/react";

interface LogInButtonProps {

}

export const LogInButton: FC<LoginButtonProps> = (props) => {
  return (
    <Button
      onClick={() => signIn()}
    >
      ログイン
    </Button>
  )
}