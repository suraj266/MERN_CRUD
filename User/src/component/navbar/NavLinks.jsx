import { Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';


const NavLinks = () => {
    return (
        <>
            <NavLink to='/home' style={{ textDecoration: 'none', color: '#2F2E41' }}><Button color='inherit'>Home</Button></NavLink>
        </>
    )
}

export default NavLinks