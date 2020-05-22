const config = require("./config");

module.exports = {
  siteMetadata: {
    title: "Design Systems 101 Workshop",
    author: "Andrey Okonetchnikov & Varya Stepanova",
    description: "Materials and slides for the Design Systems 101 Workshop",
  },
  plugins: [
    {
      resolve: "gatsby-source-figma",
      options: {
        accessToken: "45552-946fc588-8ab5-4df5-b351-193a343ce3fe",
        fileId: "F18zzunW3QsswVuXrcq2BR",
        // projectId: `FIGMA_PROJECT_ID`,
        nodeIds: config.namingEx.frames,
        scale: 1,
        format: "png",
      },
    },
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        // source directory
        contentPath: "./slides",
        // base path for routes generate by this theme
        basePath: "/slides",
      },
    },
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: [
          "mdx-deck",
          "gatsby-theme-mdx-deck",
          "@mdx-deck/themes",
          "@mdx-deck/gatsby-plugin",
        ],
      },
    },
  ],
};
