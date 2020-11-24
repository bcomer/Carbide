import { Component, OnInit, Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CalculationFunctionsService } from '../Services/calculation-functions.service';
import { CalculationField } from 'src/app/models/calculation-field';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.reducers';


@Injectable()
@Component({
  selector: 'cbd-design-pressure-steel-pipe',
  templateUrl: './design-pressure-steel-pipe.component.html',
  styleUrls: ['./design-pressure-steel-pipe.component.scss']
})
export class DesignPressureSteelPipeComponent implements OnInit  {
  nominalPipeSize: number;
  selectedGrade: number;
  selectedTemperatureFactor: number;
  selectedDesignFactor: number;
  selectedWallThickness: number;
  selectedJointFactor: number;
  designPressureTotal: number;
  dimensionIdentifier: string;
  designPressure: CalculationField;

  constructor(private calculationFunctionsService: CalculationFunctionsService)
   { }

  ngOnInit() {
  }

  onSelected(value: number) {
    this.nominalPipeSize = value;
  }
  assignData(value: number, type: string){
  
    switch (type) {
      case 'nominal':
        this.nominalPipeSize = value;
        break;
      case 'wall':
        this.selectedWallThickness = value;
        break;
      case 'grade':
        this.selectedGrade = value;
        break;
      case 'temperature':
        this.selectedTemperatureFactor = value;
        break;
      case 'joint':
        this.selectedJointFactor = value;
        break;
      case 'design':
        this.selectedDesignFactor = value;
        break;
      default:
        break;
    }
  }
   onCalculate(){

    this.designPressure = {
      NominalOutsideDiameter: this.nominalPipeSize,
      WallThickness: this.selectedWallThickness,
      Grade: this.selectedGrade,
      DesignFactorValue: this.selectedDesignFactor,
      TemperatureDeratingFactor: this.selectedTemperatureFactor,
      LongitudinalJointFactor: this.selectedJointFactor,
      DesignPressureTotal: 0
    }
      this.calculationFunctionsService.calculateDesignPressure(this.designPressure).subscribe((data: any) => {
      this.designPressureTotal = data.DesignPressureTotal;
      this.dimensionIdentifier = ' psig';
  })   
  }
  onSave(){

  }
}
