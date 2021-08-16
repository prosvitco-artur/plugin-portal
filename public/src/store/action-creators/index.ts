import * as MyAccountPageActionCreators from './myAccountPage'
import * as LinksPageActionCreators from './linksPage'
import * as MainPageActionCreators from './mainPage'
import * as AccountActionCreators from './account'
import * as CalendarPageActionCreators from './calendarPage'
import * as SnackbarActionCreators from './Snackbar'

export default {
 ...MyAccountPageActionCreators,
 ...LinksPageActionCreators,
 ...MainPageActionCreators,
 ...AccountActionCreators,
 ...CalendarPageActionCreators,
 ...SnackbarActionCreators,
}
