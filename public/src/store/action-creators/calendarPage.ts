import axios from 'axios'
import { Dispatch } from 'redux'
import { calendarPageAction, CalendarPageActionTypes, Event } from '../../types/calendarpage'
import { snackbarAction, SnackbarActionTypes } from '../../types/snackbar'

export const fetchCalendarPage = () => {
 return async (dispatch: Dispatch<calendarPageAction | snackbarAction>) => {
  try {
   dispatch({ type: CalendarPageActionTypes.FETCH_CALENDAR_PAGE })
   const response = await axios.get<Event[]>('https://jsonplaceholder.typicode.com/users')
   setTimeout(() => {
    dispatch({
     type: CalendarPageActionTypes.FETCH_CALENDAR_PAGE_SUCCESS,
     payload: [
      {
       date: '2021-08-11',
       title: 'Public Event For all customers',
       color: '#e328af',
       description: 'First test Description',
      },
      {
       date: '2021-08-11',
       title: 'Repeating Event for test2',
       color: '#5ecfff',
       description: 'Second test Description',
      },
      {
       date: '2021-08-13',
       title: 'Repeating Event for test2',
       color: '#5ecfff',
       description: 'Third test Description',
      },
     ],
    })
    dispatch({ type: SnackbarActionTypes.SNACKBAR_INFO, payload: 'Calendar Loaded' })
   }, 2000)
  } catch (error) {
   dispatch({ type: CalendarPageActionTypes.FETCH_CALENDAR_PAGE_FAIL, payload: 'Loading Calendar Page Error' })
   dispatch({ type: SnackbarActionTypes.SNACKBAR_ERROR, payload: 'Loading Calendar Error' })
  }
 }
}
