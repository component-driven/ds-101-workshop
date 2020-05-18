import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Flex, Grid } from "theme-ui";
import { Link } from "gatsby";

import { namingEx } from "../../config";
import Layout from "./Layout";
import NamingItem from "./NamingItem";

const frame = "25%3A227";

export default (props) => {
  const images = useStaticQuery(graphql`
    query NamingItemImageQuery {
      allFigmaImage {
        nodes {
          id
          image
        }
      }
    }
  `);

  const item = images.allFigmaImage.nodes.filter(
    (i) => i.id === props.pageContext.frame
  )[0];
  console.log("LayoutNaming", props.pageContext.frame, item);
  return (
    <Layout {...props}>
      <NamingItem item={item} {...props}>
        {props.children}
      </NamingItem>
    </Layout>
  );
};
