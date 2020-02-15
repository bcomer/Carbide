import { Injectable } from "@angular/core";
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredentials } from '../models/user-credentials';

@Injectable()
export class AuthService {
    public User$: Observable<firebase.auth.UserCredential>;

    constructor(private readonly afAuthSvc: AngularFireAuth) { }

    public SignIn(userCredentials: UserCredentials): Observable<firebase.auth.UserCredential> {

        this.User$ = from(this.afAuthSvc.signInWithEmailAndPassword(userCredentials.userName, userCredentials.password));

        return this.User$;
    }
}