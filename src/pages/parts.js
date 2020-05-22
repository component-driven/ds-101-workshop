import React from "react";
import { Field, Form, Formik } from "formik";
import { Box, Button, Checkbox, Grid, Heading, Input, Label } from "theme-ui";

import { getInputName, parts } from "../data/parts.data";

const flatten = (obj, depth, currentDepth = 0) => {
  const array = Array.isArray(obj) ? obj : [obj];
  return array.reduce((acc, value) => {
    acc.push({
      title: value.title || value,
      level: currentDepth,
    });
    if (value.parts) {
      acc = acc.concat(flatten(value.parts, depth, currentDepth + 1));
      delete value.parts;
    }
    return acc;
  }, []);
};

const partsFlattened = parts.map((category) => {
  const categoryFlattened = {
    parts: flatten(category.parts),
    title: category.title,
    category: category.category,
  };
  return categoryFlattened;
});

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
      <Box p={4}>
        <Heading>Parts of Design System</Heading>
        <Form>
          <Grid gap={4}>
            <Grid columns={2} gap={4}>
              <Box>
                <Label htmlFor="name">Name: </Label>
                <Field name="name" as={Input} />
              </Box>
              <Box>
                <Label htmlFor="email">Email: </Label>
                <Field name="email" as={Input} />
              </Box>
            </Grid>
            <Box
              sx={{
                columns: 3,
                columnGap: 4,
              }}
            >
              {partsFlattened.map((category, i) => (
                <Box as="fieldset" sx={{ breakInside: "avoid-column" }}>
                  <legend>{category.title}</legend>
                  {category.parts.map((part) => {
                    return (
                      <Label
                        sx={{
                          my: 2,
                          pl: `${1 * part.level}em`,
                          lineHeight: 1,
                        }}
                      >
                        <Field
                          as={Checkbox}
                          name={getInputName(category.title, part.title)}
                        />
                        {part.title}
                      </Label>
                    );
                  })}
                </Box>
              ))}
            </Box>

            <Button type="submit">Submit</Button>
          </Grid>
        </Form>
      </Box>
    )}
  />
);
