import React from "react";
import { Grid, Image } from "theme-ui";
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
      <h1>Naming Ex</h1>
      <Grid gap={4}>
        <Grid columns={2} gap={4}>
          <h2>Designers</h2>
          <h2>Developers</h2>
        </Grid>
        <Grid columns={2} gap={4}>
          <ul>
            {nodes
              .filter((page) => page.node.context.role === "designer")
              .map((page) => {
                const pageTitle = page.node.context.pageId
                  ? `Naming: Piece ${page.node.context.pageId}`
                  : `Naming: All pieces`;
                return (
                  <li>
                    <Link to={page.node.path}>{pageTitle}</Link>
                  </li>
                );
              })}
          </ul>
          <ul>
            {nodes
              .filter((page) => page.node.context.role === "developer")
              .map((page) => {
                const pageTitle = page.node.context.pageId
                  ? `Naming: Piece ${page.node.context.pageId}`
                  : `Naming: All pieces`;
                return (
                  <li>
                    <Link to={page.node.path}>{pageTitle}</Link>
                  </li>
                );
              })}
          </ul>
        </Grid>
      </Grid>
    </Layout>
  );
};
