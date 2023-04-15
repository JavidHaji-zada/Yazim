import { Theme } from "@mui/material";
import { Style } from "@types";
import { HOME_CONTENT_MAX_WIDTH } from "./Home.constants";

const useStyles = (theme: Theme): Style => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: 4,
    [theme.breakpoints.up("tablet")]: {
      paddingTop: "5%",
    },
  },
  articles: {
    marginTop: 4,
  },
});

export default useStyles;
