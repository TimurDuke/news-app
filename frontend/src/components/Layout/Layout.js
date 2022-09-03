import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@mui/material";

const Layout = ({children}) => {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h4'>
                        <Link
                            to='/'
                            style={{
                                textDecoration: 'none',
                                color: '#fff'
                            }}
                        >
                            News
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            {children}
        </>
    );
};

export default Layout;