/* @jsx jsx */
import React from "react";
import { Box, Flex, Grid, Styled, jsx, Card } from "theme-ui";
import Helmet from "react-helmet";
import { Link } from "gatsby";

export default (props) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://www.monolisa.dev/static/fonts.css"
        />
      </Helmet>
      <Flex
        sx={{
          p: 3,
          flexDirection: "column",
          minHeight: "100vh",
          maxWidth: "60em",
          mx: "auto",
          width: "100%",
        }}
      >
        <Box as="header">
          <Link to={"/"}>Home</Link>
        </Box>
        <Box as="main" sx={{ flexGrow: 1, my: 4 }}>
          {props.children}
        </Box>
        <Box
          as="footer"
          sx={{
            flexGrow: 0,
          }}
        >
          <Styled.p sx={{ fontSize: "s", m: 0 }}>
            © Andrey Okonetchnikov & Varya Stepanova, 2020
          </Styled.p>
          <Styled.p sx={{ fontSize: "s", m: 0 }}>
            Font: <a href="https://www.monolisa.dev?ref=workshop">MonoLisa</a>,
            Photos: <a href="https://unsplash.com">Unsplash.com</a>
          </Styled.p>
        </Box>
      </Flex>
    </>
  );
};
