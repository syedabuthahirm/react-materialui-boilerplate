import indigo from "@material-ui/core/colors/indigo";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { createSlice } from '@reduxjs/toolkit';

const primaryColor = indigo;
const secondaryColor = green;

const themeConfig = {
  typography: {
    useNextVariants: true,
  },
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
const defaultTheme = themeConfig;

export const settings = createSlice({
  name: 'settings',
  initialState: {
    theme: defaultTheme,
    darkMode: false,
    colorsSwaped: false
  },
  reducers: {
    toggleThemeMode: (state, action) => {
      if (action.payload) { //darknode set
        state.darkMode = true;
        state.theme = {
          ...themeConfig,
          palette: {
            ...themeConfig.palette,
            primary: state.theme.palette.primary,
            secondary: state.theme.palette.secondary,
            type: "dark"
          }
        };
      } else {
        state.darkMode = false;
        state.theme = {
          ...themeConfig,
          palette: {
            ...themeConfig.palette,
            primary: state.theme.palette.primary,
            secondary: state.theme.palette.secondary
          }
        };
      }

      state.value = action.payload;
    },
    swapThemeColors: (state, action) => {
      if (action.payload) { // colorsSwaped
        state.colorsSwaped = true;
        state.theme = {
            ...themeConfig,
            palette: {
              ...state.theme.palette,
              primary: secondaryColor,
              secondary: primaryColor
            }
          };
      } else {
        state.colorsSwaped = false;
        state.theme = {
          ...themeConfig,
          palette: {
            ...state.theme.palette,
            primary: primaryColor,
            secondary: secondaryColor
          }
        };
      }
    },
  },
});

export const { toggleThemeMode, swapThemeColors } = settings.actions;

export const isDarkMode = state => state.settings.darkMode;

export const isColorSwaped = state => state.settings.colorsSwaped;

export const getTheme = state => state.settings.theme;

export default settings.reducer;