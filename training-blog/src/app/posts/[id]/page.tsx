"use client"
import { PostDetail } from "@/app/components/post-detail";
import { Post } from "@/app/models/post";
import { PostRepository } from "@/app/repositories/post-repository";
import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "../../../../node_modules/next/navigation"

export default function PostPage() {

  const params = useParams();

  const { id } = params;

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const prepare = async () => {
      const post = await new PostRepository().getById(id as string);
      setPost(post);
    }
    prepare();
  }, [])

  return (<>{
    post &&
    <PostDetail
      post={post}
    />
  }
  </>)
}