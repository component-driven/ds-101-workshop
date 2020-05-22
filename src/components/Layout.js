import React from "react";
import { Box, Flex, Grid, ThemeProvider } from "theme-ui";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import theme from "@component-driven/mdx-deck-theme/dist/theme";

export default (props) => {
  return (
    <>
      <Helmet>
        <link
          type="text/css"
          href="https://www.monolisa.dev/static/fonts.css"
        />
      </Helmet>
      <Flex sx={{ flexDirection: "column", p: 3, minHeight: "100vh" }}>
        <Box as="header">
          <Grid as="nav" gap={4} sx={{ gridAutoFlow: "column" }}>
            <Link to={"/"}>Home</Link>
            <Link to={"/making-a-toast"}>Making a toast</Link>
            <Link to={"/naming"}>Naming</Link>
            <Link to={"/ui-inventory"}>UI Inventory</Link>
          </Grid>
        </Box>
        <Box as="main" sx={{ flexGrow: 1 }}>
          {props.children}
        </Box>
        <Box as="footer" sx={{ flexGrow: 0 }}>
          Footer
        </Box>
      </Flex>
    </>
  );
};
