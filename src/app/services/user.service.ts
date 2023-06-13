import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProps } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/register-user';

  constructor(private http: HttpClient) {}

  createUser(user: UserProps): Observable<any> {
    return this.http.post(this.url, user);
  }
}
