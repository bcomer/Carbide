import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPressureSteelPipeComponent } from './design-pressure-steel-pipe/design-pressure-steel-pipe.component';
import { CalculationDetailsComponent } from './calculation-details/calculation-details.component';
import { ModuleSelectorComponent } from './module-selector/module-selector.component';
import { ModuleListComponent } from './module-list/module-list.component';


@NgModule({
  declarations: [DesignPressureSteelPipeComponent, CalculationDetailsComponent, ModuleSelectorComponent, ModulesListComponent, ModuleListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CalculationDetailsComponent
  ]
})
export class FormBuilderModule { }
