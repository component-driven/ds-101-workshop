import React from "react";
import { Box, Button, Checkbox, Grid, Heading, Input, Label } from "theme-ui";

import { getInputName, parts } from "../data/parts.data";

const toBox = (parts) => {
  return parts.reduce(
    (acc, category, i) => {
      const newBox = acc[acc.length - 1];
      let inBox = newBox.map((c) => c.size || 1).reduce((a, b) => a + b, 0);
      category.id = i;
      const size = category.size || 1;
      if (inBox + size <= 4) {
        newBox.push(category);
      }
      inBox += size;
      if (inBox >= 4) {
        acc.push([]);
      }
      return acc;
    },
    [[]]
  );
};

const partsInBoxes = toBox(parts);

const stages = ["cross-out", "select", "pick-up", "done"];
const crossOutLimit = 5;
const selectLimit = 5;
const pickUpLimit = 25;

const instructions = {
  "cross-out": (
    <p>
      1/3 Cross out <b>{crossOutLimit} irrelevant categories</b>.
    </p>
  ),
  select: (
    <p>
      2/3 Select <b>{selectLimit} most-important categories</b>.
    </p>
  ),
  "pick-up": (
    <p>
      3/3 Check up to <b>{pickUpLimit} important parts</b> for your system.
      Submit when ready.
    </p>
  ),
  done: <p>Well done!</p>,
};

export default class PartsExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "cross-out",
      name: "",
      email: "",
      crossedOut: [],
      selected: [],
      pickedUp: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    setTimeout(() => {
      document.querySelector("#parts-form").scrollIntoView({
        behavior: "smooth",
      });
    }, 100);

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
      if (this.state.crossedOut.length === crossOutLimit) {
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
      if (this.state.selected.length === selectLimit) {
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
      if (this.state.pickedUp.length === pickUpLimit) {
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
        isButtonDisabled = this.state.crossedOut.length !== crossOutLimit;
        buttonMessage =
          this.state.crossedOut.length === crossOutLimit
            ? "Next"
            : `Cross out ${crossOutLimit - this.state.crossedOut.length} more`;
        return (
          <Button type="submit" disabled={isButtonDisabled}>
            {buttonMessage}
          </Button>
        );
        break;
      case "select":
        isButtonDisabled = this.state.selected.length !== selectLimit;
        buttonMessage =
          this.state.selected.length === selectLimit
            ? "Next"
            : `Select ${selectLimit - this.state.selected.length} more`;
        return (
          <Button type="submit" disabled={isButtonDisabled}>
            {buttonMessage}
          </Button>
        );
        break;
      case "pick-up":
        isButtonDisabled = this.state.pickedUp.length !== pickUpLimit;
        buttonMessage =
          this.state.pickedUp.length === pickUpLimit
            ? "Done"
            : `Pick up ${pickUpLimit - this.state.pickedUp.length} more`;
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
        name: this.state.name,
        email: this.state.email,
        crossedOut: this.state.crossedOut,
        selected: this.state.selected,
        pickedUp: this.state.pickedUp,
      }),
    });
  }

  drawPartItem(category, categoryId, part, level) {
    const partTitle = part.title || part;
    let disabledCheckbox = true;

    // allow pick up from selected parts
    if (
      this.state.stage === "pick-up" &&
      this.state.selected.indexOf(categoryId) !== -1
    ) {
      disabledCheckbox = false;
    }
    // do not allow over limit
    if (this.state.pickedUp.length === pickUpLimit) {
      disabledCheckbox = true;
    }
    // checked is always enabled
    if (
      this.state.pickedUp.indexOf(getInputName(category.title, partTitle)) !==
      -1
    ) {
      disabledCheckbox = false;
    }
    return (
      <Label
        sx={{
          my: 2,
          pl: `${1 * level}em`,
          lineHeight: 1,
          color: disabledCheckbox ? "#CCC" : "",
        }}
      >
        <Checkbox
          sx={{
            color: disabledCheckbox ? "#CCC" : "",
          }}
          name={getInputName(category.title, partTitle)}
          disabled={disabledCheckbox}
          onChange={this.pickUpPart.bind(this)}
        />
        {partTitle}
      </Label>
    );
  }

  render() {
    return (
      <>
        <Box
          p={4}
          id="parts-form"
          sx={{
            fontSize: "12px",
          }}
        >
          <Heading>Parts of Design System</Heading>
          {instructions[this.state.stage]}
          <form onSubmit={this.handleSubmit.bind(this)}>
            <Grid gap={4}>
              <Grid columns={2} gap={4}>
                <Box>
                  <Label htmlFor="name">Name: </Label>
                  <Input
                    name="name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </Box>
                <Box>
                  <Label htmlFor="email">Email: </Label>
                  <Input
                    name="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </Box>
              </Grid>
              {partsInBoxes.map((box) => (
                <Grid gap={4} columns={box.length}>
                  {box.map((category) => {
                    let boxStyle = {
                      // breakInside: "avoid-column",
                    };
                    let legendStyle = {};

                    if (this.state.crossedOut.indexOf(category.id) !== -1) {
                      boxStyle.color = "#CCC";
                      boxStyle.backgroundColor = "#EEE";
                      boxStyle.borderColor = "#EEE";
                    }

                    if (this.state.selected.indexOf(category.id) !== -1) {
                      boxStyle.borderColor = "#88D8B0";
                      legendStyle.color = "#88D8B0";
                    }

                    return (
                      <Box
                        as="fieldset"
                        sx={boxStyle}
                        onClick={(e) => {
                          this.boxAction(e, category.id);
                        }}
                      >
                        <legend style={legendStyle}>{category.title}</legend>
                        <Grid gap={0} columns={category.innerColumns || 1}>
                          {category.parts.map((part) => {
                            return (
                              <Box>
                                {this.drawPartItem(
                                  category,
                                  category.id,
                                  part,
                                  0
                                )}
                                {part.parts &&
                                  part.parts.map((subpart) =>
                                    this.drawPartItem(
                                      category,
                                      category.id,
                                      subpart,
                                      1
                                    )
                                  )}
                              </Box>
                            );
                          })}
                        </Grid>
                      </Box>
                    );
                  })}
                </Grid>
              ))}

              {this.actionButton()}
            </Grid>
          </form>
        </Box>
      </>
    );
  }
}
