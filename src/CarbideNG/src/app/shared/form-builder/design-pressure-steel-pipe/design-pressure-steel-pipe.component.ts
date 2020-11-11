import { Component, OnInit, Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSelected(value: number) {
    this.nominalPipeSize = value;
  }
  assignData(value: number, type: string){
    console.log(value + type);
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
   onCalculate(value: number){
     console.log(value);
    let designPressure = {
      nominalOutsideDiameter: this.nominalPipeSize,
      wallThickness: this.selectedWallThickness,
      grade: this.selectedGrade,
      designFactorValue: this.selectedDesignPressure,
      temperatureDeratingFactor: this.selectedTemperatureFactor,
      longitudinalJointFactor: this.selectedJointFactor
    };
    console.log(designPressure);
    let f = this.http.post('http://localhost:5001/newton-cddbd/us-central1/designPressure', designPressure).subscribe();
     console.log(f);
    
  }
}
