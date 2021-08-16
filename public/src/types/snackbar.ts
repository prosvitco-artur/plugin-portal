export interface SnackbarState {
 successSnackbarOpen: boolean
 errorSnackbarOpen: boolean
 infoSnackbarOpen: boolean
 successSnackbarMessage: string
 errorSnackbarMessage: string
 infoSnackbarMessage: string
}

export enum SnackbarActionTypes {
 SNACKBAR_SUCCESS = 'SNACKBAR_SUCCESS',
 SNACKBAR_ERROR = 'SNACKBAR_ERROR',
 SNACKBAR_INFO = 'SNACKBAR_INFO',
 SNACKBAR_CLEAR = 'SNACKBAR_CLEAR',
}

interface SnackbarSuccessAction {
 type: SnackbarActionTypes.SNACKBAR_SUCCESS
 payload: string
}

interface SnackbarErrorAction {
 type: SnackbarActionTypes.SNACKBAR_ERROR
 payload: string
}

interface SnackbarInfoAction {
 type: SnackbarActionTypes.SNACKBAR_INFO
 payload: string
}

interface SnackbarClearAction {
 type: SnackbarActionTypes.SNACKBAR_CLEAR
}

export type snackbarAction = SnackbarSuccessAction | SnackbarErrorAction | SnackbarInfoAction | SnackbarClearAction
