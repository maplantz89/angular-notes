import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssignment2Component } from './form-assignment2.component';

describe('FormAssignment2Component', () => {
  let component: FormAssignment2Component;
  let fixture: ComponentFixture<FormAssignment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAssignment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAssignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
