import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:5152' //db url: 5152 | mock-server:5000

  constructor(private http: HttpClient) { }

  getAllUsers= () : Observable<User[]> => {
    let users: Observable<User[]>

    users = this.http.get<User[]>(`${this.baseUrl}/users`, httpOptions)
    console.log("UserService")
    console.log(users)

    return users
  }

  saveUser = (user : User) : Observable<User> => {
    return this.http.post<User>(`${this.baseUrl}/users`, user, httpOptions)
  }

  deleteUser = (user: User) : Observable<User> => {
    console.log("Deleting task #:" + user.id)

    return this.http.delete<User>(`${this.baseUrl}/users/delete_user/${user.id}`, httpOptions)
  }

  getById = (id: number) : Observable<User> => {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`, httpOptions)
  }
}
