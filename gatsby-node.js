const path = require("path");

const config = require("./config");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  config.namingEx.frames.forEach((frame, i) => {
    const pageId = i + 1;

    createPage({
      path: `/naming/${pageId}/`,
      slug: `/naming/${pageId}/`,
      component: path.resolve(`./src/components/LayoutNaming.js`),
      context: {
        pageId,
        frame,
      },
    });
  });
};
