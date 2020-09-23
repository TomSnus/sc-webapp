import React from "react";
import { Container } from "@material-ui/core";
import { WidthProvider, Responsive } from "react-grid-layout";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import GridLayout from 'react-grid-layout';
import Chart from '../Chart';
import Deposits from '../Deposits';
import Orders from '../Orders';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Convert() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
<Paper>Test</Paper>
      </Container>
    </main >
  )
}
