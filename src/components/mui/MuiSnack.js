import React from 'react'
import { Snackbar, Alert } from '@mui/material'
const MuiSnack = ({ open, setOpen, text, severity }) => {

    return (
        <>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                severity={severity}
            >
                <Alert
                    onClose={() => setOpen(false)}
                    severity={severity}
                    sx={{ width: '100%' }}
                >
                    {text}
                </Alert>
            </Snackbar >
        </>
    )
}

export default MuiSnack