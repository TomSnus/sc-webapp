import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from "react";
import ImageBoard from '../imageComponents/ImageBoard';
import ImageList from '../imageComponents/ImageList';
import ImageOperation from '../imageComponents/ImageOperation';

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
    height: 550,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

export default function Image() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid   direction="row"
          container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Paper className={fixedHeightPaper}>
              <ImageBoard />
            </Paper>
          </Grid>
          <Grid alignItems="flex-start" item justify={'space-evenly'} xs={12} lg={4}>
            <Paper className={fixedHeightPaper}>
              <ImageList />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Paper className={classes.paper}>
            <ImageOperation />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
};