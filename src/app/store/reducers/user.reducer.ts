import { USER, Actions } from '../actions/user.action';

export function userReducer(state, action: Actions) {
  switch (action.type) {
    case USER.PLAYLIST:
      return { ...state, userPlayList: action.payload.userPlayList };
    case USER.DETAIL:
      return { ...state, userDetail: action.payload.userDetail };
    default:
      return state;
  }
}
