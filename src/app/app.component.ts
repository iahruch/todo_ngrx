import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as todoSelectors from './store/selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$ = this.store.pipe(select(todoSelectors.getTodos))

  constructor(
    private store: Store,
  ) {

  }
}
