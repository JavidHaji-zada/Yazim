import { Subtitle, Title } from "@components";
import { Article, Tag, User } from "@models";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import { Style } from "@types";
import { DateUtils } from "@utils/dateUtils";
import Image from "next/image";

interface TagBoxProps {
  tag: Tag;
}

export function TagBox(props: TagBoxProps): JSX.Element {
  const { tag } = props;
  const theme = useTheme();
  const styles = useTagBoxStyles(theme);
  return (
    <Box sx={styles.container}>
      <Typography>{tag.name}</Typography>
    </Box>
  );
}

interface ArticleTagsProps {
  tags: Tag[];
}

function ArticleTags(props: ArticleTagsProps): JSX.Element {
  const { tags } = props;
  const theme = useTheme();
  const styles = useStyles(theme);
  if (tags?.length <= 0) return <></>;

  const renderTag = (tag: Tag) => {
    return <TagBox key={tag.id} tag={tag} />;
  };

  return (
    <Box display="flex" sx={styles.container}>
      {tags.map(renderTag)}
    </Box>
  );
}

const useStyles = (theme: Theme): Style => ({
  container: {
    marginTop: 2,
  },
});

const useTagBoxStyles = (theme: Theme): Style => ({
  container: {
    paddingTop: 0.5,
    paddingBottom: 0.5,
    paddingLeft: 2,
    paddingRight: 2,
    minWidth: 75,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
    borderRadius: 2,
  },
});

export default ArticleTags;
