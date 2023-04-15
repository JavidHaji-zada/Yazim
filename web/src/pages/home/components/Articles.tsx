import { ArticleBox } from "@components";
import { useArticles } from "@hooks/useArticles";
import { Article } from "@models";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import { RequestStatus, Style } from "@types";
import { HOME_CONTENT_MAX_WIDTH } from "../Home.constants";

function HomeArticles(): JSX.Element {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { data: articles, error, status } = useArticles();

  if (error || !articles)
    return <Typography>Yazıları yükləyərkən xəta baş verdi</Typography>;
  if (status === RequestStatus.LOADING)
    return <Typography>Yazılar yüklənir...</Typography>;

  const renderArticle = (article: Article) => {
    return (
      <Box sx={styles.item}>
        <ArticleBox article={article} />
      </Box>
    );
  };

  return <Box sx={styles.container}>{articles.map(renderArticle)}</Box>;
}

const useStyles = (theme: Theme): Style => ({
  container: {
    width: "100%",
    maxWidth: HOME_CONTENT_MAX_WIDTH,
  },
  item: {
    marginTop: 2,
  },
});

export default HomeArticles;
