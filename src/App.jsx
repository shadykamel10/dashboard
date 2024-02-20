import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './comopnents/Navbar';
import Sidebar from './comopnents/Sidebar';
import { getDesignTokens } from './Theme';
import { Outlet } from 'react-router-dom';
// import { Typography } from '@mui/material';






const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));





export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);



  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  }
  const [mode, setMode] = React.useState(localStorage.getItem('theme') || 'dark');

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}/>


        <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
          <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}