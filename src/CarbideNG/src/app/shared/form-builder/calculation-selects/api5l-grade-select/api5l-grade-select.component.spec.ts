import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Api5lGradeSelectComponent } from './api5l-grade-select.component';

describe('Api5lGradeSelectComponent', () => {
  let component: Api5lGradeSelectComponent;
  let fixture: ComponentFixture<Api5lGradeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Api5lGradeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Api5lGradeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
