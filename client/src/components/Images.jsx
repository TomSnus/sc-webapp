import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import React from "react";
import Chart from '../Chart';
import Deposits from '../Deposits';
import Orders from '../Orders';
import Styles from '../style';
import { withStyles } from 'material-ui/styles';

<Images classes={Styles.useStyles()} />
<Images foo={clsx(classes.paper, classes.fixedHeight)} />
class Images extends React.Component {
  render() {
    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
          </Box>
        </Container>
      </main>
    );
  }
}

Images.propTypes = {
  classes: Styles.useStyles(),
  fixedHeightPaper:clsx(classes.paper, classes.fixedHeight)
};
export default withStyles (Images);
