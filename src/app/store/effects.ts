import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as userActions from './actions';
import {catchError, map, mergeMap} from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoEffects {

  loadTodos$ = createEffect(() => this.actions$
    .pipe(
      ofType(userActions.fetchUsersStart),
      mergeMap( () => this.userService.fetchAllUsers().pipe(
        map(users => (userActions.fetchUsersSuccess({users: users})) ),
        catchError(error => of((userActions.fetchUsersError({error})))  )
      ))
    )
  );

  addUser$ = createEffect( () => this.actions$
    .pipe(
      ofType(userActions.addUserStart),
      mergeMap( action => this.userService.addUser(action.user)
        .pipe(
          map( user => (userActions.addUserSuccess({user}))),
          catchError(error => of(userActions.addUserError({error})))
        )

      )
  ));

  removeUser$ = createEffect( () => this.actions$
    .pipe(
      ofType(userActions.removeUserStart),
      mergeMap( action => this.userService.removeUser(action.id)
        .pipe(
          map( user => (userActions.removeUserSuccess({user}))),
          catchError(error => of(userActions.removeUserError({error})))
        )
      )
    ))


  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }


}
