import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Badge, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ width: '100%', position: 'absolute', left: 0, top: 0, backgroundColor: '#263238', padding: 2 }}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', maxWidth: '100%' }}>
                {/* Icon and Logo */}
                <Box sx= {{ display: 'flex' }}>
                    <FitnessCenterIcon sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '45px', mr: 1 }} />
                    <Typography variant="h4" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, mr: 1 }}>
                        Fitness Tracker
                    </Typography>
                </Box>
                {/* Menu for smaller screens */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', sm: 'none' }, mr: 1 }}
                    onClick={handleMenuOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Exercises</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Routines</MenuItem>
                </Menu>
                {/* Buttons for larger screens */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex'}, paddingLeft: '15px'}}>
                    <Button color="inherit" sx={{fontSize: '20px'}}>Home</Button>
                    <Button color="inherit" sx={{fontSize: '20px'}}>Exercises</Button>
                    <Button color="inherit" sx={{fontSize: '20px'}}>Routines</Button>
                </Box>
                {/* Notification and User Avatar */}
                <IconButton color="inherit">
                    <Badge variant="dot" color="error">
                        <NotificationsIcon sx={{fontSize:'35px'}}/>
                    </Badge>
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle  sx={{fontSize:'35px'}}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
