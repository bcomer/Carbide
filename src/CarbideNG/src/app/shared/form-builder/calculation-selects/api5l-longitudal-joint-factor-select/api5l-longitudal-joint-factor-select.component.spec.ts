import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Api5lLongitudalJointFactorSelectComponent } from './api5l-longitudal-joint-factor-select.component';

describe('Api5lLongitudalJointFactorSelectComponent', () => {
  let component: Api5lLongitudalJointFactorSelectComponent;
  let fixture: ComponentFixture<Api5lLongitudalJointFactorSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Api5lLongitudalJointFactorSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Api5lLongitudalJointFactorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
