import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import './index.css';
import * as serviceWorker from './serviceWorker';
const ThemeContext = React.createContext('dark');

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#DEB226',
      contrastText: '#000',
    },
    secondary: {
      main: '#AF2858',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
