import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'cbd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projects: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    // this.projects = firestore.collection('projects').valueChanges();
  }

  ngOnInit() {
  }
}
