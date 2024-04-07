import React, { Children, FC } from "react";
import { Typography } from "../../../node_modules/@mui/material/index";

interface MultipleTypographyProps {
  sx?: any
  children: React.ReactNode
}

export const MultipleTypography: FC<MultipleTypographyProps> = (props) => {
  const { sx } = props;

  if (!(props.children as string)) {
    return <></>
  }

  const splited = () => {
    return (props.children as string).split("\\n") as string[];
  }

  return (
    <>
      {
        splited().map(text => {
          return (
            <Typography
              key={text}
              sx={sx}
            >
              {text}
            </Typography>
          )
        })
      }
    </>
  )
}