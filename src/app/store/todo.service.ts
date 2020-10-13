import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ITodo} from './models';
import {pluck} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  static url = 'https://reqres.in/api/users';
  constructor(
    private http: HttpClient
  ) {}

  getTodos():Observable<ITodo[]> {
    return this.http.get<ITodo[]>(TodoService.url).pipe(pluck('data'));
  }
}
