import { Injectable } from '@angular/core';
import {TodoService} from "./todo.service";
import {Action} from "@ngrx/store";
import {createEffect, ofType} from "@ngrx/effects";
import * as todoActions from './actions';
import {catchError, mergeMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoEffects {

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(todoActions.addTodoStart),
    mergeMap(
      () => this.todoService.getTodos()
        .pipe(
          map(todo => todoActions.addTodoStart(todo)),
          catchError()
        )
    )
  ));

  constructor(
    private todoService: TodoService,
    private actions$: Action
  ) { }


}
