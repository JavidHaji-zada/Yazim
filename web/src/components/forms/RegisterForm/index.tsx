import { Button, FormControl, TextField, useTheme } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useReducer, useState } from "react";
import useStyles from "./styles";

export function RegisterForm(): JSX.Element {
  const theme = useTheme();
  const styles = useStyles(theme);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
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
        value={form.email}
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <TextField
        label="İstifadəçi adı"
        placeholder="@elxan001"
        sx={styles.input}
        value={form.username}
        type="text"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <TextField
        label="Ad"
        placeholder="Elxan"
        sx={styles.input}
        value={form.firstName}
        type="text"
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />
      <TextField
        label="Soyad"
        placeholder="Balakişiyev"
        sx={styles.input}
        value={form.lastName}
        type="text"
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />
      <TextField
        label="Şifrə"
        placeholder="********"
        value={form.password}
        type={passwordVisible ? "text" : "password"}
        sx={styles.input}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        InputProps={{
          endAdornment: (
            <Button onClick={togglePasswordVisibility}>
              {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Button>
          ),
        }}
      />
      <Button variant="contained" sx={styles.registerBtn}>
        Qeydiyyatı Tamamla
      </Button>
    </FormControl>
  );
}
