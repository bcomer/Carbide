import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Api5lDesignFactorSelectComponent } from './api5l-design-factor-select.component';

describe('Api5lDesignFactorSelectComponent', () => {
  let component: Api5lDesignFactorSelectComponent;
  let fixture: ComponentFixture<Api5lDesignFactorSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Api5lDesignFactorSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Api5lDesignFactorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
