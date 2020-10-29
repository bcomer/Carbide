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
import { Api5lGradeSelectComponent } from './calculation-selects/api5l-grade-select/api5l-grade-select.component';
import { Api5lDesignFactorSelectComponent } from './calculation-selects/api5l-design-factor-select/api5l-design-factor-select.component';
import { Api5lLongitudalJointFactorSelectComponent } from './calculation-selects/api5l-longitudal-joint-factor-select/api5l-longitudal-joint-factor-select.component';
import { Api5lTemperatureDeratingFactorSelectComponent } from './calculation-selects/api5l-temperature-derating-factor-select/api5l-temperature-derating-factor-select.component';

@NgModule({
  declarations: [
    DesignPressureSteelPipeComponent, 
    CalculationDetailsComponent, 
    ModuleSelectorComponent, 
    ModuleListComponent,
    CalculationListComponent,
    CalculationSelectorComponent,
    Api5LNominalPipeSizeSelectComponent,
    Api5LWallThicknessComponent,
    Api5lGradeSelectComponent,
    Api5lDesignFactorSelectComponent,
    Api5lLongitudalJointFactorSelectComponent,
    Api5lTemperatureDeratingFactorSelectComponent
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
