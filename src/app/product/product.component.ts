import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  fishs: Observable<any[]>;
  shrimps: Observable<any[]>;
  squids: Observable<any[]>;

  fisher;
  squider;
  shrimper;

  constructor(public firestore: AngularFirestore, private route: Router) {
    this.firestore
      .collection('product', (ref) => ref.where('type', '==', '1').limit(4))
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

    this.firestore
      .collection('product', (ref) => ref.where('type', '==', '2').limit(4))
      .snapshotChanges()
      .subscribe((data) => {
        this.squider = data.map((element) => {
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

    this.firestore
      .collection('product', (ref) => ref.where('type', '==', '3').limit(4))
      .snapshotChanges()
      .subscribe((data) => {
        this.shrimper = data.map((element) => {
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

  // this.fishs = this.firestore
  //   .collection('product', (ref) => ref.where('type', '==', '1').limit(4))
  //   .valueChanges();
  // this.shrimps = this.firestore
  //   .collection('product', (ref) => ref.where('type', '==', '3').limit(4))
  //   .valueChanges();
  // this.squids = this.firestore
  //   .collection('product', (ref) => ref.where('type', '==', '2').limit(4))
  //   .valueChanges();

  ngOnInit(): void {}

  detail(id) {
    this.route.navigate(['/product/' + id]);
    console.log(id);
  }
}
