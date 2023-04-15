import { Theme } from "@mui/material";
import { Style } from "@types";

const useStyles = (theme: Theme): Style => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.25)",
    [theme.breakpoints.up("mobile")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  },
});

export default useStyles;
