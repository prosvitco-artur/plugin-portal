import { SnackbarOrigin } from "@material-ui/core";

export interface myAccountPageState {
 firstName: string
 lastName: string
 email: string
 profilePicture: string
 loading: boolean
 message: string
 error: null | string
}

export interface SnackState extends SnackbarOrigin {
  open: boolean
}

export enum MyAccountPageActionTypes {
 FETCH_MY_ACCOUNT_PAGE = 'FETCH_MY_ACCOUNT_PAGE',
 FETCH_MY_ACCOUNT_PAGE_SUCCESS = 'FETCH_MY_ACCOUNT_PAGE_SUCCESS',
 FETCH_MY_ACCOUNT_PAGE_FAIL = 'FETCH_MY_ACCOUNT_PAGE_FAIL',
 UPDATE_MY_ACCOUNT_PAGE = 'UPDATE_MY_ACCOUNT_PAGE',
 UPDATE_MY_ACCOUNT_PAGE_SUCCESS = 'UPDATE_MY_ACCOUNT_PAGE_SUCCESS',
 UPDATE_MY_ACCOUNT_PAGE_FAIL = 'UPDATE_MY_ACCOUNT_PAGE_FAIL',
 UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME',
 UPDATE_LAST_NAME = 'UPDATE_LAST_NAME',
 UPDATE_EMAIL = 'UPDATE_EMAIL',
 UPDATE_MESSAGE = 'UPDATE_MESSAGE'
}

interface UpdateFirstName {
 type: MyAccountPageActionTypes.UPDATE_FIRST_NAME
 payload: string
}

interface UpdateLastName {
 type: MyAccountPageActionTypes.UPDATE_LAST_NAME
 payload: string
}

interface UpdateEmail {
 type: MyAccountPageActionTypes.UPDATE_EMAIL
 payload: string
}

interface FetchMyAccountPageAction {
 type: MyAccountPageActionTypes.FETCH_MY_ACCOUNT_PAGE
}

interface FetchMyAccountPageSuccessAction {
 type: MyAccountPageActionTypes.FETCH_MY_ACCOUNT_PAGE_SUCCESS
 payload: {
  firstName: string
  lastName: string
  email: string
  profilePicture: string
 }
}

interface FetchMyAccountPageFailAction {
 type: MyAccountPageActionTypes.FETCH_MY_ACCOUNT_PAGE_FAIL
 payload: string
}

interface UpdateMyAccountPageAction {
 type: MyAccountPageActionTypes.UPDATE_MY_ACCOUNT_PAGE
}

interface UpdateMyAccountPageSuccessAction {
 type: MyAccountPageActionTypes.UPDATE_MY_ACCOUNT_PAGE_SUCCESS
}

interface UpdateMyAccountPageFailAction {
 type: MyAccountPageActionTypes.UPDATE_MY_ACCOUNT_PAGE_FAIL
 payload: string
}

interface UpdateMessage {
  type: MyAccountPageActionTypes.UPDATE_MESSAGE
  payload: string
}

export type myAccountPageAction =
 | FetchMyAccountPageAction
 | FetchMyAccountPageSuccessAction
 | FetchMyAccountPageFailAction
 | UpdateMyAccountPageAction
 | UpdateMyAccountPageSuccessAction
 | UpdateMyAccountPageFailAction
 | UpdateFirstName
 | UpdateLastName
 | UpdateEmail
 | UpdateMessage
