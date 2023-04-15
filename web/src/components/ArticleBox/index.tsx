import { Subtext, Title } from "@components/Text";
import { Article } from "@models";
import { Box, Theme, useTheme } from "@mui/material";
import { Style } from "@types";
import Activity from "./Activity";
import ArticleTags from "./Tags";
import Author from "./Author";
import Body from "./Body";
import ShadowedCard from "@components/ShadowedCard";

interface ArticleBoxProps {
  article: Article;
}

function ArticleBox(props: ArticleBoxProps): JSX.Element {
  const { article } = props;
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <ShadowedCard sx={styles.container}>
      <Author author={article.author} publishDate={article.createdAt} />
      <Title sx={styles.title}>{article.title}</Title>
      <ArticleTags tags={article.tags} />
      <Subtext sx={styles.readingTime}>{article.readableReadingTime}</Subtext>
      <Box sx={styles.body}>
        <Body content={article.body} />
      </Box>
      <Box alignSelf="center" marginTop={4}>
        <Activity activity={article.activity} />
      </Box>
    </ShadowedCard>
  );
}

const useStyles = (theme: Theme): Style => ({
  container: {
    borderRadius: 4,
    backgroundColor: "#ffffff",
    padding: 3,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginTop: 2,
  },
  readingTime: {
    marginTop: 2,
  },
  body: {
    marginTop: 1,
  },
});

export default ArticleBox;
