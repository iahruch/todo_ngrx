import {createAction, props} from "@ngrx/store";
import { Todo } from './models';


export enum TodoActions {
  AddTodos =     '[Todos] Add todo',
  CompleteTodo = '[Todos] Complete todo',
  RemoveTodo =   '[Todos] Remove todo',
};


export const addTodo = createAction(
  TodoActions.AddTodos,
  props<{todo: Todo}>()
);

export const completeTodo = createAction(
  TodoActions.CompleteTodo,
  props<{id: number|string } >()
);

export const removeTodo = createAction(
  TodoActions.RemoveTodo,
  props<{id: number|string}>()
)
