import React from "react";
import { Link } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/seo";

export default () => {
  return (
    <Layout>
      <SEO title="Pattern Journey" />
      <h1>Pattern Journey</h1>

      <p>
        Following the Pattern Journey canvas, work together on the whiteboard to
        define the process of maintaining a design system.
      </p>

      <Link href="https://app.mural.co/t/ds101workshop3845/m/ds101workshop3845/1590166783672/62bdad1bb12bf8ecaf9068d839592c39026d338e">
        Whiteboard
      </Link>
    </Layout>
  );
};
