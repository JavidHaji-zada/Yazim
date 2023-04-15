import { Box, Theme, Typography, useTheme } from "@mui/material";
import { Style } from "@types";

interface ArticleBodyProps {
  content: string;
}

function ArticleBody(props: ArticleBodyProps): JSX.Element {
  const { content } = props;
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <Box>
      <Typography>{content}</Typography>
    </Box>
  );
}

const useStyles = (theme: Theme): Style => ({});

export default ArticleBody;
