import { assert } from 'chai';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as sinon from 'sinon';

import { UndoneComponent } from './undone.component';
import { Todo } from 'src/app/core/interfaces/todo';
import { ApiService } from 'src/app/core/services/api.service';

describe('UndoneComponent', () => {
  let component: UndoneComponent;
  let fixture: ComponentFixture<UndoneComponent>;
  let todo: Todo;
  let service: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      declarations: [UndoneComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    todo = {
      id: 1,
      userId: 1,
      title: 'Test title',
      completed: false
    };

    fixture = TestBed.createComponent(UndoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ApiService);
  });

  it('should create', () => {
    assert.exists(component);
  });

  it('should complete todo', () => {
    const app = fixture.componentInstance;
    app.onDone(todo);
    assert.equal(todo.completed, true);
  });

  it('should call ApiService.get onInit', () => {
    const app = fixture.componentInstance;
    const spy = sinon.spy(service, 'get');
    app.ngOnInit();
    sinon.assert.calledOnce(spy);
  });


});
