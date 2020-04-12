import { Component, OnInit, Input } from '@angular/core';
import { Calculation } from '../models/calculation'
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../state/app.reducers';
import { getCurrentProject } from '../state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cbd-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {
  @Input() calculation: Calculation;
  

  constructor(private readonly store: Store<State>) { 
  
  }

  ngOnInit() {
  }

  



}
