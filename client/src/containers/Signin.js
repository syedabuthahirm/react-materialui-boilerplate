import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SigninForm from "../components/Signin";
import { authenticate } from "../store/reducers/authenticate";

const styles = () => ({
  root: {
    height: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "350px",
    height: "300px"
  }
});

const Signin = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <SigninForm handleSubmit={props.login} />
      </Card>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      login: () => authenticate()
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Signin));
