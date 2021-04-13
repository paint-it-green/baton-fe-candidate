import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
  {
    path: 'todo-list',
    component: TodoListComponent,
    loadChildren: () =>
      import('./todo-list/todo-list.module').then((m) => m.TodoListModule),
  },
];

export const components = [
  TodoListComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
