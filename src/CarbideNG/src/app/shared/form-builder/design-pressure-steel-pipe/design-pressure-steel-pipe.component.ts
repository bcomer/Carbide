import { Component, OnInit, Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CalculationFunctionsService } from '../Services/calculation-functions.service';
import { CalculationField } from 'src/app/models/calculation-field';


@Injectable()
@Component({
  selector: 'cbd-design-pressure-steel-pipe',
  templateUrl: './design-pressure-steel-pipe.component.html',
  styleUrls: ['./design-pressure-steel-pipe.component.scss']
})
export class DesignPressureSteelPipeComponent implements OnInit {
  public nominalPipeSize: number;
  public selectedGrade: number;
  public selectedTemperatureFactor: number;
  public selectedDesignPressure: number;
  public selectedWallThickness: number;
  public selectedJointFactor: number;
  public designPressureTotal: number;

  constructor(private calculationFunctionsService: CalculationFunctionsService) { }

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
        this.selectedDesignPressure = value;
        break;
      default:
        break;
    }
  }
   onCalculate(){
    
    let designPressure = {
      NominalOutsideDiameter: this.nominalPipeSize,
      WallThickness: this.selectedWallThickness,
      Grade: this.selectedGrade,
      DesignFactorValue: this.selectedDesignPressure,
      TemperatureDeratingFactor: this.selectedTemperatureFactor,
      LongitudinalJointFactor: this.selectedJointFactor,
      DesignPressureTotal: 0
    }

      this.calculationFunctionsService.calculateDesignPressure(designPressure).subscribe((data: any) => {
      this.designPressureTotal = data.DesignPressureTotal;
  })   
  }
}
