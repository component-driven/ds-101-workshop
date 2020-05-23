import React, { useState } from "react";
import { Box, Button, Grid, Image, Input, Label, Textarea } from "theme-ui";
import SEO from "../components/seo";

export default (props) => {
  const {
    item,
    pageContext: { pageId, role },
  } = props;

  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.formik.com/submit/ds101-parts/naming-ex", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pageId, role, name, description }),
    });
  };

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
      <Grid columns={[1, 2]} gap={4}>
        <Image src={item.image} key={item.id} />

        <Grid as="form" gap={3} onSubmit={handleSubmit}>
          <Box>
            <Label for="description">Description: </Label>
            <Textarea
              rows={5}
              name="description"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
          <Box>
            <Label for="name">Your name (optional): </Label>
            <Input
              name="name"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Button type="submit">Submit</Button>
        </Grid>
      </Grid>
    </>
  );
};
