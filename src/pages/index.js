import React from "react";
import theme from "@component-driven/mdx-deck-theme";

const { Primary } = theme.components;

export default () => {
  return (
    <Primary>
      <h1>Welcome to Design Systems 101 workshop!</h1>
      <ul>
        <li>List</li>
        <li>of</li>
        <li>important</li>
        <li>things</li>
      </ul>
    </Primary>
  );
};
