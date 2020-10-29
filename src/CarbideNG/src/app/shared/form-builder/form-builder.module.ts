import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPressureSteelPipeComponent } from './design-pressure-steel-pipe/design-pressure-steel-pipe.component';
import { CalculationDetailsComponent } from './calculation-details/calculation-details.component';
import { ModuleSelectorComponent } from './module-selector/module-selector.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { MaterialModule } from '../material/material.module';
import { CalculationListComponent } from './calculation-list/calculation-list.component';
import { CalculationSelectorComponent } from './calculation-selector/calculation-selector.component';
import { StoreModule } from '@ngrx/store';
import * as formFormBuilder from './state/form-builder.reducers';
import { Api5LNominalPipeSizeSelectComponent } from './calculation-selects/api5L-nominal-pipe-size-select/api5L-nominal-pipe-size-select.component';
import { Api5LWallThicknessComponent } from './calculation-selects/api5L-wall-thickness-select/api5L-wall-thickness-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DesignPressureSteelPipeComponent, 
    CalculationDetailsComponent, 
    ModuleSelectorComponent, 
    ModuleListComponent,
    CalculationListComponent,
    CalculationSelectorComponent,
    Api5LNominalPipeSizeSelectComponent,
    Api5LWallThicknessComponent
  ],
  imports: [    
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('form-builder', formFormBuilder.reducer)
  ],
  exports: [
    CalculationDetailsComponent
  ]
})
export class FormBuilderModule { }
