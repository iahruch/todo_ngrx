import {createSelector, State} from "@ngrx/store";
import {IState} from "./reducer";
import {ErrorUser, User} from "./models";

const selectUsers = (state: State<IState>) => state['users'];

export const getUsers = createSelector(
  selectUsers,
  (state: IState): Array<User> => state.list
);

export const getError = createSelector(
  selectUsers,
  (state: IState) => state.error
)
