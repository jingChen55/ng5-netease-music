import { Action } from '@ngrx/store';

export const GET_USER_PLAYLIST = 'GET_USER_PLAYLIST';

// actions
export class UserPlayList implements Action {
  type: string = GET_USER_PLAYLIST;
  constructor(public payload: any) { }
};

export type Actions = UserPlayList;
