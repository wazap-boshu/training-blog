"use client"
import { Button, Typography } from "@mui/material";
import { PostRepository } from "@/app/repositories/post-repository";
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { NeedLogin } from "@/app/components/need-login";


export default function PostCreatePage() {
  const router = useRouter()

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value)
  }

  const handleChangeContent = (e: any) => {
    setContent(e.target.value)
  }

  const handleClickPostButton = async () => {
    if (!title || !content) {
      // バリデーション
      return
    }
    const created = await new PostRepository().save(title, content);

    // 作成されたポストの画面に遷移する
    router.push(`/posts/${created.id}`)
  }

  return (
    <NeedLogin>
      <Box
        sx={{ m: 1, p: 3 }}
      >
        <Typography
          variant={"body1"}
        >
          プレビュー
        </Typography>
        <ReactMarkdown
          className={"markdown"}
        >
          {content}
        </ReactMarkdown>
        <TextField
          required
          id="outlined-required"
          label="Required"
          fullWidth
          onChange={handleChangeTitle}
        />
        <br />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rows={5}
          fullWidth
          onChange={handleChangeContent}
        />
        <Button
          variant="contained"
          onClick={handleClickPostButton}
        >
          投稿する
        </Button>
      </Box>
    </NeedLogin>
  )
}