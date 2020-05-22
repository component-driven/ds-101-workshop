import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "./Layout";
import NamingItem from "./NamingItem";

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
  return (
    <Layout {...props}>
      <NamingItem item={item} role={props.pageContext.role} {...props}>
        {props.children}
      </NamingItem>
    </Layout>
  );
};
