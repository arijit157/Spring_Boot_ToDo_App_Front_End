import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/dataType';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  constructor(private todoSercvice: TodoService, private router: Router) {}

  todoItems: Todo[] | undefined;

  ngOnInit(): void{
    this.showTodos();
  }

  handleCreateTodo(){
    this.router.navigate(["create-todo"]);
  }

  handleDelete(todoId: any){
    this.todoSercvice.deleteTodos(todoId).subscribe((result) => {
      this.showTodos();
    });
  }

  handleUpdate(todoId: any){
    this.router.navigate([`update-todo/${todoId}`]);
  }

  showTodos(){
    this.todoSercvice.getTodos("in28minutes").subscribe((result: Todo[]) =>{
      console.log(result);
      this.todoItems=result;
    });
  }
}
