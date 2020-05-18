import React from "react";
import { Grid, Image } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";

export default () => {
  const images = useStaticQuery(graphql`
    query ImageQuery {
      allFigmaImage {
        nodes {
          id
          image
        }
      }
    }
  `);
  let nodes = images.allFigmaImage.nodes;
  return (
    <Layout>
      <SEO title="Naming" />
      <h1>Naming</h1>
      <Grid columns={nodes.length} gap={4}>
        {nodes.map((node) => (
          <Image src={node.image} key={node.id} />
        ))}
      </Grid>
    </Layout>
  );
};
