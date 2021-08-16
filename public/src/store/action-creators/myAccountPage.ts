import axios from 'axios'
import { Dispatch } from 'redux'
import { myAccountPageAction, MyAccountPageActionTypes } from '../../types/myaccountpage'
import { snackbarAction, SnackbarActionTypes } from '../../types/snackbar'
import { API_URL } from '../../api'

export const fetchMyAccountPage = () => {
 return async (dispatch: Dispatch<myAccountPageAction | snackbarAction>) => {
  try {
   dispatch({ type: MyAccountPageActionTypes.FETCH_MY_ACCOUNT_PAGE })
   const response = await axios.get(API_URL + 'user')
   const received = await response.data
   if ((await received.status) === 'success') {
    dispatch({
     type: MyAccountPageActionTypes.FETCH_MY_ACCOUNT_PAGE_SUCCESS,
     payload: {
      firstName: received.data.first_name,
      lastName: received.data.last_name,
      email: received.data.user_email,
      profilePicture: 'https://via.placeholder.com/110',
     },
    })
    dispatch({ type: SnackbarActionTypes.SNACKBAR_INFO, payload: 'Account Loaded' })
   } else {
    dispatch({ type: MyAccountPageActionTypes.FETCH_MY_ACCOUNT_PAGE_FAIL, payload: 'Loading My Account Page Error' })
    dispatch({ type: SnackbarActionTypes.SNACKBAR_ERROR, payload: 'Loading My Account Page Error' })
   }
  } catch (error) {
   dispatch({ type: MyAccountPageActionTypes.FETCH_MY_ACCOUNT_PAGE_FAIL, payload: 'Loading My Account Page Error' })
   dispatch({ type: SnackbarActionTypes.SNACKBAR_ERROR, payload: 'Loading My Account Page Error' })
  }
 }
}

export const updateMyAccountPage = (
 data = {
  firstName: '',
  lastName: '',
  email: '',
  profilePicture: '',
  password: '',
 }
) => {
 return async (dispatch: Dispatch<myAccountPageAction | snackbarAction>) => {
  try {
   dispatch({ type: MyAccountPageActionTypes.UPDATE_MY_ACCOUNT_PAGE })
   const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data)

   setTimeout(() => {
    dispatch({ type: MyAccountPageActionTypes.UPDATE_MY_ACCOUNT_PAGE_SUCCESS })
    dispatch({ type: SnackbarActionTypes.SNACKBAR_SUCCESS, payload: 'Changes Saved' })
   }, 2000)
  } catch (error) {
   dispatch({ type: MyAccountPageActionTypes.UPDATE_MY_ACCOUNT_PAGE_FAIL, payload: 'Updating My Account Page Error' })
   dispatch({ type: SnackbarActionTypes.SNACKBAR_ERROR, payload: 'Updating My Account Page Error' })
  }
 }
}
