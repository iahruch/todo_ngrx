import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as todoSelectors from './store/selector';
import * as actionsTask from './store/actions';
//import { v4 as uuidv4 } from 'uuid';
import * as uuid from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = '';
  todos$ = this.store.pipe(select(todoSelectors.getTodos))

  constructor(
    private store: Store,
  ) { }


  addTask() {
      const newTask = {
        id: uuid.v4(),
        text: this.text,
        completed: false
      }

     this.store.dispatch( actionsTask.addTodo({todo: newTask} ))
     this.text = '';
  }

  completeTask(id: string): void {
      this.store.dispatch( actionsTask.completeTodo({id: id}));
  }

  removeTask(id: string): void {
    this.store.dispatch( actionsTask.removeTodo({id: id}));
  }

}
