import { DEFAULT_USER_PHOTO } from "@constants/constants";
import { UserDTO } from "./DTO";

export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  profilePicture: string;
  bio?: string;

  constructor(details: UserDTO) {
    this.id = details.id;
    this.username = details.username;
    this.firstName = details.first_name;
    this.lastName = details.last_name;
    this.createdAt = new Date(details.created_at);
    this.profilePicture = details.profile_picture || DEFAULT_USER_PHOTO;
    this.bio = details.bio;
  }

  get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get usernameWithSymbol(): string {
    return "@" + this.username;
  }
}
