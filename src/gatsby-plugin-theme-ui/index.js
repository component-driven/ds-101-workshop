import theme from "@component-driven/mdx-deck-theme";

export default {
  ...theme,
  colors: {
    ...theme.colors,
    // secondary: "#ccc",
    muted: "#efeff3",
  },
  borders: {
    thin: "1px solid",
  },
  radii: {
    small: 2,
    medium: 5,
    round: 99999,
  },
  text: {
    heading: {
      ...theme.text.heading,
      textAlign: "left",
    },
  },
  forms: {
    checkbox: {
      color: "primary",
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      "&:hover:not(:disabled)": {
        cursor: "pointer",
        bg: "text",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
  },
  cards: {
    exercise: {
      p: 2,
      border: "1px solid",
      borderColor: "#efefef",
      boxShadow: "0 4px 16px #efefef",
      transition: "transform 0.25s",
      ":hover": {
        transform: "scale(1.1)",
      },
      "* + *": {
        mt: 2,
      },
    },
  },
  styles: {
    ...theme.styles,
    root: {
      ...theme.styles.root,
      fontSize: "16px", // Change the base font size for the website
      lineHeight: 1.5,
    },
    li: {
      mb: 3,
    },
    p: {
      p: 0,
      mb: 4,
    },
    img: {
      display: "block",
      my: 3,
      p: 2,
      border: "1px solid #efefef",
      maxWidth: "50%",
    },
  },
};
