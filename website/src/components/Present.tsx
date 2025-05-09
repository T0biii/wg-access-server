import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppState } from '../AppState';
import React from 'react';
import { createRoot } from 'react-dom/client';

export function present<T>(content: (close: (result: T) => void) => React.ReactNode) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container!); 

  return new Promise<T>((resolve) => {
    const close = (result: T) => {
      root.unmount();
      resolve(result);
    };
    root.render(<>{content(close)}</>);
  });
}

export function confirm(msg: string): Promise<boolean> {
  const darkLightTheme = createTheme({
    palette: {
      mode: AppState.darkMode ? 'dark' : 'light',
    },
  });

  return present<boolean>((close) => (
    <ThemeProvider theme={darkLightTheme}>
      <Dialog open={true} onClose={() => close(false)}>
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText>{msg}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => close(false)} variant="contained" color="primary" autoFocus>
            Cancel
          </Button>
          <Button onClick={() => close(true)} variant="outlined" color="secondary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  ));
}
