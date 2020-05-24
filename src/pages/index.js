import React from "react";
import { Card, Text, Grid, AspectImage, Styled } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import unsplashSrc from "../../slides/unsplashSrc";

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Styled.h1>Welcome to Design Systems 101 workshop!</Styled.h1>
      <p>Pick the exercise to start...</p>
      <Grid as="nav" gap={4} columns={[1, 2]}>
        <Link to={"/making-a-toast"}>
          <Card variant="exercise">
            <AspectImage ratio={4 / 3} src={unsplashSrc("PTdm4YUtloY")} />
            <Text>Making a Toast</Text>
          </Card>
        </Link>
        <Link to={"/naming"}>
          <Card variant="exercise">
            <AspectImage ratio={4 / 3} src={unsplashSrc("566CgCRSNCk")} />
            <Text>Naming</Text>
          </Card>
        </Link>
        <Link to={"/ui-inventory"}>
          <Card variant="exercise">
            <AspectImage ratio={4 / 3} src={unsplashSrc("-K6JMRMj4x4")} />
            <Text>UI Inventory</Text>
          </Card>
        </Link>
        <Link to={"/parts"}>
          <Card variant="exercise">
            <AspectImage ratio={4 / 3} src={unsplashSrc("HpMihL323k0")} />
            <Text>Parts of design system</Text>
          </Card>
        </Link>
        <Link to={"/pattern-journey"}>
          <Card variant="exercise">
            <AspectImage ratio={4 / 3} src={unsplashSrc("M2Kxb80gqcc")} />
            <Text>Pattern Journey</Text>
          </Card>
        </Link>
        <a href="https://forms.gle/HzKZX9FEXbU6RaUs9">
          <Card variant="exercise">
            <AspectImage ratio={4 / 3} src={unsplashSrc("5QgIuuBxKwM")} />
            <Text>Feedback Form</Text>
          </Card>
        </a>
      </Grid>
    </Layout>
  );
};
