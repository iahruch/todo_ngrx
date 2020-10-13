import { Action, createReducer, on } from "@ngrx/store";
import { User } from "./models";
import * as userActions from './actions'


export interface IState {
  list : Array<User>;
  error: string;
}

export const initialState: IState = {
  list: [],
  error: ''
};


const usersReducer = createReducer(
  initialState,
  on( userActions.fetchUsersStart, (state, action) => ({
    ...state,
    error: ''
  })),

  on( userActions.fetchUsersSuccess, (state, action) => ({
    ...state,
    list: [...action.users],
    error: ''
  })),

  on( userActions.fetchUsersError, (state, action) => ({
    ...state,
    error: action.error
  })),

);

export const reducer = (state: IState | undefined, action: Action) => {
  return usersReducer(state, action);
}

