import { Component, OnInit } from '@angular/core';
import { UserState } from '../user/state/user.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserCredentials } from '../user/models/user-credentials';
import { getAppUser } from '../user/state';
import { signOut } from '../user/state/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'cbd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  userName: string = "Brandon Comer";
  user$: Observable<UserCredentials>;

  constructor() {}

  ngOnInit() {}
}
