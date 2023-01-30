import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import Cell from "./Cell";
import rat from "./assets/rat.png";
import cheese from "./assets/cheese.png";
import "./index.css";

class Path extends React.Component {
  constructor(props) {
    super(props);
  }

  pathIdx = 0;
  foundPath = [];

  createFoundPath = () => {
    for (let i = 0; i < 16; i++) {
      this.foundPath.push(0);
    }

    for (let j = 0; j < 16; j++) {
      if (this.props.maze[j] == 0) {
        this.foundPath[j] = 2;
      }
    }

    for (let k = 0; k < this.props.currentPath.length; k++) {
      let x = this.props.currentPath[k][0];
      let y = this.props.currentPath[k][1];

      this.foundPath[4 * x + y] = 1;
    }
  };

  findColor = () => {
    this.pathIdx += 1;
    let result = this.foundPath[this.pathIdx];
    if (result == 2) {
      result = 0;
    } else if (result == 0) {
      result = 2;
    }

    if (this.pathIdx == 14) {
      this.pathIdx = 0;
    }
    return result;
  };

  printOnConsole = () => {
    for (let i = 0; i < 16; i++) {
      console.log(i + " " + this.props.currentPath[i]);
    }
  };

  render() {
    this.createFoundPath();
    this.printOnConsole();
    return (
      <span className="path">
        <br></br>
        <Grid container spacing={2} justify="center" direction="column">
          <p>
            <Grid container spacing={1} justify="center" direction="row">
              <Grid item>
                <Paper style={{ background: "#4CAF50" }} elevation={3}>
                  <Box padding={2} height={50} width={50}>
                    <center>
                      <img
                        src={rat}
                        height={75}
                        width={75}
                        vertical-align="middle"
                      ></img>
                    </center>
                  </Box>
                </Paper>
              </Grid>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
            </Grid>
          </p>

          <p>
            <Grid container spacing={1} justify="center" direction="row">
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
            </Grid>
          </p>

          <p>
            <Grid container spacing={1} justify="center" direction="row">
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
            </Grid>
          </p>

          <p>
            <Grid container spacing={1} justify="center" direction="row">
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Cell N={this.findColor()}></Cell>
              <Grid item>
                <Paper style={{ background: "#4CAF50" }} elevation={3}>
                  <Box padding={2} height={50} width={50}>
                    <center>
                      <img
                        src={cheese}
                        height={70}
                        width={70}
                        vertical-align="middle"
                      ></img>
                    </center>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </p>
        </Grid>
      </span>
    );
  }
}

export default Path;
