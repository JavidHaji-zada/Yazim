import { Subtitle, Title } from "@components";
import { Article, User } from "@models";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import { Style } from "@types";
import { DateUtils } from "@utils/dateUtils";
import Image from "next/image";

const USER_PHOTO_SIZE = 60;

interface ArticleAuthorProps {
  author: User;
  publishDate: Date;
}

function ArticleAuthor(props: ArticleAuthorProps): JSX.Element {
  const { author, publishDate } = props;
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <Box sx={styles.container} display="flex" flexDirection="row">
      <Box>
        {/* TODO change it to Next Image */}
        <img
          src={author.profilePicture}
          alt="İstifadəçi Şəkli"
          width={USER_PHOTO_SIZE}
          height={USER_PHOTO_SIZE}
          style={{ borderRadius: USER_PHOTO_SIZE * 0.5 }}
        />
      </Box>
      <Box sx={styles.userInfoContainer}>
        <Title>{author.name}</Title>
        <Subtitle>{author.usernameWithSymbol}</Subtitle>
        <Subtitle>{DateUtils.formatDate(publishDate, "DD MM YYYY")}</Subtitle>
      </Box>
    </Box>
  );
}

const useStyles = (theme: Theme): Style => ({
  container: {},
  userInfoContainer: {
    marginLeft: 4,
  },
});

export default ArticleAuthor;
