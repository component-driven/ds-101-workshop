import React from "react";
import { Link, Image } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/seo";

export default () => {
  return (
    <Layout>
      <SEO title="Parts of design system" />
      <h1>Parts of design system</h1>

      <ol>
        <li>
          Open exercise sheet and copy sheet to your drive.
          <br />
          <Image
            sx={{
              width: "500px",
            }}
            src="/assets/parts-make-copy.png"
          />
        </li>
        <li>
          Cross out <b>5</b> irrelevant catagories (boxes).
          <br />
          <Image
            sx={{
              width: "500px",
            }}
            src="/assets/parts-cross-out.png"
          />
        </li>
        <li>
          Select <b>5</b> most relevate catagories (boxes).
          <br />
          <Image
            sx={{
              width: "500px",
            }}
            src="/assets/parts-select.png"
          />
        </li>
        <li>
          In the selected categories, check <b>25</b> parts you want to see in
          your design system.
          <br />
          <Image
            sx={{
              width: "500px",
            }}
            src="/assets/parts-check.png"
          />
        </li>
      </ol>

      <Link href="https://docs.google.com/spreadsheets/d/1WO92vycLlDkDXr9rb1sztzXmlcUn1qeUTEkfvpOOuWk/edit?usp=sharing">
        Exercise sheet
      </Link>
    </Layout>
  );
};
