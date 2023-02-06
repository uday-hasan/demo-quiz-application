import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Box, } from '@mui/material';
const QuizSnackbar = ({ open, handleClose, severity, explanation }) => {
    const [vertical, horizontal] = ['top', 'right']
    const [openExpSnackBar, setOpenExpSnackBar] = React.useState(false);
    const handleExpSnackBarOpen = () => setOpenExpSnackBar(true);
    const handleExpSnackBarClose = () => setOpenExpSnackBar(false);
    const ExpSnackBar = ({ explanation }) => {
        return <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleExpSnackBarClose}
            // message={explanation}
            anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}
            sx={{ marginTop: '7em' }}
        >
            <Alert onClose={handleClose} severity={'success'} sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>{explanation}</Alert>
        </Snackbar>
    }
    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>
                            {severity === 'success' ? 'Your answer was correct' : severity === 'error' ? 'You choose a wrong answer' : 'Please select an option'}
                        </p>
                        <p>
                            {
                                severity === 'error' && <button style={{ borderRadius: '0px', color: '#331b1b', background: '#d06a6a', marginLeft: '0.5em' }} onClick={handleExpSnackBarOpen} >See Explanation</button>
                            }
                            {
                                openExpSnackBar && <ExpSnackBar explanation={explanation} />
                            }
                        </p>
                    </Box>
                </Alert>
            </Snackbar>
        </div>
    );
};

export default QuizSnackbar;