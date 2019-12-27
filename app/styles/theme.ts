import { createMuiTheme } from '@material-ui/core';
import {
  primaryColor,
  secondaryColor,
  badgeColor,
  textColor,
  backgroundColor,
  borderColor,
} from './colors';

const theme = () =>
  createMuiTheme(
    {
      spacing: 4,
      palette: {
        primary: {
          main: primaryColor,
          contrastText: '#FFF',
        },
        secondary: {
          main: secondaryColor,
          contrastText: '#FFF',
        },
        type: 'light',
      },
    },
);

export default theme;
