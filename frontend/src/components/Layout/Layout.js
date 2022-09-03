import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@mui/material";

import './Layout.css';

const Layout = ({children}) => (
    <div className='container'>
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
    </div>
);

export default Layout;