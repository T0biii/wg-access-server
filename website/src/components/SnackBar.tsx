import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

interface SnackbarProps {
    message: String;
    color: string;
    open: boolean;
    onClose: () => void; 
}

export default function SnackBar({ message, color, open, onClose}: SnackbarProps) {
    
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      onClose();
    };
  
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message={message}
            color={color}
        />
    );

}

