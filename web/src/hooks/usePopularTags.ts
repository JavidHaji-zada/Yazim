import { Tag } from "@models";
import { FetchStatus } from "@types";
import { useQuery } from "./useQuery";

export function usePopularTags(): FetchStatus<Tag[]> {
  const tagQuery = useQuery<Tag[]>(getPopularTags);

  async function getPopularTags() {
    // TODO get tags from API
    const defaultTag = new Tag({ id: 0, name: "Son Paylaşılanlar" });
    return [defaultTag];
  }
  return tagQuery;
}
