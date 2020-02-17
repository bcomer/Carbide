import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';

import * as AppReducers from './state/app.reducers';
import { AppEffects } from './state/app.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment.local';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectListComponent } from './project-list/project-list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ShellComponent } from './shell/shell.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ShellComponent    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot({ app: AppReducers.reducer }),
    StoreDevtoolsModule.instrument({
      name: 'carbideNG DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
