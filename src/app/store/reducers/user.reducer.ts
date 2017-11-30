import { GET_USER_PLAYLIST, Actions } from '../actions/user.action';

export function userReducer(state, action: Actions) {
  switch (action.type) {
    case GET_USER_PLAYLIST:
      return { ...state, userPlayList: action.payload.userPlayList };
    default:
      return state;
  }
}
