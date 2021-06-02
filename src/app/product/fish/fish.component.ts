import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css'],
})
export class FishComponent implements OnInit {
  fisher;
  constructor(public firestore: AngularFirestore, private route: Router) {
    this.firestore
      .collection('product', (ref) => ref.where('type', '==', '1'))
      .snapshotChanges()
      .subscribe((data) => {
        this.fisher = data.map((element) => {
          return {
            id: element.payload.doc.id,
            p_name: element.payload.doc.data()['p_name'],
            p_pic: element.payload.doc.data()['p_pic'],
            pid: element.payload.doc.data()['pid'],
            p_address: element.payload.doc.data()['p_address'],
            p_list: element.payload.doc.data()['p_list'],
            p_num: element.payload.doc.data()['p_num'],
            p_price: element.payload.doc.data()['p_price'],
            p_tel: element.payload.doc.data()['p_tel'],
            p_weight: element.payload.doc.data()['p_weight'],
          };
        });
      });
  }

  ngOnInit(): void {}

  detail(id) {
    this.route.navigate(['/fish/' + id]);
    console.log(id);
  }
}
// fishs: Observable<any[]>;
// constructor(public firestore: AngularFirestore) {
//   this.fishs = this.firestore
//     .collection('product', (ref) => ref.where('type', '==', '1'))
//     .valueChanges();
// }

// ngOnInit(): void {}
