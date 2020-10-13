import {createAction, props} from "@ngrx/store";
import { Todo } from './models';


export enum TodoActions {
  AddTodoStart    =  '[Todo] Start add todo',
  AddTodoSuccess  =  '[Todo] Successful add todo',
  AddTodoError    =  '[Todo] Error Add todo',

  CompleteTodo = '[Todo] Complete todo',
  RemoveTodo =   '[Todo] Remove todo',
};

export const addTodoStart = createAction(
  TodoActions.AddTodoStart
);

export const addTodoSuccess = createAction(
  TodoActions.AddTodoSuccess,
  props<{todo: Todo}>()
);

export const addTodoError = createAction(
  TodoActions.AddTodoSuccess,
  props<{error: any}>()
);

export const completeTodo = createAction(
  TodoActions.CompleteTodo,
  props<{id: string}>()
);

export const removeTodo = createAction(
  TodoActions.RemoveTodo,
  props<{id: string}>()
)
