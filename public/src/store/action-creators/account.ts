import axios from 'axios'
import { Dispatch } from 'redux'
import { accountAction, AccountActionTypes } from '../../types/account'
import { API_URL } from '../../api'

export const fetchAccount = () => {
 return async (dispatch: Dispatch<accountAction>) => {
  try {
   dispatch({ type: AccountActionTypes.FETCH_ACCOUNT })
   const response = await axios.get(API_URL + 'user')
   const received = response.data
   if (await received.status === 'success') {
     
   } else {
     dispatch({ type: AccountActionTypes.FETCH_ACCOUNT_FAIL, payload: 'Loading Account Error' })
   }
   setTimeout(() => {
    dispatch({
     type: AccountActionTypes.FETCH_ACCOUNT_SUCCESS,
     payload: {
      firstName: 'First',
      lastName: 'Last',
      email: 'first@last.email',
      profilePicture: 'https://via.placeholder.com/110',
     },
    })
   }, 2000)
  } catch (error) {
   dispatch({ type: AccountActionTypes.FETCH_ACCOUNT_FAIL, payload: 'Loading Account Error' })
  }
 }
}
