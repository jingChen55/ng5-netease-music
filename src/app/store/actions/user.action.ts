import { Action } from '@ngrx/store';

export const USER = {
  PLAYLIST: '[USER] PLAYLIST',
  DETAIL: '[USER] DETAIL'
};

// actions
export class UserPlayList implements Action {
  type: string = USER.PLAYLIST;
  constructor(public payload: any) { }
}

export class UserDetail implements Action {
  type: string = USER.DETAIL;
  constructor(public payload: any) { }
}

export type Actions = UserPlayList;
