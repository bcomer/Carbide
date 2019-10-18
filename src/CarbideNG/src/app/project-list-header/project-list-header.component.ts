import { Component, OnInit } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducers';
import { Project } from '../models/project';
import { Store } from '@ngrx/store';

@Component({
  selector: 'cbd-project-list-header',
  templateUrl: './project-list-header.component.html',
  styleUrls: ['./project-list-header.component.scss']
})
export class ProjectListHeaderComponent implements OnInit {

  constructor(private readonly store: Store<fromApp.State>) { }

  ngOnInit() {
  }

  onAddCalculationClick(): void {
  }

  onAddProjectClick(): void {
    let subProject: Project = new Project('abcde-3rews-ae43s-8sdkj', 'sub project one', 'Brandon Comer', Date.now().toString());
    let subProjects: Array<Project> = new Array<Project>();

    subProjects.push(subProject);

    let project: Project = new Project('124kj-alsde-s8dfl-asd90', 'dope ass project', 'Brandon Comer', Date.now().toString(), null, subProjects);
    this.store.dispatch(AppActions.createProject({project: project}));
  }

  onProjectListToggle(): void {
    this.store.dispatch(AppActions.toggleProjectList());
  }
}
