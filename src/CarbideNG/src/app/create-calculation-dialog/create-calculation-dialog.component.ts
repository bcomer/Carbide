import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { State } from '../state/app.reducers';
import { FormControl } from '@angular/forms';
import { Calculation } from '../models/calculation';
import { updateProject } from '../state/app.actions';
import { Project } from '../models/project';

@Component({
  selector: 'cbd-create-calculation-dialog',
  templateUrl: './create-calculation-dialog.component.html',
  styleUrls: ['./create-calculation-dialog.component.scss']
})
export class CreateCalculationDialogComponent {
  nameControl = new FormControl('');


  constructor(
    public dialogRef: MatDialogRef<CreateCalculationDialogComponent>,
    private readonly store: Store<State>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (!this.nameControl.value) return;
    let currentProject = this.data.currentProject;
    let newCalculation = new Calculation(null, currentProject.id, this.nameControl.value,  null, null, null, null, null);
    currentProject.calculations = newCalculation;

    this.store.dispatch(updateProject({project: currentProject}));

    this.dialogRef.close();
  }
}
