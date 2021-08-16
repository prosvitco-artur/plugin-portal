import { myAccountPageState, myAccountPageAction, MyAccountPageActionTypes } from '../../types/myaccountpage'

const initialState: myAccountPageState = {
 firstName: '',
 lastName: '',
 email: '',
 profilePicture: '',
 message: '',
 loading: true,
 error: null,
}

export const myAccountPageReducer = (state = initialState, action: myAccountPageAction): myAccountPageState => {
 switch (action.type) {
  case MyAccountPageActionTypes.FETCH_MY_ACCOUNT_PAGE:
   return {
    ...state,
    ...{ loading: true },
   }
  case MyAccountPageActionTypes.FETCH_MY_ACCOUNT_PAGE_SUCCESS:
   return {
    firstName: action.payload.firstName,
    lastName: action.payload.lastName,
    email: action.payload.email,
    profilePicture: action.payload.profilePicture,
    message: '',
    loading: false,
    error: null,
   }
  case MyAccountPageActionTypes.FETCH_MY_ACCOUNT_PAGE_FAIL:
   return {
    ...state,
    ...{ error: action.payload },
   }
  case MyAccountPageActionTypes.UPDATE_MY_ACCOUNT_PAGE:
   return {
    ...state,
    ...{ loading: true, message: '' },
   }
  case MyAccountPageActionTypes.UPDATE_MY_ACCOUNT_PAGE_SUCCESS:
   return {
    ...state,
    ...{
     loading: false,
    },
   }
  case MyAccountPageActionTypes.UPDATE_MY_ACCOUNT_PAGE_FAIL:
   return {
    ...state,
    ...{ loading: false, error: action.payload },
   }
  case MyAccountPageActionTypes.UPDATE_FIRST_NAME:
   return {
    ...state,
    ...{ firstName: action.payload },
   }
  case MyAccountPageActionTypes.UPDATE_LAST_NAME:
   return {
    ...state,
    ...{ lastName: action.payload },
   }
  case MyAccountPageActionTypes.UPDATE_EMAIL:
   return {
    ...state,
    ...{ email: action.payload },
   }
  case MyAccountPageActionTypes.UPDATE_MESSAGE:
   return {
    ...state,
    ...{ message: action.payload },
   }
  default:
   return state
 }
}
