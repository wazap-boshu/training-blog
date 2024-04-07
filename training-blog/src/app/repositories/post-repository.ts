import { prisma } from "../libs/prisma";
import { Post } from "../models/post";

export class PostRepository {
  constructor() {

  }

  save(
    post: Post
  ) {
    // TODO: 
  }

  /**
   * すべてのポストを取得する
   * @returns ポスト一覧
   */
  async get() {
    const response = await fetch("api/posts");

    if (response.ok) {
      const data = await response.json() as Array<any>

      // TODO: デコーダ
      return data.map(element => {
        return new Post(element.id, element.title, element.content, new Date(element.date))
      });
    } else {
      return [];
    }
  }

  /**
   * IDでポストを取得する
   * @param id ID
   * @returns IDに関連するポスト
   */
  async getById(id: string) {
    const response = await fetch(`/api/posts/${id}`);

    if (response.ok) {
      const data = await response.json();

      // TODO: ファクトリ？
      return new Post(
        data.id,
        data.title,
        data.content,
        new Date(data.date)
      );

    } else {
      throw Error("CONTENT NOT EXIST");
    }
  }
}