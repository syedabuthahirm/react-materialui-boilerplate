import React from "react";
import { Field, reduxForm } from "redux-form";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const styles = () => ({
  grid: {
    padding: "20px",
    display: "grid",
    gridTemplateRows: "85px 1fr 1fr 1fr",
    height: "inherit"
  },
  buttons: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center"
  }
});

const SigninForm = props => {
  const { handleSubmit, classes } = props;
  return (
    <form onSubmit={handleSubmit} className={classes.grid}>
      <div>
        <Typography
          align="left"
          headlineMapping={{ display: "h1" }}
          variant="headline"
        >
          CompanyName
        </Typography>
        <Typography
          align="left"
          headlineMapping={{ display: "h1" }}
          variant="title"
        >
          Sigin
        </Typography>
      </div>
      <Field
        className={classes.inputRoot}
        name="username"
        type="email"
        component={TextField}
      />
      <Field
        className={classes.inputRoot}
        name="password"
        type="password"
        component={TextField}
      />
      <div className={classes.buttons}>
        <Button
          onClick={handleSubmit}
          type="button"
          color="primary"
          variant="contained"
        >
          Signin
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: "login"
})(withStyles(styles)(SigninForm));
