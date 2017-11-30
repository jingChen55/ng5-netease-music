import { userReducer } from './reducers/user.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const initialState = {

};

export interface State {
  user: any;
};

export const reducers: ActionReducerMap<State> = {
  user: userReducer
};
