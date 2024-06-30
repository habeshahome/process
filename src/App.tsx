import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <RouterProvider
      router={routes}
      fallbackElement={<Typography> Failed to load browserRouter </Typography>}
    />
  );
}

export default App;
