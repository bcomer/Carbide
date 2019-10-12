import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ProjectListComponent } from './project-list/project-list.component';

import * as AppReducers from './state/app.reducers';
import { AppEffects } from './state/app.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment.prod';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { SubProjectListItemComponent } from './sub-project-list-item/sub-project-list-item.component';
import { ProjectListHeaderComponent } from './project-list-header/project-list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    SubProjectListItemComponent,
    ProjectListHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ app: AppReducers.reducer }),
    StoreDevtoolsModule.instrument({
      name: 'carbideNG DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
