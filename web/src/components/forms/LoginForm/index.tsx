import { useReducer, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import useStyles from "./styles";

export function LoginForm(): JSX.Element {
  const theme = useTheme();
  const styles = useStyles(theme);
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, togglePasswordVisibility] = useReducer(
    (state) => !state,
    false
  );
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <FormControl sx={{ width: "100%" }}>
      <TextField
        label="E-poçt"
        placeholder="cavid@gmail.com"
        sx={styles.input}
        value={usernameOrEmail}
        type="email"
        onChange={(e) => setUsernameOrEmail(e.target.value)}
      />
      <TextField
        label="Şifrə"
        placeholder="********"
        type={passwordVisible ? "text" : "password"}
        sx={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button onClick={togglePasswordVisibility}>
              {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Button>
          ),
        }}
      />
      <Button variant="contained" sx={styles.loginBtn}>
        Daxil Ol
      </Button>
      <Button sx={styles.forgotPass}>
        <Typography>Şifrəmi Unutdum</Typography>
      </Button>
    </FormControl>
  );
}
