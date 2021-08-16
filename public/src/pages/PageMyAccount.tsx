import React, { FormEvent, useState, useEffect } from 'react'
import { FormControl, OutlinedInput, InputLabel, Grid, FormHelperText, makeStyles, Button, Theme, CircularProgress, Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { MyAccountPageActionTypes } from '../types/myaccountpage'
import { useActions } from '../hooks/auseActions'

const useStyles = makeStyles((theme: Theme) => ({
 formControl: {
  marginBottom: theme.spacing(3),
  paddingLeft: 0,
  paddingRight: 0,
 },
 helper: {
  position: 'absolute',
  bottom: -20,
  left: 0,
  color: '#f44336',
 },
 legend: {
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
 },
 button: {
  width: '100%',
 },
 progress: {
  position: 'absolute',
  top: 'calc(50% - 20px)',
  left: 'calc(50% - 20px)',
 },
}))

const emailREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordREGEX = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

const PageMyAccount: React.FC = () => {
 const { firstName, lastName, email, loading, profilePicture, error, message } = useTypedSelector(state => state.myAccountPage)
 const [validFN, setValidFN] = useState(false)
 const [validLN, setValidLN] = useState(false)
 const [validE, setValidE] = useState(false)
 const [validP, setValidP] = useState(true)
 const [validNP, setvalidNP] = useState(true)
 const [validCNP, setValidCNP] = useState(true)
 const [currentPassword, setCurrentPassword] = useState('')
 const [newPassword, setNewPassword] = useState('')
 const [confirmNewPassword, setConfirmNewPassword] = useState('')
 const classes = useStyles()
 const dispatch = useDispatch()
 const { fetchMyAccountPage, updateMyAccountPage } = useActions()

 const handleUpdate = (event: FormEvent<EventTarget>, label: string) => {
  const target = event.target as HTMLInputElement

  if (label === 'email') {
   dispatch({ type: MyAccountPageActionTypes.UPDATE_EMAIL, payload: target.value })
  }

  if (label === 'lastName') {
   dispatch({ type: MyAccountPageActionTypes.UPDATE_LAST_NAME, payload: target.value })
  }

  if (label === 'firstName') {
   dispatch({ type: MyAccountPageActionTypes.UPDATE_FIRST_NAME, payload: target.value })
  }

  if (label === 'password') {
   setCurrentPassword(target.value)
   setValidP(target.value.length > 5)
  }

  if (label === 'newPassword') {
   setNewPassword(target.value)
   setvalidNP(passwordREGEX.test(target.value))
  }

  if (label === 'confirmNewPassword') {
   setConfirmNewPassword(target.value)
   setValidCNP(newPassword === target.value)
  }
 }

 const checkDataOnLoad = () => {
  setValidE(emailREGEX.test(String(email).toLowerCase()))
  setValidFN(firstName.length >= 1)
  setValidLN(lastName.length >= 1)
 }

 useEffect(() => {
  fetchMyAccountPage()
 }, [])

 useEffect(
  () => {
   checkDataOnLoad()
  },
  [email, firstName, lastName]
 )

 const triggerUpdate = () => {
  if (currentPassword.length >= 1 || newPassword.length >= 1 || confirmNewPassword.length >= 1) {
   if (currentPassword.length <= 5) {
    setValidP(false)
    return false
   }

   setValidP(true)

   if (!passwordREGEX.test(newPassword)) {
    setvalidNP(false)
    return false
   }

   setvalidNP(true)

   console.log(newPassword === confirmNewPassword)
   if (newPassword !== confirmNewPassword) {
    setValidCNP(false)
    return false
   }

   setValidCNP(true)

   if (currentPassword.length >= 6 && passwordREGEX.test(newPassword) && newPassword === confirmNewPassword) {
    updateMyAccountPage({ firstName, lastName, email, profilePicture, password: newPassword })
   }
  } else {
   updateMyAccountPage({ firstName, lastName, email, profilePicture, password: '' })
  }
 }

 return (
  <div className={`portal__page`}>
   <form noValidate>
    {loading && <CircularProgress className={classes.progress} />}
    <div className={loading ? 'portal__form-loading' : ''}>
     <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
       <div className={classes.formControl}>
        <FormControl fullWidth variant='outlined' required>
         <InputLabel htmlFor='first-name'>First Name</InputLabel>
         <OutlinedInput
          error={!validFN}
          labelWidth={105}
          id='first-name'
          value={firstName}
          onInput={e => {
           handleUpdate(e, 'firstName')
          }}
         />
         {!validFN && <FormHelperText className={classes.helper}>Field can't be blank</FormHelperText>}
        </FormControl>
       </div>
      </Grid>
      <Grid item xs={12} sm={6}>
       <div className={classes.formControl}>
        <FormControl fullWidth variant='outlined' required>
         <InputLabel htmlFor='last-name'>Last Name</InputLabel>
         <OutlinedInput
          error={!validLN}
          labelWidth={105}
          id='last-name'
          value={lastName}
          onInput={e => {
           handleUpdate(e, 'lastName')
          }}
         />
         {!validLN && <FormHelperText className={classes.helper}>Field can't be blank</FormHelperText>}
        </FormControl>
       </div>
      </Grid>
      <Grid item xs={12}>
       <div className={classes.formControl}>
        <FormControl fullWidth variant='outlined' required>
         <InputLabel htmlFor='email'>Email</InputLabel>
         <OutlinedInput
          error={!validE}
          labelWidth={65}
          id='email'
          value={email}
          onInput={e => {
           handleUpdate(e, 'email')
          }}
         />
         {!validE && <FormHelperText className={classes.helper}>Enter real email</FormHelperText>}
        </FormControl>
       </div>
      </Grid>
      <Grid item xs={12}>
       <legend className={classes.legend}>Password Change</legend>
       <div className={classes.formControl}>
        <FormControl fullWidth variant='outlined' required>
         <InputLabel htmlFor='current-password'>Current Password</InputLabel>
         <OutlinedInput
          error={!validP}
          labelWidth={145}
          id='current-password'
          onInput={e => {
           handleUpdate(e, 'password')
          }}
         />
         {!validP && <FormHelperText className={classes.helper}>Enter Your current password</FormHelperText>}
        </FormControl>
       </div>
      </Grid>
      <Grid item xs={12}>
       <div className={classes.formControl}>
        <FormControl fullWidth variant='outlined' required>
         <InputLabel htmlFor='new-password'>New Password</InputLabel>
         <OutlinedInput
          error={!validNP}
          labelWidth={125}
          id='new-password'
          onInput={e => {
           handleUpdate(e, 'newPassword')
          }}
         />
         {!validNP && <FormHelperText className={classes.helper}>Min 6 chars and contain: uppercase letter, lowercase letter, symbol </FormHelperText>}
        </FormControl>
       </div>
      </Grid>
      <Grid item xs={12}>
       <div className={classes.formControl}>
        <FormControl fullWidth variant='outlined' required>
         <InputLabel htmlFor='confirm-password'>Confirm new Password</InputLabel>
         <OutlinedInput
          error={!validCNP}
          labelWidth={185}
          id='confirm-password'
          onInput={e => {
           handleUpdate(e, 'confirmNewPassword')
          }}
         />
         {!validCNP && <FormHelperText className={classes.helper}>New Password didn't match Confirm Password</FormHelperText>}
        </FormControl>
       </div>
      </Grid>
      <Grid item xs={12}>
       <Button disabled={!validE || !validFN || !validLN} onClick={triggerUpdate} variant='contained' color='primary' size='large' className={classes.button}>
        Save Changes
       </Button>
      </Grid>
     </Grid>
    </div>
   </form>
  </div>
 )
}

export default PageMyAccount
