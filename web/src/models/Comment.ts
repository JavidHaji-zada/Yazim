import { CommentDTO } from "./DTO";
import { User } from "./User";

export class Comment {
  id: number;
  body: string;
  user: User;
  createdAt: Date;
  likeCount: number;

  constructor(details: CommentDTO) {
    this.id = details.id;
    this.body = details.body;
    this.user = new User(details.user);
    this.createdAt = new Date(details.created_at);
    this.likeCount = details.like_count || 0;
  }
}
