import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/core/services/api.service';
import { Todo } from 'src/app/core/interfaces/todo';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent implements OnInit {

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router,
    private api: ApiService
  ) { }

  todos = [] as Array<Todo>;

  ngOnInit(): void {
    this.getTodos();
  }

  private async getTodos(): Promise<void> {
    try {
      const todos = await this.api.get<Array<Todo>>('todos', { completed: false });
      this.todos = todos;
    } catch (error) {
      // TODO:: to catch error
    }
  }

  onDone(todo: Todo): void {
    todo.completed = true;
  }

  navigateDone(): void {
    this.router.navigate(['done'], { relativeTo: this.activeRoute });
  }

}
