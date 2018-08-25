import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./containers/Home";
import Setting from "./containers/Setting";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit * 9,
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 7,
    overflowX: "hidden"
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class App extends Component {
  state = {
    open: false
  };

  handleToggleDrawer = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    const { classes, settings } = this.props;

    return (
      <MuiThemeProvider theme={settings.theme}>
        <CssBaseline />
        <Router>
          <React.Fragment>
            <div className={classes.root}>
              <Header handleToggleDrawer={this.handleToggleDrawer} />
              <main
                className={classNames(classes.content, {
                  [classes.contentShift]: this.state.open
                })}
              >
                <Route exact path="/" component={Home} />
                <Route path="/setting" component={Setting} />
              </main>
            </div>
            <Sidebar open={this.state.open} drawerWidth={drawerWidth} />
          </React.Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(App));
