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
        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          <div key="a" data-grid={{ x: 0, y: 0, w: 9, h: 4 }}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper></div>
          <div key="b" data-grid={{ x: 0, y: 6, w: 3, h: 4 }}><Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper></div>
          <div key="c" data-grid={{ x: 0, y: 6, w: 12, h: 4 }}><Paper className={classes.paper}>
            <Orders />
          </Paper></div>
        </GridLayout>
      </Container>
    </main >
  )
}
