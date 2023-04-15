import { Theme } from "@mui/material";
import { Style } from "@types";

const useStyles = (theme: Theme): Style => ({
  container: {
    width: "100%",
  },
  input: {
    marginBottom: 2,
  },
  registerBtn: {
    textTransform: "none",
    marginTop: 2,
  },
  forgotPass: {
    textTransform: "none",
    alignSelf: "center",
    marginTop: 1,
  },
});

export default useStyles;
