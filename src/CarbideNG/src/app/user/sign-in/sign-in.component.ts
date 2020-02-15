import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../models/user-credentials';
import { UserState } from '../state/user.reducer';
import { Store, select } from '@ngrx/store';
import { signIn } from '../state/user.actions';
import { Router } from '@angular/router';
import { getIsUserSignedIn } from '../state';

@Component({
  selector: 'cbd-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private readonly userStore: Store<UserState>, private readonly router: Router) { }

  ngOnInit() {
    this.userStore.pipe(select(getIsUserSignedIn)).subscribe(isSignedIn => {

      if (isSignedIn) {
        this.router.navigate(['/']);
      }      
    });
  }

  signIn(): void {
    let userCredentials: UserCredentials = new UserCredentials('blcomer79@gmail.com', 'M@rlo1978');

    this.userStore.dispatch(signIn({ user: userCredentials }));
  }
}
