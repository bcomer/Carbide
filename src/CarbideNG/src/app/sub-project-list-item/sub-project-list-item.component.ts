import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import * as fromApp from '../state';
import { Store } from '@ngrx/store';
import * as appActions from '../state/app.actions';

@Component({
  selector: 'cbd-sub-project-list-item',
  templateUrl: './sub-project-list-item.component.html',
  styleUrls: ['./sub-project-list-item.component.scss']
})
export class SubProjectListItemComponent implements OnInit {
  @Input() Project: Project;

  constructor(private readonly store: Store<fromApp.State>) { }

  ngOnInit() {
  }

  onProjectClick(): void {
    this.store.dispatch(appActions.setCurrentProject({ id: this.Project.id }));
  }
}
