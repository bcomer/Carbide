import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../../user/models/user-credentials';
import { Observable } from 'rxjs';
import { UserState } from '../../user/state/user.reducer';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { signOut } from '../../user/state/user.actions';
import { getAppUser } from 'src/app/user/state';

@Component({
  selector: 'cbd-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user$: Observable<UserCredentials>;
  userTitle: string =  'Engineering Manager' //replace with value from Firebase....

  constructor(
    private readonly userStore: Store<UserState>,
    private readonly router: Router
  ) { }

  ngOnInit() {
    // this.user$ = this.userStore.pipe(select(getAppUser));
  }

  signOut(): void {
    // this.userStore.dispatch(signOut());
    // this.router.navigate(['signin']);
  }

}
