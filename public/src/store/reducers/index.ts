import { combineReducers } from 'redux'
import { accountReducer } from './accountReducer'
import { calendarPageReducer } from './CalendarPageReducer'
import { linksPageReducer } from './LinksPageReducer'
import { mainPageReducer } from './MainPageReducer'
import { myAccountPageReducer } from './MyAccountPageReducer'
import { pageReducer } from './PageReducer'
import { snackbarReducer } from './SnackbarReducer'

export const rootReducer = combineReducers({
 account: accountReducer,
 page: pageReducer,
 mainPage: mainPageReducer,
 linksPage: linksPageReducer,
 myAccountPage: myAccountPageReducer,
 calendarPage: calendarPageReducer,
 snackbar: snackbarReducer,
})

export type RootState = ReturnType<typeof rootReducer>
