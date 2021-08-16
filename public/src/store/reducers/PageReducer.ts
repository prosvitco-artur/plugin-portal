import { PageState, pageAction, PageActionTypes } from '../../types/page'

const initialState: PageState = {
 pageNumber: 4,
}

export const pageReducer = (state = initialState, action: pageAction): PageState => {
 switch (action.type) {
  case PageActionTypes.SWITCH_TAB:
   return {
    pageNumber: action.payload,
   }
  default:
   return state
 }
}
