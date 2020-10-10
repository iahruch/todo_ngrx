import {createSelector, State} from "@ngrx/store";
import {IState} from "./reducer";
import {Todo} from "./models";

const selectTodos = (state: State<IState>) => state['todos'];

export const getTodos = createSelector(
  selectTodos,
  (state: IState): Array<Todo> => state.listTodos
);
