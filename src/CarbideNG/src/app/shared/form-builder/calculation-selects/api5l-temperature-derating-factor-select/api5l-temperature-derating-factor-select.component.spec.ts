import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Api5lTemperatureDeratingFactorSelectComponent } from './api5l-temperature-derating-factor-select.component';

describe('Api5lTemperatureDeratingFactorSelectComponent', () => {
  let component: Api5lTemperatureDeratingFactorSelectComponent;
  let fixture: ComponentFixture<Api5lTemperatureDeratingFactorSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Api5lTemperatureDeratingFactorSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Api5lTemperatureDeratingFactorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
