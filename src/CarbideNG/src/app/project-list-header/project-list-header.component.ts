import { Component, OnInit, Input } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'cbd-project-list-header',
  templateUrl: './project-list-header.component.html',
  styleUrls: ['./project-list-header.component.scss']
})
export class ProjectListHeaderComponent implements OnInit {

  @Input() isExpanded: boolean;

  constructor(private readonly store: Store<fromApp.State>) { }

  ngOnInit() {
  }

  onProjectListToggle(): void {
    this.store.dispatch(AppActions.toggleProjectList());
  }
}
