import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Project } from '../models/project';
import { trigger, style, transition, animate, state } from '@angular/animations';
import * as fromApp from '../state'
import * as AppActions from '../state/app.actions';
import { Store, select } from '@ngrx/store';
import { SubSink } from 'subsink';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';

@Component({
  selector: 'cbd-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss'],
  animations: [
    trigger('chevronRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class ProjectListItemComponent implements OnInit, OnDestroy {
  @Input() Project: Project;
  public Expanded: boolean;
  public project: Project;
  private subs = new SubSink();

  constructor(
    private readonly store: Store<fromApp.State>,
    public dialog: MatDialog
    ) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    this.subs.sink = this.store.pipe(select(fromApp.getCurrentProject)).subscribe(project => {
      if (project && (project.id == this.Project.id
        || this.Project.subProjects.length > 0
        && this.Project.subProjects.findIndex(x => x.id == project.id) >= 0)) {
        this.Expanded = true;
      }
      else {
        this.Expanded = false;
      }
    });

    this.subs.sink = this.store.pipe(select(fromApp.getCurrentProject)).subscribe(project => {
      this.project = project;
    });
  }

  onProjectClick(): void {
    this.Expanded = !this.Expanded;

    this.store.dispatch(AppActions.setCurrentProject({ id: this.Project.id }));
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
