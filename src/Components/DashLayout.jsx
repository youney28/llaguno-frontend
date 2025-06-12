import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Assessment as ReportsIcon,
  People as UsersIcon,
  Article as ArticleIcon // NEW: Article icon
} from '@mui/icons-material';
import '../styles/Layout.css';

const drawerWidth = 240;

const DashLayout = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div style={{ padding: 30 }}>
          <Typography variant="h6">Admin Panel</Typography>
        </div>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard"
              selected={location.pathname === '/dashboard'}
            >
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/reports"
              selected={location.pathname === '/reports'}
            >
              <ListItemIcon><ReportsIcon /></ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/users"
              selected={location.pathname === '/users'}
            >
              <ListItemIcon><UsersIcon /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>

          {/* NEW: Articles section */}
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/articles"
              selected={location.pathname === '/dashboard/articles'}
            >
              <ListItemIcon><ArticleIcon /></ListItemIcon>
              <ListItemText primary="Articles" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <div style={{ flexGrow: 1, padding: '2rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
