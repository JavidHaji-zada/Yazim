import { Box, useTheme } from "@mui/material";
import { Theme, Typography } from "@mui/material";
import { usePopularTags } from "@hooks";
import { Tag } from "@models";
import { RequestStatus, Style } from "@types";
import { HOME_CONTENT_MAX_WIDTH } from "../Home.constants";

export default function PopularTags(): JSX.Element {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { data: tags, error, status } = usePopularTags();

  if (status == RequestStatus.LOADING) return <Typography>...</Typography>;
  if (error || !tags) return <></>;

  const renderTag = (tag: Tag) => {
    return <Typography>{tag.name}</Typography>;
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.tags}>{tags.map(renderTag)}</Box>
      <Box sx={styles.divider} />
    </Box>
  );
}

const useStyles = (theme: Theme): Style => ({
  container: {
    maxWidth: HOME_CONTENT_MAX_WIDTH,
    width: "100%",
  },
  tags: {
    paddingLeft: theme.spacing(1),
  },
  divider: {
    height: theme.spacing(0.15),
    backgroundColor: theme.palette.divider,
    marginTop: 1,
    width: "100%",
  },
});
