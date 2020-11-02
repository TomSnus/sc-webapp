import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import Title from '../../Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
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

export default function ContainerOperation() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <React.Fragment>
            <Title>Image Operation</Title>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} lg={4}>
                    <Paper className={fixedHeightPaper}>
                    <Title>Start Container</Title>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3} lg={4}>
                    <Paper className={fixedHeightPaper}>
                    <Title>Recent Orders</Title>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} lg={4}>
                    <Paper className={fixedHeightPaper}>
                    <Title>Recent Orders</Title>
                    </Paper>
                </Grid>
            </Grid>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more orders
        </Link>
            </div>
        </React.Fragment>
    );
}
