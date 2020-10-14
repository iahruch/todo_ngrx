import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {pluck} from "rxjs/operators";
import {Observable} from "rxjs";
import {User} from "./models";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static url = 'https://reqres.in/api/userslist';

  constructor(
    private http: HttpClient
  ) {}

  fetchAllUsers():Observable<User[]> {
    return this.http.get<User[]>(UserService.url)
      .pipe(pluck('data'));
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(UserService.url, user);
  }

  removeUser(id: string|number): Observable<any> {
    return  this.http.delete<User>(`${UserService.url}/${id}`);
  }
}
