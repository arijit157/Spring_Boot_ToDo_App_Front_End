import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/dataType';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent {

  constructor (private todoService: TodoService, private router: ActivatedRoute) {}

  todoID: number=Number(this.router.snapshot.paramMap.get("id"));
  isTodoUpdated: boolean=false;
  ngOnInit(): void{
    
    this.todoService.getATodo(this.todoID).subscribe((result: any) => {
      this.todo=result;
    });
  }

  todo: Todo | undefined;

  updateTodo(data: any){
    this.todoService.updateTodos(data, this.todoID);
    this.isTodoUpdated=true;
    setTimeout(() => {
      this.isTodoUpdated=false;
    }, 3000);
  }
}
