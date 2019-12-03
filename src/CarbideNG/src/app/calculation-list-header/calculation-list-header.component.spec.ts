import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationListHeaderComponent } from './calculation-list-header.component';

describe('CalculationListHeaderComponent', () => {
  let component: CalculationListHeaderComponent;
  let fixture: ComponentFixture<CalculationListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
