import axios from 'axios'
import { Dispatch } from 'redux'
import { mainPageAction, MainPageActionTypes } from '../../types/mainpage'
import { snackbarAction, SnackbarActionTypes } from '../../types/snackbar'

export const fetchMainPage = () => {
 return async (dispatch: Dispatch<mainPageAction | snackbarAction>) => {
  try {
   dispatch({ type: MainPageActionTypes.FETCH_MAIN_PAGE })
   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
   setTimeout(() => {
    dispatch({
     type: MainPageActionTypes.FETCH_MAIN_PAGE_SUCCESS,
     payload: {
      title: 'Hello! Welcome to the new Service2 Portal!',
      subtitle: 'Here you can find important documents, links to your accounts on the applications we use and a helpful calendar detailing everything we have scheduled together.',
      textArray: ['Text line 1', 'Text line 2']
     },
    })
    dispatch({ type: SnackbarActionTypes.SNACKBAR_INFO, payload: 'Portal Loaded' })
   }, 2000)
  } catch (error) {
   dispatch({ type: MainPageActionTypes.FETCH_MAIN_PAGE_FAIL, payload: 'Loading Main Page Error' })
   dispatch({ type: SnackbarActionTypes.SNACKBAR_ERROR, payload: 'Loading Portal Error' })
  }
 }
}
