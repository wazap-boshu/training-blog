"use client"
import { PostDetail } from "@/app/components/post-detail";
import { Post } from "@/app/models/post";
import { PostRepository } from "@/app/repositories/post-repository";
import { Button } from "@mui/base";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "../../../../node_modules/next/navigation"

export default function PostPage() {

  const params = useParams();

  const { id } = params;

  const [post, setPost] = useState<Post>();

  const router = useRouter();

  useEffect(() => {
    const prepare = async () => {
      const post = await new PostRepository().getById(id as string);
      setPost(post);
    }
    prepare();
  }, []);

  const handleClickBackBuutton = () => {
    router.back();
  }

  return (
    <>
      {
        post &&
        <PostDetail
          post={post}
        />
      }
      <Button
        onClick={handleClickBackBuutton}
      >
        戻る
      </Button>
    </>
  )
}