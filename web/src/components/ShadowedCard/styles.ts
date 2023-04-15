import { Theme } from "@mui/material";
import { Style } from "@types";

const useStyles = (theme: Theme): Style => ({
  container: {
    boxShadow: "2px 2px 2px -2px rgba(0,0,0,0.25)",
    borderWidth: 1,
    border: 1,
    borderColor: theme.palette.divider,
  },
});

export default useStyles;
