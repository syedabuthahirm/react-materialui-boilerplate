import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: "fixed",
    top: theme.spacing.unit * 8,
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 8,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  }
});

const Sidebar = props => {
  const { open, classes } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !open && classes.drawerPaperClose
        )
      }}
      open={open}
    >
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/setting">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
