import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

const TOGGLETHEMEMODE = "settings/TOGGLETHEMEMODE";
const SWAPTHEMECOLORS = "settings/SWAPTHEMECOLORS";

const primaryColor = indigo;
const secondaryColor = green;

const themeConfig = {
  palette: {
    primary: indigo,
    secondary: green,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
};

// All the following keys are optional.
// We try our best to provide a great default value.
const defaultTheme = createMuiTheme(themeConfig);

const initState = {
  theme: defaultTheme,
  darkMode: false,
  colorsSwaped: false
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case TOGGLETHEMEMODE:
      if (action.enableDark) {
        return {
          ...state,
          theme: createMuiTheme({
            ...themeConfig,
            palette: {
              ...themeConfig.palette,
              primary: state.theme.palette.primary,
              secondary: state.theme.palette.secondary,
              type: "dark"
            }
          }),
          darkMode: true
        };
      }
      return {
        ...state,
        theme: createMuiTheme({
          ...themeConfig,
          palette: {
            ...themeConfig.palette,
            primary: state.theme.palette.primary,
            secondary: state.theme.palette.secondary
          }
        }),
        darkMode: false
      };

    case SWAPTHEMECOLORS:
      if (action.colorsSwaped) {
        return {
          ...state,
          theme: createMuiTheme({
            ...themeConfig,
            palette: {
              ...state.theme.palette,
              primary: secondaryColor,
              secondary: primaryColor
            }
          }),
          colorsSwaped: true
        };
      }
      return {
        ...state,
        theme: createMuiTheme({
          ...themeConfig,
          palette: {
            ...state.theme.palette,
            primary: primaryColor,
            secondary: secondaryColor
          }
        }),
        colorsSwaped: false
      };

    default:
      return state;
  }
}

export function toggleThemeMode(enableDark) {
  return {
    type: TOGGLETHEMEMODE,
    enableDark
  };
}

export function swapThemeColors(colorsSwaped) {
  return {
    type: SWAPTHEMECOLORS,
    colorsSwaped
  };
}
