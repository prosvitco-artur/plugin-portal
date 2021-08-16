import { mainPageState, mainPageAction, MainPageActionTypes } from '../../types/mainpage'

const initialState: mainPageState = {
 title: '',
 subtitle: '',
 textArray: [],
 error: null,
 loading: true,
}

export const mainPageReducer = (state = initialState, action: mainPageAction): mainPageState => {
 switch (action.type) {
  case MainPageActionTypes.FETCH_MAIN_PAGE:
   return {
    title: '',
    subtitle: '',
    textArray: [],
    error: null,
    loading: true,
   }
  case MainPageActionTypes.FETCH_MAIN_PAGE_SUCCESS:
   return {
    title: action.payload.title,
    subtitle: action.payload.subtitle,
    textArray: action.payload.textArray,
    error: null,
    loading: false,
   }
  case MainPageActionTypes.FETCH_MAIN_PAGE_FAIL:
   return {
    title: '',
    subtitle: '',
    textArray: [],
    error: action.payload,
    loading: false,
   }
  default:
   return state
 }
}
