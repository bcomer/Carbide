import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCalculationDialogComponent } from './create-calculation-dialog.component';

describe('CreateCalculationDialogComponent', () => {
  let component: CreateCalculationDialogComponent;
  let fixture: ComponentFixture<CreateCalculationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCalculationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCalculationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
