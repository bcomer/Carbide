import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { trigger, style, transition, animate, state } from '@angular/animations';
import * as fromApp from '../state'
import * as AppActions from '../state/app.actions';
import { Store } from '@ngrx/store';

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
export class ProjectListItemComponent implements OnInit {
  @Input() Project: Project;
  public Expanded: boolean;

  constructor(private readonly store: Store<fromApp.State>) { }

  ngOnInit() {
  }

  onProjectClick(): void {
    this.Expanded = !this.Expanded;

    this.store.dispatch(AppActions.setCurrentProject({ id: this.Project.id }));
  }
}
