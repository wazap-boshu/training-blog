"use client";

import { Typography, Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import { PostSummary } from "./components/post-summary";
import { Post } from "./models/post";
import { PostRepository } from "./repositories/post-repository";
import { useSession } from "next-auth/react";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const { data: session, status } = useSession();

  useEffect(() => {
    const init = async () => {
      const posts = await new PostRepository().get();
      setPosts(posts)
    }
    init();
  }, [])

  // TODO: 専用クラス化する
  const isAdmin = () => {
    // TODO: セキュリティ上の脆弱性がある？
    return session?.user?.email == process.env.NEXT_PUBLIC_ADMIN_USER;
  }

  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <Typography
            variant="body1"
          >
            記事一覧
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            alignItems: "right"
          }}>
          {
            isAdmin() &&
            <Button
              variant="contained"
            >
              記事作成
            </Button>
          }
        </Grid>
      </Grid>
      {posts.map(post => {
        return (
          <PostSummary
            key={post.id}
            post={post}
          />
        )
      })}
    </>
  );
}