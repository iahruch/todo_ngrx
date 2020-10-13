import {createSelector, State} from "@ngrx/store";
import {ISTATE} from "./reducer";
import {USER} from "./models";

const selectUsers = (state: State<ISTATE>) => state['users'];

export const getUsers = createSelector(
  selectUsers,
  (state: ISTATE): Array<USER> => state.list
);
