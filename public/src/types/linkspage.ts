export interface linkObject {
 img: string
 description: string
 url: string
}

export interface linksPageState {
 links: linkObject[]
 loading: boolean
 error: null | string
}

export enum LinksPageActionTypes {
 FETCH_LINKS_PAGE = 'FETCH_LINKS_PAGE',
 FETCH_LINKS_PAGE_SUCCESS = 'FETCH_LINKS_PAGE_SUCCESS',
 FETCH_LINKS_PAGE_FAIL = 'FETCH_LINKS_PAGE_FAIL',
 UNMOUNT_LINKS_PAGE = 'UNMOUNT_LINKS_PAGE'
}

interface FetchLinksPageAction {
 type: LinksPageActionTypes.FETCH_LINKS_PAGE
}

interface FetchLinksPageSuccessAction {
 type: LinksPageActionTypes.FETCH_LINKS_PAGE_SUCCESS
 payload: linkObject[]
}

interface FetchLinksPageFailAction {
 type: LinksPageActionTypes.FETCH_LINKS_PAGE_FAIL
 payload: string
}

interface UnmountLinksPageAction {
  type: LinksPageActionTypes.UNMOUNT_LINKS_PAGE
}

export type linksPageAction = FetchLinksPageAction | FetchLinksPageSuccessAction | FetchLinksPageFailAction | UnmountLinksPageAction
