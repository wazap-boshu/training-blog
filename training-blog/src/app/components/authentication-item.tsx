"use client"
import { useSession } from "next-auth/react"
import { LogInButton } from "./login-button"
import { Typography } from "@mui/material";
import { FC } from "react";
import { LogOutButton } from "./logout-button";


interface AuthenticationItemProps {

}
export const AuthenticationItem: FC<AuthenticationItemProps> = (props) => {

  const { data: session, status } = useSession()
  
  if (status == "authenticated") {
    return (
      <>
        <Typography sx={{mr: 1}}>
          {session!.user!.email}
        </Typography>
        <LogOutButton />
      </>
    )
  } else {
    return <LogInButton />
  }
}