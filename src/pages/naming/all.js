import React from "react";
import { Grid, Image } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/seo";

import { namingEx } from "../../../config";

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
  const title = "Naming: All pieces";
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <Grid columns={nodes.length} gap={4}>
        {namingEx.frames.map((frame) => {
          const node = nodes.find(({ id }) => id === frame);
          return <Image src={node.image} key={node.id} />;
        })}
      </Grid>
    </Layout>
  );
};
