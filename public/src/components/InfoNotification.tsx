import React from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/auseActions'

const Alert = (props: AlertProps) => {
 return <MuiAlert elevation={6} variant='filled' {...props} />
}

const InfoNotification: React.FC = () => {
 const { infoSnackbarOpen, infoSnackbarMessage } = useTypedSelector(state => state.snackbar)
 const { clearSnackbar } = useActions()

 const handleClose = () => {
  clearSnackbar()
 }

 return (
  <Snackbar autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={infoSnackbarOpen} onClose={handleClose}>
   <Alert onClose={handleClose} severity='info'>
    {infoSnackbarMessage}
   </Alert>
  </Snackbar>
 )
}

export default InfoNotification
