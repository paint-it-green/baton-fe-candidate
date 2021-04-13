import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ApiService } from 'src/app/core/services/api.service';
import { Todo } from 'src/app/core/interfaces/todo';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  constructor(
    private readonly location: Location,
    private api: ApiService
  ) { }

  todos = [] as Array<Todo>;

  ngOnInit(): void {
    this.getTodos();
  }

  private async getTodos(): Promise<void> {
    try {
      const todos = await this.api.get<Array<Todo>>('todos', { completed: true });
      this.todos = todos;
    } catch (error) {
      // TODO:: to catch error
    }
  }

  navigateBack(): void {
    this.location.back();
  }

}
