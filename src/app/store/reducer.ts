import { Action, createReducer, on } from "@ngrx/store";
import {ErrorUser, User} from "./models";
import * as userActions from './actions'


export interface IState {
  list : Array<User>;
  error: any;
}

export const initialState: IState = {
  list: [],
  error: {}
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
  //***************************************************************************************
  on( userActions.addUserStart, (state, action) => ({
    ...state,
    error: ''
  })),

  on( userActions.addUserSuccess, (state, action) => ({
    ...state,
    list: [...state.list, action.user],
    error: ''
  })),

  on( userActions.addUserError, (state, action) => ({
    ...state,
    error: action.error
  })),

  //***************************************************************************************

  on( userActions.removeUserStart, (state, action) => {
      const newlist = JSON.parse(JSON.stringify(state.list));

      return {
        ...state,
        list: newlist.filter( i => i.id !== action.id),
        error: ''
      }
    }
  ),

  on( userActions.removeUserSuccess, (state, action) => ({
       ...state,
    })),

  on( userActions.removeUserError, (state, action) => ({
    ...state,
    error: action.error
  })),



);

export const reducer = (state: IState | undefined, action: Action) => {
  return usersReducer(state, action);
}

