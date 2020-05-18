import React from "react";
import { Grid, Image } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/seo";

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
            }
          }
        }
      }
    }
  `);
  let nodes = pages.allSitePage.edges;
  console.log("pages", pages);
  return (
    <Layout>
      <SEO title="Naming" />
      <h1>Naming Ex</h1>
      <ul>
        {nodes.map((page) => {
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
    </Layout>
  );
};
