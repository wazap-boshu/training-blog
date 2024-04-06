import { prisma } from "../libs/prisma";
import { Post } from "../models/post";

export class PostRepository {
  constructor() {

  }

  save(
    post: Post
  ) {
  
  }

  async get() {
    
    const response = await fetch("api/posts");

    if (response.ok) {
      const data = await response.json() as Array<any>

      // TODO: デコーダ
      return data.map(element => {
        return new Post(element.id, element.title, element.content, new Date(element.date))
      });
    }
  }
}