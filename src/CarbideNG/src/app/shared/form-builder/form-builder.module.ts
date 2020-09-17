import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPressureSteelPipeComponent } from './design-pressure-steel-pipe/design-pressure-steel-pipe.component';
import { CalculationDetailsComponent } from './calculation-details/calculation-details.component';
import { ModuleSelectorComponent } from './module-selector/module-selector.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { MaterialModule } from '../material/material.module';
import { CalculationListComponent } from './calculation-list/calculation-list.component';


@NgModule({
  declarations: [
    DesignPressureSteelPipeComponent, 
    CalculationDetailsComponent, 
    ModuleSelectorComponent, 
    ModuleListComponent,
    CalculationListComponent
  ],
  imports: [    
    CommonModule,
    MaterialModule
  ],
  exports: [
    CalculationDetailsComponent
  ]
})
export class FormBuilderModule { }
