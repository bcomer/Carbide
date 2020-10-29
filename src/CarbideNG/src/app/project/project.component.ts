import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Project } from '../models/project';
import { Store, select } from '@ngrx/store';
import { State } from '../state/app.reducers';
import { loadSubProjects, setCurrentProject } from '../state/app.actions';
import { getCurrentProjectId } from '../state';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { SubSink } from 'subsink';

@Component({
  selector: 'cbd-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  @Input() project: Project;
  showList: boolean = false;
  selectedProjectId: string;

  private subs: SubSink = new SubSink();

  constructor(
    private readonly store: Store<State>,
    public dialog: MatDialog
  ) { }


  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    this.subs.sink = this.store.pipe(select(getCurrentProjectId)).subscribe(id => {
      this.selectedProjectId = id;
    });
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

  shouldParentProjectBeSelected(): boolean {
    return this.selectedProjectId == this.project.id;
  }

  shouldSubProjectBeSelected(id: string): boolean {
    return id == this.selectedProjectId;
  }
}
