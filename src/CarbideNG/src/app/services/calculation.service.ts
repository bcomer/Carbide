import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Calculation } from '../models/calculation';

//fuck, i dont know if we need this lol
@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  getAll(): Observable<Array<Calculation>> {
    return of(new Array<Calculation>());
  }

  create(entity: Calculation): Observable<Calculation> {
    entity.id =  `calculation-${entity.name}`;
    entity.createdOn = Date.now().toString();
    entity.createdBy = "JEREMY";
    return of(entity);
  }

  update(entity: Calculation): Observable<Calculation> {
    return of(entity);
  }

  delete(id: string): Observable<Calculation> {
    return of();
  }
}