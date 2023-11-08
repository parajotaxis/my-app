import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content type': 'aplication/json'})
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL + 'users')
  }

  addUser(user:any): Observable<User>{
    return this.http.post<User>(this.BASE_URL + 'users', user, httpOptions);
  }
}
