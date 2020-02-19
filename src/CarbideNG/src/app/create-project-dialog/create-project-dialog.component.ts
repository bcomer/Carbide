import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cbd-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss']
})
export class CreateProjectDialogComponent {
  name: string;
  nameControl = new FormControl('');

  constructor(public dialogRef: MatDialogRef<CreateProjectDialogComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.name = this.nameControl.value;
    this.dialogRef.close();
  }
}
