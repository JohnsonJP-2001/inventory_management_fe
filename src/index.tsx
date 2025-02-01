import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteDetails from './routes/routes';
import { Box } from '@mui/material';
import SideBar from './Components/Sidebar/Sidebar';
import MainLayout from './Views/MainLayout/MainLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Box style={{ width: "100vw", height: "100vh" }}>
      <Box style={{ padding: '10px' }}>
        <MainLayout />
      </Box>
    </Box>
  </React.StrictMode>
);
