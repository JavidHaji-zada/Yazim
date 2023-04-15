import { UserDTO } from "./UserDTO";

export interface CommentDTO {
  id: number;
  created_at: string;
  body: string;
  user: UserDTO;
  like_count?: number;
}
