import { Dispatch } from 'redux'
import { snackbarAction, SnackbarActionTypes } from '../../types/snackbar'

export const showSuccessSnackbar = (message: string) => {
 return (dispatch: Dispatch<snackbarAction>) => {
  dispatch({ type: SnackbarActionTypes.SNACKBAR_SUCCESS, payload: message })
 }
}

export const showErrorSnackbar = (message: string) => {
 return (dispatch: Dispatch<snackbarAction>) => {
  dispatch({ type: SnackbarActionTypes.SNACKBAR_ERROR, payload: message })
 }
}

export const showInfoSnackbar = (message: string) => {
 return (dispatch: Dispatch<snackbarAction>) => {
  dispatch({ type: SnackbarActionTypes.SNACKBAR_INFO, payload: message })
 }
}

export const clearSnackbar = () => {
 return (dispatch: Dispatch<snackbarAction>) => {
  dispatch({ type: SnackbarActionTypes.SNACKBAR_CLEAR })
 }
}
