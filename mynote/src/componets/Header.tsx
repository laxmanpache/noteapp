import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { logo } from '../constant/Contant'

const Header: React.FC = () => {
    return (
        <AppBar color="transparent" position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 30 ,marginRight:10}} />
                <Typography  color="initial">Lackynote</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header