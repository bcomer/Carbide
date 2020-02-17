import { Injectable } from "@angular/core";
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredentials } from '../models/user-credentials';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AuthService {
    private readonly key: string = 'users';

    constructor(
        private readonly afAuthSvc: AngularFireAuth,
        private readonly firestore: AngularFirestore
    ) { }

    public signIn(userCredentials: UserCredentials): Observable<firebase.auth.UserCredential> {
        return from(this.afAuthSvc.signInWithEmailAndPassword(userCredentials.userName, userCredentials.password));
    }

    public getLoggedInUser(): Observable<firebase.User> {
        return this.afAuthSvc.user;
    }

    public getAppUser(id: string): Observable<UserCredentials> {       
        return this.firestore.doc<UserCredentials>(`${this.key}/${id}`).valueChanges();
    }
}