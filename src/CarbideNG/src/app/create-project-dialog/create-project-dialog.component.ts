import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { State } from '../state/app.reducers';
import { Store } from '@ngrx/store';
import { createProject } from '../state/app.actions';
import { Project } from '../models/project';

@Component({
  selector: 'cbd-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss']
})
export class CreateProjectDialogComponent {
  nameControl = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    private readonly store: Store<State>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (!this.nameControl.value) return;

    let parentId: string = !!this.data ? this.data.id : null;
    let project: Project = new Project(null, parentId, this.nameControl.value);

    this.store.dispatch(createProject({project: project}));

    this.dialogRef.close();
  }
}
