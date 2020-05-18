import React from "react";
import { Grid, Image } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";

export default (props) => {
  const {
    item,
    pageContext: { pageId },
  } = props;

  const title = `Naming. Piece ${pageId}`;

  return (
    <>
      <SEO title={title} />
      <h1>{title}</h1>
      <Image src={item.image} key={item.id} />
    </>
  );
};
