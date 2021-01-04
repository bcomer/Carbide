import { Component, OnInit, Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CalculationFunctionsService } from '../Services/calculation-functions.service';
import { CalculationField } from 'src/app/models/calculation-field';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/state/app.reducers';
import { clearCurrentCalculation, createCalculation, setCurrentCalculationType, updateCalculation } from 'src/app/state/app.actions';
import { Calculation } from 'src/app/models/calculation';
import { getCurrentCalculation } from 'src/app/state';
import { tick } from '@angular/core/testing';


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
  designPressure: Calculation;  
  existingCalculation: Calculation;
  designPressureModel:CalculationField =  {
    NominalOutsideDiameter: undefined,
    WallThickness: undefined,
    Grade: undefined,
    DesignFactorValue: undefined,
    TemperatureDeratingFactor: undefined,
    LongitudinalJointFactor: undefined,
  }

  constructor(
    private calculationFunctionsService: CalculationFunctionsService,
    private readonly store: Store<State>
    )
   {}  

  ngOnInit() {
    this.store.pipe(select(getCurrentCalculation)).subscribe(calculation =>{

      if(calculation && calculation.type == 'Design Pressure - Steel Pipe'){
        this.designPressureModel = calculation.fields;
        this.nominalPipeSize = this.designPressureModel.NominalOutsideDiameter;
        this.designPressure = calculation;
        //add function call to calculate on load
      }
    });
  }
  assignData(value: number, type: string){
  
    switch (type) {
      case 'nominal':
        this.designPressureModel.NominalOutsideDiameter = value;
        this.nominalPipeSize = value;
        break;
      case 'wall':
        this.designPressureModel.WallThickness = value;
        break;
      case 'grade':
        this.designPressureModel.Grade = value;
        break;
      case 'temperature':
        this.designPressureModel.TemperatureDeratingFactor = value;
        break;
      case 'joint':
        this.designPressureModel.LongitudinalJointFactor = value;
        break;
      case 'design':
        this.designPressureModel.DesignFactorValue = value;
        break;
      default:
        break;
    }
  }
   onCalculate(){

      this.calculationFunctionsService.calculateDesignPressure(this.designPressureModel).subscribe((data: any) => {
      this.designPressureTotal = data.DesignPressureTotal;
      this.designPressureModel.DesignPressureTotal = data.DesignPressureTotal;
      this.dimensionIdentifier = ' psig';
  })   
  }
  onSave(){
    this.onCalculate();

    if(!this.designPressure.id == undefined){
      this.designPressure.fields = this.designPressureModel;
      this.designPressure.isValid = true;
    
      this.store.dispatch(createCalculation({calculation: this.designPressure}));
    }
    else{
      this.designPressure.fields = this.designPressureModel;
      this.store.dispatch(updateCalculation({calculation : this.designPressure}));
    }
   
  }

}
export class DesignPressure{

}
