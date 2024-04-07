"use client";

import { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import { PostDetail } from "./components/post-detail"
import { PostSummary } from "./components/post-summary";
import { Post } from "./models/post";
import { PostRepository } from "./repositories/post-repository";
export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const init = async () => {
      const posts = await new PostRepository().get();
      setPosts(posts)
    }
    init();
  }, [])

  return (
    <>
      {/* ブログのヘッダ */}
      {/* ブログタイトル */}
      {/* ブログ記事一覧ビュー */}
      <h1>ブログ</h1>

      <>日々の筋トレ日記</>
      <h2>記事一覧</h2>
      <Link href={"/post/1"}>これはリンク </Link>
      {posts.map(post => {
        return (
          <PostSummary
            post={post}
          />
        )
      })}
    </>
  );
}