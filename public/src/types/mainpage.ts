export interface mainPageState {
 title: string
 subtitle: string
 textArray: Array<string>
 loading: boolean
 error: null | string
}

export enum MainPageActionTypes {
 FETCH_MAIN_PAGE = 'FETCH_MAIN_PAGE',
 FETCH_MAIN_PAGE_SUCCESS = 'FETCH_MAIN_PAGE_SUCCESS',
 FETCH_MAIN_PAGE_FAIL = 'FETCH_MAIN_PAGE_FAIL',
}

interface FetchMainPageAction {
 type: MainPageActionTypes.FETCH_MAIN_PAGE
}

interface FetchMainPageSuccessAction {
 type: MainPageActionTypes.FETCH_MAIN_PAGE_SUCCESS
 payload: {
  title: string
  subtitle: string
  textArray: Array<string>
 }
}

interface FetchMainPageFailAction {
 type: MainPageActionTypes.FETCH_MAIN_PAGE_FAIL
 payload: string
}

export type mainPageAction = FetchMainPageAction | FetchMainPageSuccessAction | FetchMainPageFailAction
