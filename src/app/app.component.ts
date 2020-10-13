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
  text = '';
  users$ = this.store.pipe(select(userSelectors.getUsers));

  constructor(
    private store: Store,
  ) {
    this.store.dispatch(userActions.fetchUsersStart());
  }


  addTask() {
      const newTask = {
        id: uuid.v4(),
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
      };

     //this.store.dispatch( todosActions.addTodo({todo: newTask} ))
     this.text = '';
  }

  completeTask(id: string): void {

  }

  removeTask(id: string): void {

  }

}



// {
//   "id": 7,
//   "email": "michael.lawson@reqres.in",
//   "first_name": "Michael",
//   "last_name": "Lawson",
//   "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
// },
