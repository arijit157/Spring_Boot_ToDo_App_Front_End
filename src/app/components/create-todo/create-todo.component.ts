import { Component } from '@angular/core';
import { TodoData } from 'src/app/dataType';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  isTodoUpdated: boolean=false;

  constructor(private todoService: TodoService) {}

  createTodo(data: TodoData){
    console.log(data);
    this.todoService.saveTodos(data);
    this.isTodoUpdated=true;
    setTimeout(() => {
      this.isTodoUpdated=false;
    }, 3000);
  }
}
