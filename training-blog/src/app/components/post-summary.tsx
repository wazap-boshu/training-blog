import { FC } from "react";
import { Box, Typography } from "../../../node_modules/@mui/material/index";
import Link from "../../../node_modules/next/link";
import { Post } from "../models/post";

interface PostSummaryProps {
  post: Post
}

export const PostSummary: FC<PostSummaryProps> = (props) => {
  const { post } = props;

  const content = () => {
    return post.content.replace("\\n", "").slice(0, 50);
  }

  return (
    <Box
      sx={{
        m: 1,
        border: 1,
      }}
    >
      <Link href={`/posts/${post.id}`}>
        <Typography
          variant={"h4"}
        >
          {post.title}
        </Typography>
      </Link>
      <Typography>
        投稿日: {
          post.date.toLocaleString("ja-JP", {
            year: "numeric", month: "2-digit",
            day: "2-digit"
          })}
      </Typography>
      <Typography>
        {content()}
      </Typography>
    </Box>
  )
}