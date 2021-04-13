import { assert } from 'chai';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as sinon from 'sinon';

import { DoneComponent } from './done.component';
import { ApiService } from 'src/app/core/services/api.service';

describe('DoneComponent', () => {
  let component: DoneComponent;
  let fixture: ComponentFixture<DoneComponent>;
  let service: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [DoneComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ApiService);
  });

  it('should create', () => {
    assert.exists(component);
  });

  it('should call ApiService.get onInit', () => {
    const app = fixture.componentInstance;
    const spy = sinon.spy(service, 'get');
    app.ngOnInit();
    sinon.assert.calledOnce(spy);
  });
});
