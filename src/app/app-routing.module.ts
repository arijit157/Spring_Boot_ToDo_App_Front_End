import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';
import { AuthGuard } from './auth.guard';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "todos",
    component: TodosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "create-todo",
    component: CreateTodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "update-todo/:id",
    component: UpdateTodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
