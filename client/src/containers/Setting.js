import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import PaletteIcon from "@material-ui/icons/Palette";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { toggleThemeMode, swapThemeColors } from "../store/reducers/settings";

const Settings = props => (
  <div>
    <Typography variant="headline">Settings</Typography>
    <Card>
      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <PaletteIcon />
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
            <ListItemSecondaryAction>
              <Switch
                onChange={(e, checked) => props.toggleThemeMode(checked)}
                checked={props.settings.darkMode}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CompareArrowsIcon />
            </ListItemIcon>
            <ListItemText primary="Swap Colors" />
            <ListItemSecondaryAction>
              <Switch
                onChange={(e, checked) => props.swapThemeColors(checked)}
                checked={props.settings.colorsSwaped}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  </div>
);

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleThemeMode: checked => toggleThemeMode(checked),
      swapThemeColors: checked => swapThemeColors(checked)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
