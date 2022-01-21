import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#018790",
      light: "#E0D4FA",
      dark: "#0a516c",
      contrastText: "#EEF5FA",
    },
    secondary: {
      main: "#f77763",
      contrastText: "#EEF5FA",
    },
    neutral: {
      main: "#EEF5FA",
      dark: "#423e3d",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    allVariants: {
      color: "#2b2726",
    },
  },
});

theme = responsiveFontSizes(theme);

theme.typography.body2 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
};

theme.typography.subtitle2 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "0.6rem",
  },
};

theme.typography.subtitle1 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
};
theme.typography.h6 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
};
theme.typography.h4 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
};
theme.typography.h1 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
};
theme.typography.h2 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
};

theme = createTheme(theme, {
  palette: {
    primary: {
      main: theme.palette.primary.main,
    },
    secondary: {
      main: theme.palette.secondary.main,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "40px",
          color: theme.palette.neutral.light,
          [theme.breakpoints.down("md")]: {
            fontSize: "0.7rem",
          },
        },
        startIcon: {
          margin: "0",
          color: theme.palette.primary.main,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          [theme.breakpoints.down("md")]: {
            fontSize: "0.7rem",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,1 )",
          border: "1px solid rgba(203, 221, 234, 0.3)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          [theme.breakpoints.down("md")]: {
            padding: "10px 7px",
          },
        },
        root: {
          [theme.breakpoints.down("md")]: {
            fontSize: "0.8rem",
          },
        },
        notchedOutline: {
          borderColor: theme.palette.primary.light,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderColor: theme.palette.primary.light,
          },
        },
      },
    },
  },
});

export default theme;
