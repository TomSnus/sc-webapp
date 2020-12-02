import { Container } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from "react";
import GridLayout from 'react-grid-layout';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const FAQ = () => (
    <main className='register'>
        <Container>
            <div>

                <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
                    <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>Test</div>
                    <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>Test2</div>
                    <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>Test3</div>
                </GridLayout>

            </div>
            <Box pt={4}>
                <Copyright />
            </Box>
        </Container>
    </main>
);

export default FAQ;