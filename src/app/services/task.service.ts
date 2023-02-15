import { Injectable } from '@angular/core';
import { TaskItem } from '../models/task-item';
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
export class TaskService {
  baseUrl: string = 'http://localhost:5152' //db url: 5152 | mock-server:5000

  constructor(private http: HttpClient) { }

  getAllTasks = () : Observable<TaskItem[]> => {
    let tasks: Observable<TaskItem[]>

    tasks = this.http.get<TaskItem[]>(`${this.baseUrl}/task_items`, httpOptions)
    console.log("TaskService")
    console.log(tasks)

    return tasks
  }

  getById = (id: number) : Observable<TaskItem> => {
    let task : Observable<TaskItem>

    task = this.http.get<TaskItem>(`${this.baseUrl}/task_items/${id}`, httpOptions)

    return task
  }

  saveTask = (taskItem : TaskItem) : Observable<TaskItem> => {
    return this.http.post<TaskItem>(`${this.baseUrl}/task_items`, taskItem, httpOptions)
  }

  deleteTask = (taskItem: TaskItem) : Observable<TaskItem> => {
    let task : Observable<TaskItem>
    console.log("Deleting task #:" + taskItem.id)

    task = this.http.delete<TaskItem>(`${this.baseUrl}/task_items/delete_task/${taskItem.id}`, httpOptions)

    return task
  }
}
