import React from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/auseActions'

const Alert = (props: AlertProps) => {
 return <MuiAlert elevation={6} variant='filled' {...props} />
}

const ErrorNotification: React.FC = () => {
 const { errorSnackbarOpen, errorSnackbarMessage } = useTypedSelector(state => state.snackbar)
 const { clearSnackbar } = useActions()

 const handleClose = () => {
  clearSnackbar()
 }

 return (
  <Snackbar autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={errorSnackbarOpen} onClose={handleClose}>
   <Alert onClose={handleClose} severity='error'>
    {errorSnackbarMessage}
   </Alert>
  </Snackbar>
 )
}

export default ErrorNotification
