import { Component, OnInit } from '@angular/core';
import { UserState } from '../user/state/user.reducer';
import { Store } from '@ngrx/store';
import { getSignedInUser } from '../user/state/user.actions';

@Component({
  selector: 'cbd-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private readonly userStore: Store<UserState>) { }

  ngOnInit() {
    // initilize app state
    this.userStore.dispatch(getSignedInUser());
  }

}
