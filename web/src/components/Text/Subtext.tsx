import { Typography, TypographyProps, useTheme } from "@mui/material";

export function Subtext(props: TypographyProps): JSX.Element {
  const theme = useTheme();
  return (
    <Typography
      {...props}
      sx={{
        color: theme.palette.text.secondary,
        fontSize: 12,
        fontWeight: "400",
        ...props.sx,
      }}
    />
  );
}
