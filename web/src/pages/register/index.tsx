import { Box, useTheme } from "@mui/material";
import ShadowedCard from "@components/ShadowedCard";
import { RegisterForm, Title } from "@components";
import useStyles from "./styles";

function RegisterPage(): JSX.Element {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.container}>
      <ShadowedCard sx={styles.loginBox}>
        <Title>Hesabı Yarat</Title>
        <Box sx={styles.form}>
          <RegisterForm />
        </Box>
      </ShadowedCard>
    </Box>
  );
}

export default RegisterPage;
