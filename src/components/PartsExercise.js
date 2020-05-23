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

const instructions = {
  "cross-out": (
    <p>
      1/3 Cross out <b>5 irrelevant categories</b>.
    </p>
  ),
  select: (
    <p>
      2/3 Select <b>5 most-important categories</b>.
    </p>
  ),
  "pick-up": (
    <p>
      3/3 Check up to <b>25 important parts</b> for your system. Submit when
      ready.
    </p>
  ),
};

export default class PartsExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "cross-out",
      crossedOut: [],
      selected: [],
      pickedUp: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.stage === "pick-up") {
      this.sendForm();
    }

    this.setState({
      stage: stages[stages.indexOf(this.state.stage) + 1],
    });
  }

  boxAction(e, categoryId) {
    switch (this.state.stage) {
      case "cross-out":
        this.toggleCategoryCrossOut(categoryId);
        break;
      case "select":
        this.toggleCategorySelect(categoryId);
        break;
    }
  }

  toggleCategoryCrossOut(categoryId) {
    if (this.state.crossedOut.indexOf(categoryId) === -1) {
      if (this.state.crossedOut.length === 5) {
        // only 5 categories
        return;
      }
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

  toggleCategorySelect(categoryId) {
    if (this.state.crossedOut.indexOf(categoryId) !== -1) {
      // not for crossed out categories
      return;
    }
    if (this.state.selected.indexOf(categoryId) === -1) {
      if (this.state.selected.length === 5) {
        // only 5 categories
        return;
      }
      this.state.selected.push(categoryId);
      this.setState({
        selected: this.state.selected,
      });
    } else {
      this.setState({
        selected: this.state.selected.filter((i) => i !== categoryId),
      });
    }
  }

  pickUpPart(e) {
    const partId = e.target.name;

    if (this.state.pickedUp.indexOf(partId) === -1) {
      if (this.state.pickedUp.length === 25) {
        return;
      }
      this.state.pickedUp.push(partId);
      this.setState({
        pickedUp: this.state.pickedUp,
      });
    } else {
      this.setState({
        pickedUp: this.state.pickedUp.filter((i) => i !== partId),
      });
    }
  }

  actionButton() {
    let isButtonDisabled, buttonMessage;
    switch (this.state.stage) {
      case "cross-out":
        isButtonDisabled = this.state.crossedOut.length !== 5;
        buttonMessage =
          this.state.crossedOut.length === 5 ? "Next" : "Cross out more";
        return (
          <Button type="submit" disabled={isButtonDisabled}>
            {buttonMessage}
          </Button>
        );
        break;
      case "select":
        isButtonDisabled = this.state.selected.length !== 5;
        buttonMessage =
          this.state.selected.length === 5 ? "Next" : "Select more";
        return (
          <Button type="submit" disabled={isButtonDisabled}>
            {buttonMessage}
          </Button>
        );
        break;
      case "pick-up":
        isButtonDisabled = this.state.pickedUp.length !== 25;
        buttonMessage =
          this.state.pickedUp.length === 25 ? "Submit" : "Pick up more";
        return (
          <Button type="submit" disabled={isButtonDisabled}>
            {buttonMessage}
          </Button>
        );
        break;
    }
  }

  sendForm(e) {
    fetch("https://api.formik.com/submit/ds101-parts/parts-of-design-system", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        crossedOut: this.state.crossedOut,
        selected: this.state.selected,
        pickedUp: this.state.pickedUp,
      }),
    });
  }

  render() {
    return (
      <>
        {this.state.stage}
        <Box p={4}>
          <Heading>Parts of Design System</Heading>
          {instructions[this.state.stage]}
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

                  if (this.state.selected.indexOf(i) !== -1) {
                    boxStyle.color = "red";
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
                        let disabledCheckbox = true;

                        // allow pick up from selected parts
                        if (
                          this.state.stage === "pick-up" &&
                          this.state.selected.indexOf(i) !== -1
                        ) {
                          disabledCheckbox = false;
                        }
                        // do not allow over limit
                        if (this.state.pickedUp.length === 25) {
                          disabledCheckbox = true;
                        }
                        // checked is always enabled
                        if (
                          this.state.pickedUp.indexOf(
                            getInputName(category.title, part.title)
                          ) !== -1
                        ) {
                          disabledCheckbox = false;
                        }

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
                              disabled={disabledCheckbox}
                              onChange={this.pickUpPart.bind(this)}
                            />
                            {part.title}
                          </Label>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>

              {this.actionButton()}
            </Grid>
          </form>
        </Box>
      </>
    );
  }
}
