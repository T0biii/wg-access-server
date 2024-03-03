import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert, AlertColor,} from '@mui/material';

interface SnackbarProps {
    message: String;
    severity: AlertColor;
    open: boolean;
    onClose: () => void; 
}

export default function SnackBar({ message, severity, open, onClose}: SnackbarProps) {
    
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      onClose();
    };
  
    return (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                    >
         {message}
            </Alert>
        </Snackbar>

    );

}

