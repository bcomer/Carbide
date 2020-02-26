import { Injectable } from "@angular/core";
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredentials } from '../models/user-credentials';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    user$: Observable<UserCredentials>;

    private readonly key: string = 'users';

    constructor(
        private readonly afAuthSvc: AngularFireAuth,
        private readonly firestore: AngularFirestore
    ) { }

    public signIn(userCredentials: UserCredentials): Observable<firebase.auth.UserCredential> {
        return from(this.afAuthSvc.auth.signInWithEmailAndPassword(userCredentials.email, userCredentials.password));
    }

    public getLoggedInUser(): Observable<firebase.User> {
        return this.afAuthSvc.user;
    }

    public getAppUser(id: string): Observable<UserCredentials> {
        return this.firestore.doc<UserCredentials>(`${this.key}/${id}`).snapshotChanges().pipe(
            map(action => {
                const id = action.payload.id;
                let user = action.payload.data() as UserCredentials;

                user.id = id;

                return user;
            })
        );
    }
}