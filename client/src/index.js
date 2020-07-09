import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
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
