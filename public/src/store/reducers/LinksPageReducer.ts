import { linksPageAction, linksPageState, LinksPageActionTypes } from '../../types/linkspage'

const initialState: linksPageState = {
 loading: true,
 error: null,
 links: [],
}

export const linksPageReducer = (state = initialState, action: linksPageAction):linksPageState => {
 switch (action.type) {
  case LinksPageActionTypes.FETCH_LINKS_PAGE:
   return {
    loading: true,
    error: null,
    links: [],
   }
  case LinksPageActionTypes.FETCH_LINKS_PAGE_SUCCESS:
   return {
    loading: false,
    error: null,
    links: action.payload,
   }
  case LinksPageActionTypes.FETCH_LINKS_PAGE_FAIL:
   return {
    loading: false,
    error: action.payload,
    links: [],
   }
  case LinksPageActionTypes.UNMOUNT_LINKS_PAGE:
   return {
    loading: true,
    links: [],
    error: null,
   }
  default:
   return state
 }
}
