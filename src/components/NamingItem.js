import React from "react";
import { Image } from "theme-ui";
import SEO from "../components/seo";

export default (props) => {
  const {
    item,
    pageContext: { pageId, role },
  } = props;

  const title = `Piece of interface #${pageId}, for a ${role}`;

  const descriptions = {
    designer: (
      <>
        <p>
          You are getting a mock of some interface. Please write instructions{" "}
          <b>for a designer</b> who creates a visual design. Describe what
          exactly a designer has to draw. You should somehow name the patterns
          or components they are going to design, and use these names in your
          description. Maybe you will also need to name some subparts of the
          interface. Write in English or any other language. 3-4 sentences if
          enough.
        </p>
      </>
    ),
    developer: (
      <>
        <p>
          You are getting a mock of some interface. Please write instructions{" "}
          <b>for a developer</b> who is going to code this into a component.
          Describe what functionality this component has and how a user
          interacts with it. You should somehow name the pieces of the interface
          and use these names in your description. Maybe you also need to name
          some subparts of the components. Write in English or any other
          language. 3-4 sentences if enough.
        </p>
      </>
    ),
  };

  return (
    <>
      <SEO title={title} />
      <h1>Naming Exersise</h1>
      <h2>{title}</h2>
      {descriptions[role]}
      {props.children}
      <Image src={item.image} key={item.id} />
    </>
  );
};
