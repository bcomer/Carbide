import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../models/user-credentials';
import { UserState } from '../state/user.reducer';
import { Store, select } from '@ngrx/store';
import { signIn } from '../state/user.actions';
import { Router } from '@angular/router';
import { getIsUserSignedIn } from '../state';
import { FormControl, Validators } from '@angular/forms';
import { SubmittedFormControlErrorStateMatcher } from 'src/app/error-state-matchers/submitted-form-control-error-state-matcher';

@Component({
  selector: 'cbd-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  emailControl = new FormControl("", [Validators.required, Validators.email]);
  passwordControl = new FormControl("", [Validators.required]);
  public passwordErrorStateMatcher = new SubmittedFormControlErrorStateMatcher();
  public submittedErrorStateMatcher = new SubmittedFormControlErrorStateMatcher();

  constructor(private readonly userStore: Store<UserState>, private readonly router: Router) { }

  ngOnInit() {
    this.userStore.pipe(select(getIsUserSignedIn)).subscribe(isSignedIn => {

      if (isSignedIn) {
        this.router.navigate(['/']);
      }      
    });
  }

  signIn(): void {
    let userCredentials: UserCredentials = new UserCredentials(null, this.emailControl.value, this.passwordControl.value);

    this.userStore.dispatch(signIn({ user: userCredentials }));
  }
}
