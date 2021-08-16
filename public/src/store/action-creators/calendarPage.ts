import axios from 'axios'
import { Dispatch } from 'redux'
import { calendarPageAction, CalendarPageActionTypes } from '../../types/calendarpage'
import { snackbarAction, SnackbarActionTypes } from '../../types/snackbar'
import { API_URL } from '../../api'

export const fetchCalendarPage = () => {
 return async (dispatch: Dispatch<calendarPageAction | snackbarAction>) => {
  try {
   dispatch({ type: CalendarPageActionTypes.FETCH_CALENDAR_PAGE })
   const response = await axios.get(API_URL + 'calendar')
   const received = await response.data
   if ((await received.status) === 'success') {
    dispatch({
     type: CalendarPageActionTypes.FETCH_CALENDAR_PAGE_SUCCESS,
     payload: received.data,
    })
    dispatch({ type: SnackbarActionTypes.SNACKBAR_INFO, payload: 'Calendar Loaded' })
   } else {
    dispatch({ type: CalendarPageActionTypes.FETCH_CALENDAR_PAGE_FAIL, payload: 'Loading Calendar Page Error' })
    dispatch({ type: SnackbarActionTypes.SNACKBAR_ERROR, payload: 'Loading Calendar Error' })
   }
  } catch (error) {
   dispatch({ type: CalendarPageActionTypes.FETCH_CALENDAR_PAGE_FAIL, payload: 'Loading Calendar Page Error' })
   dispatch({ type: SnackbarActionTypes.SNACKBAR_ERROR, payload: 'Loading Calendar Error' })
  }
 }
}
