import {  Box, IconButton, InputBase, Stack, alpha, styled, useTheme } from "@mui/material"
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import React from "react"

// eslint-disable-next-line react/prop-types
const Navbar = ({open, handleDrawerOpen,setMode}) => {
    const drawerWidth = 240;

    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    }));

    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    }));
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      // @ts-ignore
      })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));
      const theme = useTheme();
      const colorMode = React.useMemo(
        () => ({
          // The dark mode switch would invoke this method
          toggleColorMode: () => {
            localStorage.setItem('theme', theme.palette.mode === 'light' ? 'dark' : 'light');
            setMode((prevMode) =>
              prevMode === 'light' ? 'dark' : 'light',
            );
          },
        }),
        [setMode, theme.palette.mode],
      );
  return (
    <AppBar position="fixed" 
      // @ts-ignore
      open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>


          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box flexGrow={1}/>

            <Stack direction="row" >

            {theme.palette.mode ==='light' ?<IconButton aria-label="delete" color="inherit" onClick={colorMode.toggleColorMode}>
              <LightModeOutlinedIcon />
            </IconButton>: <IconButton aria-label="delete" color="inherit" onClick={colorMode.toggleColorMode}>
              <DarkModeOutlinedIcon />
            </IconButton>}
            








            <IconButton aria-label="delete" color="inherit">
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete" color="inherit">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton aria-label="delete" color="inherit">
              <Person2OutlinedIcon />
            </IconButton>
            </Stack>


        </Toolbar>
      </AppBar>
  )
}

export default Navbar
