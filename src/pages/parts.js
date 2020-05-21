import React from "react";
import { Formik, Field, Form } from "formik";
import { Box, Label, Input, Heading, Checkbox, Grid, Button } from "theme-ui";

import { parts, getInputName } from "../data/parts.data";

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
      <Form>
        <Label htmlFor="name">Enter your name: </Label>
        <Field name="name" as={Input} />

        {partsFlattened.map((category, i) => (
          <fieldset>
            <legend>{category.title}</legend>
            {category.parts.map((part, k) => {
              const _inputName = getInputName(category.title, part.title);
              const _labelStyle = {
                "padding-left": `${1 * part.level}em`,
              };
              return (
                <Label style={_labelStyle}>
                  <Field as={Checkbox} name={_inputName} />
                  {part.title}
                </Label>
              );
            })}
          </fieldset>
        ))}

        <Label htmlFor="email">Enter your email: </Label>
        <Field name="email" as={Input} />

        <Button type="submit">Submit</Button>
      </Form>
    )}
  />
);
