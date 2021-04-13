import { assert } from 'chai';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { Todo } from '../interfaces/todo';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    assert.exists(service);
  });

  it('should fetch todos', async () => {
    const todos = await service.get<Array<Todo>>('todos', false);
    assert.equal(todos[0].completed, false);
  });
});
