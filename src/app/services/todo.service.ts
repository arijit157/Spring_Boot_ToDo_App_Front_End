import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo, TodoData } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  jwtToken: string="";

  getJwtToken(){
    let header=new HttpHeaders({
      Authorization: "Basic aW4yOG1pbnV0ZXM6ZHVtbXk="
    });

    return this.http.post("http://localhost:8080/authenticate", {header}, {observe: "response"}).subscribe(result => console.warn(result));
  }

  getTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  saveTodos(data: TodoData) {
    return this.http.post(`http://localhost:8080/users/in28minutes/todos`, data, { observe: "response" }).subscribe((result) => console.log(result));
  }

  deleteTodos(id: number) {
    return this.http.delete(`http://localhost:8080/users/in28minutes/todos/${id}`);
  }

  getATodo(id: number) {
    return this.http.get(`http://localhost:8080/users/in28minutes/todos/${id}`);
  }

  updateTodos(data: TodoData, id: number) {
    return this.http.put(`http://localhost:8080/users/in28minutes/todos/${id}`, data, { observe: "response" }).subscribe(result => console.warn(result));
  }
}
