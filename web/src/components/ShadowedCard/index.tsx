import { PropsWithChildren } from "react";
import { Box, BoxProps, useTheme } from "@mui/material";
import useStyles from "./styles";

function ShadowedCard(props: BoxProps) {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={{ ...styles.container, ...(props.sx || {}) }}>
      {props.children}
    </Box>
  );
}

export default ShadowedCard;
