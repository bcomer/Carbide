import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProjectListItemComponent } from './sub-project-list-item.component';

describe('SubProjectListItemComponent', () => {
  let component: SubProjectListItemComponent;
  let fixture: ComponentFixture<SubProjectListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProjectListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProjectListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
