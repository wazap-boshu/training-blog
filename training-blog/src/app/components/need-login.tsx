import { signIn, useSession } from "next-auth/react"
import React from "react";
import { FC } from "react";
import { Button } from "@mui/material";

interface NeedLoginProps {
  asAdmin?: true
  children: React.ReactNode
}

export const NeedLogin: FC<NeedLoginProps> = (props) => {
  const { data: session, status } = useSession()

  const { asAdmin } = props;

  if (status === "loading") {
    return <></>
  }

  const loginButton = () => {
    return (
      <Button
        onClick={() => { signIn() }}
        variant={"contained"}
      >
        ログイン
      </Button>
    )
  }

  if (!session) {
    return loginButton();
  }
  if (asAdmin && (session!.user!.email! !== process.env.NEXT_PUBLIC_ADMIN_USER)) {
    return loginButton();
  }
  return props.children ?? <></>
}
