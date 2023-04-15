import { TagDTO } from "./TagDTO";
import { UserDTO } from "./UserDTO";

export interface ArticleActivityDTO {
  view_count: number;
  like_count: number;
}

export interface ArticleDTO {
  id: number;
  title: string;
  body: string;
  author: UserDTO;
  created_at: string;
  updated_at: string;
  tags: TagDTO[];
  readingTime: number;
  activity: ArticleActivityDTO;
}
