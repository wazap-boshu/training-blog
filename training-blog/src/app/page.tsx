"use client";

import { useEffect, useState } from "react";
import { PostDetail } from "./components/post-detail"
import { Post } from "./models/post";
import { PostRepository } from "./repositories/post-repository";
export default function Home() {

  const post = new Post("id", "初めての投稿", "これは初めての投稿", new Date())


  const [txt, setText] = useState<string>();

  useEffect(() => {
    const init = async () => {

      const response = await new PostRepository().get();
      console.log(response)
    }
    init();
  }, [])

  return (
    <>
      {/* ブログのヘッダ */}
      {/* ブログタイトル */}
      {/* ブログ記事一覧ビュー */}
      <h1>これはタイトルです</h1>

      <>これは日々の筋トレ日記</>
      <h2>記事一覧</h2>
      <PostDetail
        post={post}
      ></PostDetail>

      <h2>{txt} </h2>
    </>
  );
}