import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpthreadComponent } from './expthread.component';

describe('ExpthreadComponent', () => {
  let component: ExpthreadComponent;
  let fixture: ComponentFixture<ExpthreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpthreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpthreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
