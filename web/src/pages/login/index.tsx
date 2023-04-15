import { Box, useTheme } from "@mui/material";
import ShadowedCard from "@components/ShadowedCard";
import { LoginForm, Title } from "@components";
import useStyles from "./styles";

function LoginPage(): JSX.Element {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.container}>
      <ShadowedCard sx={styles.loginBox}>
        <Title>Hesabınıza daxil olun</Title>
        <Box sx={styles.form}>
          <LoginForm />
        </Box>
      </ShadowedCard>
    </Box>
  );
}

export default LoginPage;
