import { SnackbarState, snackbarAction, SnackbarActionTypes } from '../../types/snackbar'

const initialState: SnackbarState = {
 successSnackbarOpen: false,
 errorSnackbarOpen: false,
 infoSnackbarOpen: false,
 successSnackbarMessage: '',
 errorSnackbarMessage: '',
 infoSnackbarMessage: '',
}

export const snackbarReducer = (state = initialState, action: snackbarAction): SnackbarState => {
 switch (action.type) {
  case SnackbarActionTypes.SNACKBAR_SUCCESS:
   return {
    ...state,
    successSnackbarOpen: true,
    successSnackbarMessage: action.payload,
   }
  case SnackbarActionTypes.SNACKBAR_ERROR:
   return {
    ...state,
    errorSnackbarOpen: true,
    errorSnackbarMessage: action.payload,
   }
  case SnackbarActionTypes.SNACKBAR_INFO:
   return {
    ...state,
    infoSnackbarOpen: true,
    infoSnackbarMessage: action.payload,
   }
  case SnackbarActionTypes.SNACKBAR_CLEAR:
   return {
    ...state,
    successSnackbarOpen: false,
    errorSnackbarOpen: false,
    infoSnackbarOpen: false,
   }
  default:
   return state
 }
}
