module.exports = {
  siteMetadata: {
    title: "Design Systems 101 Workshop",
    author: "Andrey Okonetchnikov & Varya Stepanova",
    description: "Materials and slides for the Design Systems 101 Workshop",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["work sans:400,400i,700,700i"],
        display: "swap",
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
