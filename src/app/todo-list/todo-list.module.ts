import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule, components } from './todo-list-routing.module';
import { TodoComponent } from '../shared/components/todo/todo.component';

@NgModule({
  declarations: [
    ...components,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule
  ]
})
export class TodoListModule { }
