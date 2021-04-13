import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from 'src/app/core/interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input() todo: Todo;
  @Output() done = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  onDone(): void {
    this.done.emit(true);
  }

}
