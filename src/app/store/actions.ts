import {createAction, props} from "@ngrx/store";
import {ErrorUser, User} from './models';


export enum UserActions {
  FetchUsersStart    =  '[Users] Start fetch user list',
  FetchUsersSuccess  =  '[Users] Successful fetch user list',
  FetchUsersError    =  '[Users] Error fetch user list',

  AddUserStart    =      '[Users] Start add user',
  AddUserSuccess  =      '[Users] Successful add user',
  AddUserError    =      '[Users] Error add user',

  RemoveUserStart    =      '[Users] Start to remove user',
  RemoveUserSuccess  =      '[Users] Successful remove user',
  RemoveUserError    =      '[Users] Error remove user',
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
  props<{error: ErrorUser}>()
);

// Ad single user
export const addUserStart = createAction(
  UserActions.AddUserStart,
  props<{user: User}>()
);

export const addUserSuccess = createAction(
  UserActions.AddUserSuccess,
  props<{user: User}>()
);

export const addUserError = createAction(
  UserActions.AddUserError,
  props<{error: ErrorUser}>()
);


// Remove user
export const removeUserStart = createAction(
  UserActions.RemoveUserStart,
  props<{id: number|string } >()
);

export const removeUserSuccess = createAction(
  UserActions.RemoveUserSuccess,
  props<{user: User}>()
);

export const removeUserError = createAction(
  UserActions.RemoveUserError,
  props<{error: ErrorUser}>()
);
