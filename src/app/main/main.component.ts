import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  tests: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.tests = this.firestore.collection('main').valueChanges();
  }

  ngOnInit(): void {}
}
