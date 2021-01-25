import { Component, OnInit, Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CalculationFunctionsService } from '../Services/calculation-functions.service';
import { CalculationField } from 'src/app/models/calculation-field';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/state/app.reducers';
import { createCalculation, setCurrentProject, updateCalculation } from 'src/app/state/app.actions';
import { Calculation } from 'src/app/models/calculation';
import { getCurrentCalculation, getCurrentProject } from 'src/app/state';
import { tick } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY } from '@angular/cdk/overlay/typings/keyboard/overlay-keyboard-dispatcher';


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
  designPressure: Calculation = new Calculation();  
  calculationNameControl = new FormControl('');
  projectName: string = '';
  designPressureModel:CalculationField =  {
    NominalOutsideDiameter: undefined,
    WallThickness: undefined,
    Grade: undefined,
    DesignFactorValue: undefined,
    TemperatureDeratingFactor: undefined,
    LongitudinalJointFactor: undefined,
    DesignPressureTotal: undefined
  }

  constructor(
    private calculationFunctionsService: CalculationFunctionsService,
    private readonly store: Store<State>
    )
   {}  

  ngOnInit() {
    this.designPressure.fields = this.designPressureModel;

    this.store.pipe(select(getCurrentCalculation)).subscribe(calculation =>{

      if(calculation && calculation.type == 'Design Pressure - Steel Pipe'){
        this.designPressure = calculation;
        this.calculationNameControl.setValue(calculation.name);
        this.nominalPipeSize = this.designPressure.fields.NominalOutsideDiameter;
      }
    });

    //when calc is accessed from "my calculations", do we need to set the project in state? Or can we pass in an id to get the project name?
    this.designPressure.parentId != null ? this.store.dispatch(setCurrentProject({id: this.designPressure.parentId})): this.designPressure.parentId;
    console.log(this.designPressure.parentId);
    this.store.pipe(select(getCurrentProject)).subscribe(project => {
      if(project && (this.designPressure.parentId == project.id)){
        this.projectName = project.name;
      }
    })
  }
  assignData(value: number, type: string){
  
    switch (type) {
      case 'nominal':
        this.designPressure.fields.NominalOutsideDiameter = value;
        this.nominalPipeSize = value;
        break;
      case 'wall':
        this.designPressure.fields.WallThickness = value;
        break;
      case 'grade':
        this.designPressure.fields.Grade = value;
        break;
      case 'temperature':
        this.designPressure.fields.TemperatureDeratingFactor = value;
        break;
      case 'joint':
        this.designPressure.fields.LongitudinalJointFactor = value;
        break;
      case 'design':
        this.designPressure.fields.DesignFactorValue = value;
        break;
      default:
        break;
    }
  }
   async onCalculate() {
    this.designPressure.fields  = <CalculationField> await this.calculationFunctionsService.calculateDesignPressure(this.designPressure.fields).toPromise();

      // this.calculationFunctionsService.calculateDesignPressure(this.designPressure.fields).subscribe((data: any) => {
      // this.designPressureTotal = data.DesignPressureTotal;
      // this.designPressure.fields.DesignPressureTotal = this.designPressureTotal;
    
      this.dimensionIdentifier = ' psig';
      return this.designPressureTotal;

   
  }
    async onSave(){

    await this.onCalculate();
    this.designPressure.name = this.calculationNameControl.value; 
    if(!this.designPressure.id){
      this.designPressure.isValid = true;
      this.designPressure.id = null;
      this.designPressure.parentId = null;
      this.designPressure.result = null;
      ///need to look at async functions for calculation result
      this.designPressure.fields.DesignPressureTotal = !this.designPressure.fields.DesignPressureTotal ? null : this.designPressure.fields.DesignPressureTotal;
      this.designPressure.type = 'Design Pressure - Steel Pipe';
      this.store.dispatch(createCalculation({calculation: this.designPressure}));
    }
    else{
      this.store.dispatch(updateCalculation({calculation : this.designPressure}));
    }
   
  }

}
