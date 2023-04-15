import { TagDTO } from "./DTO";

export class Tag {
  id: number;
  name: string;

  constructor(details: TagDTO) {
    this.id = details.id;
    this.name = details.name;
  }
}
