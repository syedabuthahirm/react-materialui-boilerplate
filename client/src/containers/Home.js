import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement } from "../store/reducers/stepCounter";

const Home = props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="headline" headlineMapping={"h1"}>
            Redux Example
          </Typography>
          <Typography
            align="center"
            variant="subheading"
            headlineMapping={"h1"}
          >
            Counter: {props.stepCounter.counter}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={props.increment}>
            Increment
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={props.decrement}
          >
            Decrement
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stepCounter: state.stepCounter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment: () => increment(),
      decrement: () => decrement()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
