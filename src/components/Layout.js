import React from "react";
import { Box, Flex, Grid } from "theme-ui";
import { Link } from "gatsby";

export default (props) => {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Box as="header">
        <Grid as="nav" gap={4} sx={{ gridAutoFlow: "column" }}>
          <Link to={"/"}>Home</Link>
          <Link to={"/making-a-toast"}>Making a toast</Link>
          <Link to={"/naming"}>Naming</Link>
          <Link to={"/ui-inventory"}>UI Inventory</Link>
        </Grid>
      </Box>
      <Box as="main">{props.children}</Box>
      <Box as="footer">Footer</Box>
    </Flex>
  );
};
