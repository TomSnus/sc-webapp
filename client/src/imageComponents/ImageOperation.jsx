import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

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

export default function ImageOperation() {
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
