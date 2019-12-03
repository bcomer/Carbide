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
import { CreateProjectDialogComponent } from './create-project-dialog/create-project-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculationListComponent } from './calculation-list/calculation-list.component';
import { CalculationListItemComponent } from './calculation-list-item/calculation-list-item.component';
import { CalculationListHeaderComponent } from './calculation-list-header/calculation-list-header.component';
import { CreateCalculationDialogComponent } from './create-calculation-dialog/create-calculation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    SubProjectListItemComponent,
    ProjectListHeaderComponent,
    CreateProjectDialogComponent,
    CalculationListComponent,
    CalculationListItemComponent,
    CalculationListHeaderComponent,
    CreateCalculationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  entryComponents: [
    CreateProjectDialogComponent, 
    CreateCalculationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
