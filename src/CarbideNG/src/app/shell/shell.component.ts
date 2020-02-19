import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserState } from '../user/state/user.reducer';
import { Store, select } from '@ngrx/store';
import { getSignedInUser } from '../user/state/user.actions';
import { State } from '../state/app.reducers';
import { loadProjects } from '../state/app.actions';
import { getAppUser } from '../user/state';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { getProjects } from '../state';

@Component({
  selector: 'cbd-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
  projects$: Observable<Project[]>;
  
  private subs = new SubSink();

  constructor(
    private readonly userStore: Store<UserState>,
    private readonly appStore: Store<State>
  ) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    this.userStore.dispatch(getSignedInUser());

    this.subs.sink = this.userStore.pipe(select(getAppUser)).subscribe(user => {
      if (user) {
        this.appStore.dispatch(loadProjects());
      }      
    });
    
    this.projects$ = this.appStore.pipe(select(getProjects));
  }

}
