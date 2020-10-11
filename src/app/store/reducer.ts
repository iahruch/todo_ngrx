import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "./models";
import * as todoActions from './actions'


export interface IState {
  listTodos : Array<Todo>;
}

export const initialState: IState = {
  listTodos: [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      text: 'First task',
      completed: false
    },
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      text: 'Second test task',
      completed: false
    }
  ]
}


// @ts-ignore
const todosReducer = createReducer(
  initialState,
  on( todoActions.addTodo, (state, action) => ({
    listTodos: [...state.listTodos, { ...action.todo } ]
  })),

  on( todoActions.completeTodo, (state, action: Action) => {
    const newListTodo = JSON.parse(JSON.stringify(state.listTodos));

     return {
        listTodos: newListTodo.map( todo => {
          if(todo.id == action['id']) {
              todo.completed = !todo.completed
          }
          return todo;
        })
      }
    }
  ),

  on( todoActions.removeTodo, (state, action: Action) => ({
    listTodos: [...state.listTodos].filter( (todo: Todo) => todo.id !== action['id'] )
  }))

)

export const reducer = (state: IState | undefined, action: Action) => {
  return todosReducer(state, action);
}

