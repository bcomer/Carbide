import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { Calculation } from '../models/calculation';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  private readonly key: string = 'calculations';

  constructor(
    private readonly fireStore: AngularFirestore
  ) { }

  getAll(currentProjectId: string): Observable<Array<Calculation>> {
    return this.fireStore
        .collection<Calculation>(this.key, ref => ref.where('parentId', '==', currentProjectId))
        .snapshotChanges()
        .pipe(
          map(actions => {
            return actions.map(action => {
              const id = action.payload.doc.id
              let calculation = action.payload.doc.data() as Calculation;

              calculation.id = id;

              return calculation;
            });
          })
        );
  }

  // getAll(): Observable<Array<Calculation>> {
  //   return of(new Array<Calculation>());
  // }

  create(entity: Calculation, companyId: string, userId: string): Observable<Calculation> {
    delete entity.id;
    

    //entity.id =  `calculation-${entity.name}`;
    entity.companyId = companyId;
    entity.createdOn = Date.now().toString();
    entity.createdBy = userId;

    return from(this.fireStore.collection<Calculation>(this.key).add({...entity}));
  }

  update(entity: Calculation): Observable<Calculation> {
    return of(entity);
  }

  delete(id: string): Observable<Calculation> {
    return of();
  }
}