import { calendarPageAction, CalendarPageActionTypes, calendarPageState } from '../../types/calendarpage'

const initialState: calendarPageState = {
 events: [],
 loading: true,
 error: null,
 message: '',
}

export const calendarPageReducer = (state = initialState, action: calendarPageAction): calendarPageState => {
 switch (action.type) {
  case CalendarPageActionTypes.FETCH_CALENDAR_PAGE:
   return {
    ...state,
    ...{ loading: true, message: '' },
   }
  case CalendarPageActionTypes.FETCH_CALENDAR_PAGE_SUCCESS:
   return {
    events: action.payload,
    loading: false,
    error: null,
    message: '',
   }
  case CalendarPageActionTypes.FETCH_CALENDAR_PAGE_FAIL:
   return {
    ...state,
    ...{ error: action.payload },
   }
  case CalendarPageActionTypes.UPDATE_MESSAGE:
   return {
    ...state,
    ...{ message: action.payload },
   }
  default:
   return state
 }
}
