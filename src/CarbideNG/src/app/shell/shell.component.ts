import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserState } from '../user/state/user.reducer';
import { Store, select } from '@ngrx/store';
import { getSignedInUser } from '../user/state/user.actions';
import { State } from '../state/app.reducers';
import { LoadAllCalculations, loadProjects, SetCalculationListVisibility } from '../state/app.actions';
import { getAppUser } from '../user/state';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { getCurrentCalculation, getProjects } from '../state';
import { Calculation } from '../models/calculation';
import { getProjects, getSelectedCalculation, getCalculationListVisibility } from '../state';

@Component({
  selector: 'cbd-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
  projects$: Observable<Project[]>;
  calculation$: Observable<Calculation>;

  private showCalculationList: boolean = false;
  selectedCalculationType$: Observable<string>;
  showCalculationList$: Observable<boolean>;
  private subs = new SubSink();
  private calculationType: string;

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
        // set the default state of the app
        this.appStore.dispatch(LoadAllCalculations());
        this.appStore.dispatch(SetCalculationListVisibility({ shouldShowList: true }));
        this.appStore.dispatch(loadProjects());        
      }
    });
    
    this.projects$ = this.appStore.pipe(select(getProjects));
    this.subs.sink = this.appStore.pipe(select(getCurrentCalculation)).subscribe(calculation =>{
      if(calculation){
        this.showCalculationList = false;
        this.calculationType = calculation.type;
      }
    });
  
    this.showCalculationList$ = this.appStore.pipe(select(getCalculationListVisibility));
  
  }

  showAllCalculations(): void {
    this.appStore.dispatch(SetCalculationListVisibility({ shouldShowList: true }));
  }
}
