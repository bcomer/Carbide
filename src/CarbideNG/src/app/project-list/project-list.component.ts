import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../state';
import * as AppActions from '../state/app.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { SubSink } from 'subsink';

@Component({
  selector: 'cbd-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {  
  public Projects$: Observable<Array<Project>>;
  public project: Project;
  public isExpanded$: Observable<boolean>;

  private subs = new SubSink();

  constructor(
    private readonly store: Store<fromApp.State>,
    public dialog: MatDialog
  ) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    this.Projects$ = this.store.pipe(select(fromApp.getProjects));    
    this.isExpanded$ = this.store.pipe(select(fromApp.getShowProjectList));

    this.subs.sink = this.store.pipe(select(fromApp.getCurrentProject)).subscribe(project => {
      this.project = project;
    });
  }

  onAddProjectClick(): void {      
    let parentId = this.project ? this.project.parentId ? this.project.parentId : this.project.id : null;
    let project: Project = new Project(null, parentId, null, 'user-brandon', Date.now().toString());

    const dialogRef = this.dialog.open(CreateProjectDialogComponent, {
      width: '400px',
      data: project
    });

    this.subs.sink = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(AppActions.createProject({ project: result }));
      }
    });
  }
}
