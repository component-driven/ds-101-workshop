import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

export default () => {
  return (
    <Layout>
      <SEO title="UI Inventory" />
      <h1>UI Inventory</h1>
      <iframe
        title="UI Inventory Figma"
        width={800}
        height={450}
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FF18zzunW3QsswVuXrcq2BR%2FUI-Inventory%3Fnode-id%3D0%253A1"
        allowFullScreen
      />
    </Layout>
  );
};
