"use client"
import { Button } from "@mui/base";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { SessionProvider, useSession } from "next-auth/react"
import { AuthenticationItem } from "./components/authentication-item";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" fontWeight="bold" component="div"
            sx={
              {
                flexGrow: 1,
                

              }
            }>
            Trainlog
          </Typography>
          <AuthenticationItem />
        </Toolbar>
      </AppBar>
      {children}
    </SessionProvider>
  );
}