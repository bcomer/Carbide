import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import * as fromApp from '../state';
import { Store } from '@ngrx/store';
import * as appActions from '../state/app.actions';

@Component({
  selector: 'cbd-sub-project-list-item',
  templateUrl: './sub-project-list-item.component.html',
  styleUrls: ['./sub-project-list-item.component.scss']
})
export class SubProjectListItemComponent implements OnInit {
  @Input() Project: Project;  
  isActive: boolean;

  constructor(private readonly store: Store<fromApp.State>) { }

  ngOnInit() {    
    this.store.select(fromApp.getCurrentProject).subscribe(project => {

      if (project) {
        this.isActive = this.Project.id == project.id;
      }        
      else {
        this.isActive = false;
      }    
    });
  }

  onProjectClick(): void {    
    if (this.isActive) {
      this.store.dispatch(appActions.clearCurrentProject());      
    }
    else {
      this.store.dispatch(appActions.setCurrentProject({ id: this.Project.id }));
    }
  }
}
