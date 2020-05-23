import React from "react";
import { Box, Button, Checkbox, Grid, Heading, Input, Label } from "theme-ui";

import { getInputName, parts } from "../data/parts.data";
import { render } from "react-dom";

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

const stages = ["cross-out", "select", "pick-up"];

export default class PartsExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "cross-out",
      crossedOut: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    switch (this.state.stage) {
      case "cross-out":
        this.crossOut();
        break;
    }
  }

  boxAction(e, categoryId) {
    e.preventDefault();
    switch (this.state.stage) {
      case "cross-out":
        this.toggleCategorySelect(categoryId);
        break;
    }
  }

  crossOut() {
    this.setState({
      stage: "select",
    });
  }

  toggleCategorySelect(categoryId) {
    if (this.state.crossedOut.indexOf(categoryId) === -1) {
      this.state.crossedOut.push(categoryId);
      this.setState({
        crossedOut: this.state.crossedOut,
      });
    } else {
      this.setState({
        crossedOut: this.state.crossedOut.filter((i) => i !== categoryId),
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.stage}
        <Box p={4}>
          <Heading>Parts of Design System</Heading>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <Grid gap={4}>
              <Grid columns={2} gap={4}>
                <Box>
                  <Label htmlFor="name">Name: </Label>
                  <Input name="name" />
                </Box>
                <Box>
                  <Label htmlFor="email">Email: </Label>
                  <Input name="email" />
                </Box>
              </Grid>
              <Box
                sx={{
                  columns: 3,
                  columnGap: 4,
                }}
              >
                {partsFlattened.map((category, i) => {
                  let boxStyle = {
                    breakInside: "avoid-column",
                  };

                  if (this.state.crossedOut.indexOf(i) !== -1) {
                    boxStyle.color = "#CCC";
                    boxStyle.backgroundColor = "#EEE";
                  }

                  return (
                    <Box
                      as="fieldset"
                      sx={boxStyle}
                      onClick={(e) => {
                        this.boxAction(e, i);
                      }}
                    >
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
                            <Checkbox
                              name={getInputName(category.title, part.title)}
                            />
                            {part.title}
                          </Label>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>

              <Button type="submit">Submit</Button>
            </Grid>
          </form>
        </Box>
      </>
    );
  }
}
