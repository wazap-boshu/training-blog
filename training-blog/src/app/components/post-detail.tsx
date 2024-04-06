import { FC } from "react"
import { Box, Typography } from "../../../node_modules/@mui/material/index"
import { Post } from "../models/post"


interface PostDetailProps {
  post: Post
}

export const PostDetail: FC<PostDetailProps> = (props) => {
  const { post } = props

  return (
    <Box
      sx={{
          m: 1,
          border: 1,
        }}
    >
      <Typography
        variant={"h1"}
      >
        {post.title}
      </Typography>

      <Typography>
        投稿日: {post.date.getDate()}
      </Typography>
      <Typography>
        {post.content}
      </Typography>

    </Box>
  )
}