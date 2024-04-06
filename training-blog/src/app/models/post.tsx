export class Post {
  constructor(
    id: string,
    title: string,
    content: string,
    date: Date,
  ) {
    this.id = id
    this.content = content
    this.title = title
    this.date = date
  }

  id: string

  title: string

  content: string

  date: Date
}