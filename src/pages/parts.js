import React from "react";
import { Formik, Field, Form } from "formik";
import { Box, Label, Input, Heading, Checkbox, Grid, Button } from "theme-ui";

export default () => (
  <Formik
    initialValues={{
      name: "",
      email: "",
    }}
    onSubmit={(values) => {
      fetch(
        "https://api.formik.com/submit/ds101-parts/parts-of-design-system",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
    }}
    render={() => (
      <Form>
        <Label htmlFor="name">Enter your name: </Label>
        <Field name="name" as={Input} />

        <fieldset>
          <legend>Visual Language</legend>
          <Grid columns={5} gap={4}>
            <Label>
              <Field as={Checkbox} name="color" /> Color
            </Label>
            <Label>
              <Field as={Checkbox} name="typography" /> Typography
            </Label>
          </Grid>
        </fieldset>

        <Label htmlFor="email">Enter your email: </Label>
        <Field name="email" as={Input} />

        <Button type="submit">Submit</Button>
      </Form>
    )}
  />
);
