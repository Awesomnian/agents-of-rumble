import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import { useLoading } from '../context/LoadingContext';

interface LoadingOverlayProps {
  children: React.ReactNode;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ children }) => {
  const { isLoading, loadingMessage } = useLoading();

  return (
    <div style={{ position: 'relative' }}>
      {children}
      
      {isLoading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 9999,
          }}
        >
          <CircularProgress size={60} sx={{ color: 'white' }} />
          <Typography variant="h6" sx={{ mt: 2, color: 'white' }}>
            {loadingMessage}
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default LoadingOverlay;
