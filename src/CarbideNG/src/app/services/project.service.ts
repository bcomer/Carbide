import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Project } from '../models/project';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly key: string = 'projects';

  constructor(
    private readonly fireStore: AngularFirestore
  ) { }

  getAll(companyId: string): Observable<Array<Project>> {
    return this.fireStore
      .collection<Project>(this.key, ref => ref.where('companyId', '==', companyId))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const id = action.payload.doc.id;
            let project = action.payload.doc.data() as Project;

            project.id = id;

            return project;
          });
        })
      );
  }

  create(entity: Project, companyId: string, userId: string): Observable<Project> {
    delete entity.id;

    entity.companyId = companyId;
    entity.createdOn = Date.now().toString();
    entity.createdBy = userId;

    return from(this.fireStore.collection<Project>(this.key).add({...entity}));
  }

  update(entity: Project): Observable<void> {
    return from(this.fireStore.doc<Project>(`${this.key}/${entity.id}`).update({...entity}));
  }

  delete(id: string): Observable<void> {
    return from(this.fireStore.doc<Project>(`${this.key}/${id}`).delete());
  }
}