import React from "react";
import { Box, Grid, Styled } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";

export default () => {
  const pages = useStaticQuery(graphql`
    query NamingPages {
      allSitePage(filter: { path: { regex: "/naming/./" } }) {
        edges {
          node {
            id
            path
            context {
              pageId
              role
            }
          }
        }
      }
    }
  `);
  let nodes = pages.allSitePage.edges;
  return (
    <Layout>
      <SEO title="Naming" />
      <Styled.h1>Naming</Styled.h1>
      <Grid columns={2} gap={4}>
        <Box>
          <Styled.h2>Designers</Styled.h2>
          <Styled.ul>
            {nodes
              .filter((page) => page.node.context.role === "designer")
              .map((page) => {
                const pageTitle = page.node.context.pageId
                  ? `Naming: Piece ${page.node.context.pageId}`
                  : `Naming: All pieces`;
                return (
                  <Styled.li>
                    <Link to={page.node.path}>{pageTitle}</Link>
                  </Styled.li>
                );
              })}
          </Styled.ul>
        </Box>
        <Box>
          <Styled.h2>Developers</Styled.h2>
          <Styled.ul>
            {nodes
              .filter((page) => page.node.context.role === "developer")
              .map((page) => {
                const pageTitle = page.node.context.pageId
                  ? `Naming: Piece ${page.node.context.pageId}`
                  : `Naming: All pieces`;
                return (
                  <Styled.li>
                    <Link to={page.node.path}>{pageTitle}</Link>
                  </Styled.li>
                );
              })}
          </Styled.ul>
        </Box>
      </Grid>
    </Layout>
  );
};
