import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPressureSteelPipeComponent } from './design-pressure-steel-pipe/design-pressure-steel-pipe.component';
import { CalculationDetailsComponent } from './calculation-details/calculation-details.component';



@NgModule({
  declarations: [DesignPressureSteelPipeComponent, CalculationDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class FormBuilderModule { }
