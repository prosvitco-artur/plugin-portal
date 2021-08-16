export interface Event {
 date: string
 title: string
 color: string
 description: string
}

export interface ModalEvent {
 title: string
 description: string
}

export interface calendarPageState {
 events: Array<Event>
 loading: boolean
 message: string
 error: null | string
}

export enum CalendarPageActionTypes {
 FETCH_CALENDAR_PAGE = 'FETCH_CALENDAR_PAGE',
 FETCH_CALENDAR_PAGE_SUCCESS = 'FETCH_CALENDAR_PAGE_SUCCESS',
 FETCH_CALENDAR_PAGE_FAIL = 'FETCH_CALENDAR_PAGE_FAIL',
 UPDATE_MESSAGE = 'UPDATE_MESSAGE',
}

interface FetchCalendarPageAction {
 type: CalendarPageActionTypes.FETCH_CALENDAR_PAGE
}

interface FetchCalendarPageSuccessAction {
 type: CalendarPageActionTypes.FETCH_CALENDAR_PAGE_SUCCESS
 payload: Array<Event>
}

interface FetchCalendarPageFailAction {
 type: CalendarPageActionTypes.FETCH_CALENDAR_PAGE_FAIL
 payload: string
}

interface UpdateMessage {
 type: CalendarPageActionTypes.UPDATE_MESSAGE
 payload: string
}

export type calendarPageAction = FetchCalendarPageAction | FetchCalendarPageSuccessAction | FetchCalendarPageFailAction | UpdateMessage
