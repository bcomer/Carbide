import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationListItemComponent } from './calculation-list-item.component';

describe('CalculationListItemComponent', () => {
  let component: CalculationListItemComponent;
  let fixture: ComponentFixture<CalculationListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
