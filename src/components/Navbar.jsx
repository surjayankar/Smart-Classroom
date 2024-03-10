import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const [addAnchorEl, setAddAnchorEl] = useState(null);

  function handleAvatarClick(event) {
    setAvatarAnchorEl(event.currentTarget);
  }

  function handleAddClick(event) {
    setAddAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAvatarAnchorEl(null);
    setAddAnchorEl(null);
  }

  function handleLogout() {
    // Add your logout logic here
    console.log('Logout clicked');
    handleClose();
  }

  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <AppBar position="static">
      <Toolbar>
        
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Avatar alt="Smart Classroom" src="./src/photos/sclogo.png" sx={{ width: 30, height: 30, marginRight:2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Smart Classroom
        </Typography>
        <Button
          color="inherit"
          aria-controls="add-menu"
          aria-haspopup="true"
          onClick={handleAddClick}
        >
          <AddIcon />
        </Button>
        <Menu
          id="add-menu"
          anchorEl={addAnchorEl}
          keepMounted
          open={Boolean(addAnchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Join Class</MenuItem>
          <MenuItem onClick={handleClose}>Create Class</MenuItem>
        </Menu>
        <Button
          color="inherit"
          aria-controls="avatar-menu"
          aria-haspopup="true"
          onClick={handleAvatarClick}
        >
          <Avatar {...stringAvatar('Purnendu Kumar Misra')} />
        </Button>
        <Menu
          id="avatar-menu"
          anchorEl={avatarAnchorEl}
          keepMounted
          open={Boolean(avatarAnchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
