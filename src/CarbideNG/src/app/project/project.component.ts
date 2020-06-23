import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { Store, select } from '@ngrx/store';
import { State } from '../state/app.reducers';
import { loadSubProjects, setCurrentProject } from '../state/app.actions';
import { getCurrentProjectId } from '../state';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';

@Component({
  selector: 'cbd-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  showList: boolean = false;
  selectedProjectId$: Observable<string>;

  constructor(
    private readonly store: Store<State>,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.selectedProjectId$ = this.store.pipe(select(getCurrentProjectId));
  }

  openNewProjectDialog(): void {
    this.dialog.open(CreateProjectDialogComponent, {
      width: '400px',
      data: { id: this.project.id }
    });
  }

  toggleProjectList(): void {
    this.showList = !this.showList;
    this.store.dispatch(loadSubProjects({ project: this.project }));
  }

  setSelectedProject(id: string) {
    if (this.project.id === id) {
      this.toggleProjectList();
    }

    this.store.dispatch(setCurrentProject({ id: id }));
  }
}
