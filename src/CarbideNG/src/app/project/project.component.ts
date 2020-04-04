import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'cbd-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  showList: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openContextMenu(): void {

  }

  toggleProjectList(): void {
    this.showList = !this.showList;

    console.log(this.project);
  }
}
