import { Box, useTheme } from "@mui/material";
import { HomeArticles, PopularTags } from "./components";
import useStyles from "./styles";

function HomePage(): JSX.Element {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.container}>
      <PopularTags />
      <Box sx={styles.articles}>
        <HomeArticles />
      </Box>
    </Box>
  );
}

export default HomePage;
