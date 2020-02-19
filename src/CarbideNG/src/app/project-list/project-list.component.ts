import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../state/app.reducers';
import { createProject } from '../state/app.actions';

@Component({
  selector: 'cbd-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Observable<Project[]>;
  newProjectName: string;
  showInput: boolean = false;

  constructor(
    private readonly store: Store<State>,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  hideProjectNameInput(): void {
    this.showInput = false;
  }

  ngOnInit() {
  }

  saveNewProject(): void {
    let newProject: Project = new Project(null, null, 'Test Project');

    this.store.dispatch(createProject({ project: newProject }));

    this.showInput = false;
  }

  showProjectNameInput(): void {
    this.showInput = true;
    this.cdRef.detectChanges();
  }
}
