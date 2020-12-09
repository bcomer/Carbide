import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserState } from '../user/state/user.reducer';
import { Store, select } from '@ngrx/store';
import { getSignedInUser } from '../user/state/user.actions';
import { State } from '../state/app.reducers';
import { loadProjects, SetCalculationListVisibility } from '../state/app.actions';
import { getAppUser } from '../user/state';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { getProjects, getSelectedCalculation, getCalculationListVisibility } from '../state';

@Component({
  selector: 'cbd-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
  projects$: Observable<Project[]>;
  selectedCalculationType$: Observable<string>;
  showCalculationList$: Observable<boolean>;
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
    this.selectedCalculationType$ = this.appStore.pipe(select(getSelectedCalculation));
    this.subs.sink = this.userStore.pipe(select(getAppUser)).subscribe(user => {
      if (user) {
        this.appStore.dispatch(loadProjects());
      }      
    });
    
    this.projects$ = this.appStore.pipe(select(getProjects));
    this.showCalculationList$ = this.appStore.pipe(select(getCalculationListVisibility));
    
  }


  showAllCalculations(): void {
    this.appStore.dispatch(SetCalculationListVisibility({ shouldShowList: true }));
  }
}
