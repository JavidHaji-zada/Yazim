import { Typography, TypographyProps, useTheme } from "@mui/material";

export function Subtitle(props: TypographyProps): JSX.Element {
  const theme = useTheme();
  return (
    <Typography
      {...props}
      sx={{
        color: theme.palette.text.secondary,
        fontSize: 16,
        fontWeight: "700",
        ...props.sx,
      }}
    />
  );
}
