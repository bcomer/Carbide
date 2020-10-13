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

  // firebase rules do not filter they return an error when you do not meet requirements
  // so we have to write our code to mirror the firebase rules
  getAll(companyId: string, userId: string): Observable<Array<Project>> {
    return this.fireStore
      .collection<Project>(this.key, ref => 
        ref
          .where('companyId', '==', companyId)
          .where('parentId', '==', null)
          .where('createdBy', '==', userId)
      )
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

  getSubProjects(project: Project): Observable<Array<Project>> {
    return this.fireStore
      .collection<Project>(this.key, ref => ref.where('companyId', '==', project.companyId).where('parentId', '==', project.id))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const id = action.payload.doc.id;
            let subProject = action.payload.doc.data() as Project;

            subProject.id = id;

            return subProject;
          });
        })
      );
  }

  create(entity: Project, companyId: string, userId: string): Observable<Project> {
    delete entity.id;
    delete entity.calculations;
    delete entity.subProjects;

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