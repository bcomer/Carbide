import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Api5L } from '../models/api-5l';
import { map, mapTo } from 'rxjs/operators';
import { CalculationValueService } from '../services/calculation-values.service';
import { WallThickness } from '../models/wall-thickness';

@Component({
  selector: 'cbd-calculation-details',
  templateUrl: './calculation-details.component.html',
  styleUrls: ['./calculation-details.component.scss']
})
export class CalculationDetailsComponent implements OnInit {
  public nominalPipeSize: string;
  constructor(private calculationValueService: CalculationValueService) { }

  ngOnInit() {

  }


  onSave() {
  }
  onSelected(value: string) {
    this.nominalPipeSize = value;
  }


}
