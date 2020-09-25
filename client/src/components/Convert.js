import React from "react";
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { WidthProvider, Responsive } from "react-grid-layout";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import GridLayout from 'react-grid-layout';
import Chart from '../Chart';
import Deposits from '../Deposits';
import Orders from '../Orders';
import ConvertComponent from './convertComponents/ConvertComponent';
import TargetDB from './convertComponents/TargetDB';
import Upload from './convertComponents/Upload';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 450,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

export default function Convert() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
      <ConvertComponent />
      </Container>
    </main>
  )
}
