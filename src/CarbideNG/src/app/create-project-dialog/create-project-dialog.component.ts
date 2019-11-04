import { Component, OnInit, Inject } from '@angular/core';
import { Project } from '../models/project';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cbd-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss']
})
export class CreateProjectDialogComponent implements OnInit {

  name = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) { }

  ngOnInit() {}

  isDisabled(): boolean {
    return !this.name.valid;
  }

  onCreateClick(): void {
    this.data.name = this.name.value;
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {    
    this.dialogRef.close();
  } 
}
