import { Article, Tag, User } from "@models";
import { FetchStatus } from "@types";
import { useQuery } from "./useQuery";

export function useArticles(): FetchStatus<Article[]> {
  const articleQuery = useQuery<Article[]>(getArticles);

  async function getArticles() {
    // TODO get articles from API
    const defaultArticle = new Article({
      id: 0,
      title: "Musiqisi olan ədəd",
      body: "Çevrənin uzunluğunun öz diametrinə olan nisbətinə bərabər ədədə “pi” deyilir. Bu ədəd bir çox məsələlərə görə məşhurdur. İrrasional ədəd olduğu üçün dövri olmayan sonsuz onluq kəsr şəklində davam edir. Hələ də riyaziyyatçılar onun vergüldən sonrakı ədədlərini tapmaqda davam edirlər. Bu barədə ən sonuncu nailiyyət super kompüterlər vasitəsilə pi ədədinin vergüldən sonra 100 trilyonuncu ədədinin tapılmasıdır. Əslində pi ədədi sadəcə irrasional ədəd deyil. Həm də transsendent ədəddir. Bu ədədlər heç bir çoxhədli tənliyin kökü ola bilmirlər. Məsələn √2 ədədi də irrasional ədəddir. Lakin, bu ədəd transsendent ədəd deyil. Belə ki, bu ədəd X²-2=0 tənliyinin köküdür. Tənlikdə X=√2 olur.",
      author: {
        id: 0,
        username: "turalgaragashli",
        first_name: "Tural",
        last_name: "Qaraqaşlı",
        created_at: new Date().toString(),
        profile_picture:
          "https://turalgaragashli.com/wp-content/uploads/2021/09/200340122_501609787925449_8514774954201766948_n-300x300.jpg",
        bio: "Mən Tural Qaraqaşlı bütün yazdıqlarımı və bəlkə gələcəkdə yazacaqlarımı da bir arada toplamaq üçün bu blog saytı yaratdım",
      },
      created_at: new Date().toString(),
      updated_at: new Date().toString(),
      activity: {
        view_count: 100,
        like_count: 10,
      },
      tags: [new Tag({ id: 0, name: "Musiqi" })],
      readingTime: 12,
    });
    const articles: Article[] = Array(20)
      .fill(defaultArticle)
      .map((a, idx) => ({ ...a, id: idx }));
    return articles;
  }
  return articleQuery;
}
