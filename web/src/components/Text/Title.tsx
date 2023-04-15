import { Typography, TypographyProps, useTheme } from "@mui/material";

export function Title(props: TypographyProps): JSX.Element {
  const theme = useTheme();
  return (
    <Typography
      {...props}
      sx={{
        color: theme.palette.text.primary,
        fontSize: 18,
        fontWeight: "bold",
        ...props.sx,
      }}
    />
  );
}
