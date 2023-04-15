import { Subtext } from "@components/Text";
import { ArticleActivity } from "@models";
import { Box } from "@mui/material";

interface ArticleActivityProps {
  activity: ArticleActivity;
}

function ArticleActivity(props: ArticleActivityProps): JSX.Element {
  const { activity } = props;
  const { viewCount, likeCount } = activity;

  return (
    <Box display="flex" flexDirection="row">
      <Subtext>{viewCount}</Subtext>
      <Subtext sx={{ marginLeft: 4 }}>{likeCount}</Subtext>
    </Box>
  );
}

export default ArticleActivity;
