import { ArticleDTO, TagDTO } from "./DTO";
import { Tag } from "./Tag";
import { User } from "./User";

export interface ArticleActivity {
  viewCount: number;
  likeCount: number;
}

export class Article {
  id: number;
  title: string;
  body: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  tags: Tag[];
  readingTime: number; // in minutes
  activity: ArticleActivity;

  constructor(details: ArticleDTO) {
    this.id = details.id;
    this.title = details.title;
    this.body = details.body;
    this.author = new User(details.author);
    this.createdAt = new Date(details.created_at);
    this.updatedAt = new Date(details.updated_at);
    this.tags = details.tags?.map((tag: TagDTO) => new Tag(tag));
    this.readingTime = details.readingTime || 0;
    this.activity = {
      likeCount: details.activity.like_count,
      viewCount: details.activity.view_count,
    };
  }

  get readableReadingTime(): string {
    if (this.readingTime < 60) {
      return `${this.readingTime} dəqiqə oxu`;
    }
    return `${Math.floor(this.readingTime / 60)} saat oxu`;
  }
}
