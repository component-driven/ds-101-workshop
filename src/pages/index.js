import React from "react";
import theme from "@component-driven/mdx-deck-theme";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const { Primary } = theme.components;

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to Design Systems 101 workshop!</h1>
      <p>Pick the exercise to start...</p>
    </Layout>
  );
};
