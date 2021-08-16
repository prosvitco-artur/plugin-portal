import axios from 'axios'
import { Dispatch } from 'redux'
import { linksPageAction, LinksPageActionTypes } from '../../types/linkspage'
import { snackbarAction, SnackbarActionTypes } from '../../types/snackbar'

export const fetchLinksPage = () => {
 return async (dispatch: Dispatch<linksPageAction | snackbarAction>) => {
  try {
   dispatch({ type: LinksPageActionTypes.FETCH_LINKS_PAGE })
   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
   setTimeout(() => {
    dispatch({
     type: LinksPageActionTypes.FETCH_LINKS_PAGE_SUCCESS,
     payload: [
      {
       img: 'https://servicexservice.com/wp-content/uploads/2021/04/liberty_logo.png',
       description: 'Tax Preparation, File Taxes, Income Tax Filing | Liberty',
       url: 'https://www.libertytax.com/',
      },
      {
       img: 'https://servicexservice.com/wp-content/uploads/2021/04/egnyte_logo.png',
       description: 'One Unified Platform to Govern and Secure Content Everywhere',
       url: 'https://www.egnyte.com/',
      },
     ],
    })
    dispatch({ type: SnackbarActionTypes.SNACKBAR_INFO, payload: 'Links Loaded' })
   }, 2000)
  } catch (error) {
   dispatch({ type: LinksPageActionTypes.FETCH_LINKS_PAGE_FAIL, payload: 'Loading Links Page Error' })
   dispatch({ type: SnackbarActionTypes.SNACKBAR_ERROR, payload: 'Loading Links Page Error' })
  }
 }
}
