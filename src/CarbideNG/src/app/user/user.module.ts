import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { StoreModule } from '@ngrx/store';

import { UserEffects } from './state/user.effects';
import * as fromUser from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './services/auth.service';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('users', fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
