import React from "react";
import { Link } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const boards = [
  "https://app.mural.co/t/ds101workshop3845/m/ds101workshop3845/1590148081231/113d1d07dae0325b4d1c770f833110386378be7f",
  "https://app.mural.co/t/ds101workshop3845/m/ds101workshop3845/1590148135724/aca24f13f5ad20704a5ec6bc85d719b6f1c61478",
  "https://app.mural.co/t/ds101workshop3845/m/ds101workshop3845/1590148162440/43d4cdd64f5fe815a1b6d23b745770302c93797b",
];

export default () => {
  return (
    <Layout>
      <SEO title="Making a toast" />
      <h1>Making a toast</h1>

      <p>Go to a Mural Whiteboard of your team.</p>
      <h2>Step 1 (5 minutes)</h2>
      <p>
        Draw the stages of making a toast in the morning. You can go wild, we
        had some people who started with buying a farm because they needed to
        produce bread. But finally you should have a nice crispy toast, and you
        have 5 steps to illustrate the steps.
      </p>
      <h2>Step 2 (5 minutes)</h2>
      <p>
        With your team members, merge all the steps you have into one timeline.
        Review each other's steps and collect them all into a sequence. If it
        happens that two or three of you have exactly the same steps, you can
        overlap them on top of each other. If these steps are even slightly different, keep them
        separate and give them right order.{" "}
      </p>
      <ul>
        {boards.map((board, i) => (
          <li>
            <Link href={board}>Whiteboard {i + 1} </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
