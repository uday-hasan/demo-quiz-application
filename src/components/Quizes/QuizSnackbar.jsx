import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
const QuizSnackbar = ({ open, handleClose, severity }) => {
    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {severity === 'success' ? 'Your answer was correct' : severity === 'error' ? 'You choose a wrong answer' : 'Please select an option'}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default QuizSnackbar;