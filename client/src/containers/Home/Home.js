import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import { increment, decrement, getCounter } from "./counterReducer";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {

  const counter = useSelector(getCounter);

  const dispatch = useDispatch();

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
          <Typography variant="h5">
            Redux Example
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
          >
            Counter: {counter}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={() => dispatch(increment())}>
            Increment
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};