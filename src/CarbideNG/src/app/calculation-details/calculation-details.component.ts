import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Api5L } from '../models/api-5l';
import { map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'cbd-calculation-details',
  templateUrl: './calculation-details.component.html',
  styleUrls: ['./calculation-details.component.scss']
})
export class CalculationDetailsComponent implements OnInit {
private nominalPipeSize:Api5L[]=[];

  constructor(private readonly fireStore: AngularFirestore ) {this.getApi5LValues(); }

  ngOnInit() {
    
  }

  getApi5LValues(){
    this.fireStore.collection<Api5L>('Api5L').get().forEach(a => a.docs.forEach(b => {this.nominalPipeSize.push(b.data() as Api5L);}));
  } 

}
