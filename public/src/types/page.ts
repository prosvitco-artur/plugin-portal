export interface PageState {
 pageNumber: number
}

export enum PageActionTypes {
 SWITCH_TAB = 'SWITCH_TAB',
}
interface SwitchPageAction {
 type: PageActionTypes.SWITCH_TAB,
 payload: number
}

export type pageAction = SwitchPageAction
