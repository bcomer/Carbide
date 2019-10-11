import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'cbd-sub-project-list-item',
  templateUrl: './sub-project-list-item.component.html',
  styleUrls: ['./sub-project-list-item.component.scss']
})
export class SubProjectListItemComponent implements OnInit {
  @Input() Project: Project;

  constructor() { }

  ngOnInit() {
  }

  onProjectClick(): void {
    alert(this.Project.name);
  }
}
