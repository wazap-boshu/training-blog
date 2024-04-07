import { FC } from "react"
import { Box, Typography } from "../../../node_modules/@mui/material/index"
import { Post } from "../models/post"
import { MultipleTypography } from "./multiple-typography";


interface PostDetailProps {
  post: Post
}

export const PostDetail: FC<PostDetailProps> = (props) => {
  const { post } = props;

  return (
    <Box
      sx={{
        m: 1,
        border: 1,
      }}
    >
      <Typography
        variant={"h3"}
      >
        {post.title}
      </Typography>
      <Typography>
        投稿日: {post.date.toLocaleString("ja-JP", {
          year: "numeric", month: "2-digit",
          day: "2-digit"
        })}
      </Typography>
      <MultipleTypography>
        {post.content}
      </MultipleTypography>
    </Box>
  )
}