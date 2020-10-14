import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as userSelectors from './store/selector';
import * as userActions from './store/actions';
import * as uuid from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users$ = this.store.pipe(select(userSelectors.getUsers));
  error$ = this.store.pipe(select(userSelectors.getError));
  constructor(
    private store: Store,
  ) {
    this.store.dispatch(userActions.fetchUsersStart());
  }

  addUser() {
     const newUser = {
       "name": "morpheus",
       "job": "leader"
     }
     this.store.dispatch(userActions.addUserStart({user: newUser}));
  }

  removeUser(id: number | string) {
  this.store.dispatch(userActions.removeUserStart({id}))
  }
}


