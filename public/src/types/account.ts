export interface accountState {
 firstName: string
 lastName: string
 email: string
 profilePicture: string
 loading: boolean
 error: null | string
}

export enum AccountActionTypes {
 FETCH_ACCOUNT = 'FETCH_ACCOUNT',
 FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS',
 FETCH_ACCOUNT_FAIL = 'FETCH_ACCOUNT_FAIL',
}

interface FetchAccountAction {
 type: AccountActionTypes.FETCH_ACCOUNT
}

interface FetchAccountSuccessAction {
 type: AccountActionTypes.FETCH_ACCOUNT_SUCCESS
 payload: {
  firstName: string
  lastName: string
  email: string
  profilePicture: string
 }
}

interface FetchAccountFailAction {
 type: AccountActionTypes.FETCH_ACCOUNT_FAIL
 payload: string
}

export type accountAction = FetchAccountAction | FetchAccountSuccessAction | FetchAccountFailAction
