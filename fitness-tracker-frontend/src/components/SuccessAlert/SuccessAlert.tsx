import { Box, IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon
import { useState } from 'react';

type Props = {
  message: string;
};

const SuccessAlert = ({ message }: Props) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ }}>
      {open && (
        <Alert
          severity="success"
          variant="filled"
          sx={{
            width: '300px',
            position: 'absolute',
            top: '50px',
            right: '50px',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            zIndex: 5,
          }}
        >
          {message}
          <IconButton
            color="inherit"
            size="small"
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Alert>
      )}
    </Box>
  );
};

export default SuccessAlert;
