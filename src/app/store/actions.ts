import {createAction, props} from "@ngrx/store";
import { User} from './models';


export enum UserActions {
  FetchUsersStart    =  '[Users] Start fetch user list',
  FetchUsersSuccess  =  '[Users] Successful fetch user list',
  FetchUsersError    =  '[Users] Error fetch user list',
};


// get all list todos
export const fetchUsersStart = createAction(
  UserActions.FetchUsersStart
);

export const fetchUsersSuccess = createAction(
  UserActions.FetchUsersSuccess,
  props<{users: User[]}>()
);

export const fetchUsersError = createAction(
  UserActions.FetchUsersError,
  props<{error: string}>()
);

