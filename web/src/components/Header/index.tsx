import { Box, Button, useTheme } from "@mui/material";
import { AppRoute } from "@types";
import Link from "next/link";
import { useRouter } from "next/router";
import useStyles from "./styles";

const invisibleRoutes: AppRoute[] = [];

function Header() {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { route } = useRouter();

  if (invisibleRoutes.includes(route as AppRoute)) return <></>;
  return (
    <Box sx={styles.container}>
      <Link href="/">Yazım</Link>
      <Box display="flex" flexDirection="row">
        {(route as AppRoute) !== "/login" && (
          <Button href="/login">Daxil ol</Button>
        )}
        {(route as AppRoute) !== "/register" && (
          <Button href="/register" variant="contained">
            Qeydiyyat
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Header;
