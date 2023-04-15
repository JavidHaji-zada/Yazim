import { Theme } from "@mui/material";
import { HOME_CONTENT_MAX_WIDTH } from "@pages/home/Home.constants";
import { Style } from "@types";

const useStyles = (theme: Theme): Style => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "10%",
    paddingLeft: 4,
    paddingRight: 4,
  },
  loginBox: {
    maxWidth: 456,
    padding: 4,
    borderRadius: 4,
    width: "100%",
  },
  form: {
    marginTop: 4,
  },
});

export default useStyles;
