import theme from "@component-driven/mdx-deck-theme";

export default {
  ...theme,
  text: {
    heading: {
      ...theme.text.heading,
      textAlign: "left",
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
