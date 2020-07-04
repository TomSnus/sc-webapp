import React from "react";
import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
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
const ResetPassword = () => (
    <Container>
    <div>
        <h2>ResetPassword</h2>
    </div>
    <p>

        'Test'
        <h2>ResetPassword</h2>
    </p>
    <Box pt={4}>
        <Copyright />
    </Box>
    </Container>
);

export default ResetPassword;