import { accountAction, accountState, AccountActionTypes } from '../../types/account'

const initialState: accountState = {
 firstName: '',
 lastName: '',
 email: '',
 profilePicture: '',
 loading: true,
 error: null,
}

export const accountReducer = (state = initialState, action: accountAction): accountState => {
 switch (action.type) {
  case AccountActionTypes.FETCH_ACCOUNT:
   return {
    loading: true,
    error: null,
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: '',
   }
  case AccountActionTypes.FETCH_ACCOUNT_SUCCESS:
   return {
    loading: false,
    error: null,
    firstName: action.payload.firstName,
    lastName: action.payload.lastName,
    email: action.payload.email,
    profilePicture: action.payload.profilePicture,
   }
  case AccountActionTypes.FETCH_ACCOUNT_FAIL:
   return {
    loading: false,
    error: action.payload,
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: '',
   }
  default:
   return state
 }
}
