import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromApp from './state/index';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'cbd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isExpanded$: Observable<boolean>;

  constructor(private readonly store: Store<fromApp.State>) {}

  ngOnInit() {
    this.isExpanded$ = this.store.pipe(select(fromApp.getShowProjectList));
  }
}
