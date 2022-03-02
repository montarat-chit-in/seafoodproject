import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { StoreService } from '../services/store.service';
import * as _ from 'lodash';
import { AngularFireDatabase } from '@angular/fire/database';
import { element } from 'protractor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  groups: Observable<any[]>;
  select: any;
  sub: any;

  countries = [
    'เลือกอำเภอ',
    'อำเภอเมือง',
    'อำเภอกระบุรี',
    'อำเภอกะเปอร์',
    'อำเภอละอุ่น',
    'อำเภอสุขสำราญ',
  ];
  storer;
  constructor(
    public firestore: AngularFirestore,
    public storeservice: StoreService,
    public afs: AngularFireDatabase,
    private route: Router
  ) {}
  async ngOnInit() {
    await this.loadData();
  }
  detailstore(id) {
    this.route.navigate(['/store/' + id]);
    console.log(id);
  }

  async loadData() {
    await this.firestore
      .collection('group')
      .snapshotChanges()
      .subscribe((data) => {
        this.storer = data.map((element) => {
          return {
            id: element.payload.doc.id,
            g_name: element.payload.doc.data()['g_name'],
            g_pic: element.payload.doc.data()['g_pic'],
            g_address: element.payload.doc.data()['g_address'],
            g_tel: element.payload.doc.data()['g_tel'],
            g_map: element.payload.doc.data()['g_map'],
            g_subdistrict: element.payload.doc.data()['g_subdistrict'],
            g_district: element.payload.doc.data()['g_district'],
            g_line: element.payload.doc.data()['g_line'],
            g_face: element.payload.doc.data()['g_face'],
            g_product: element.payload.doc.data()['g_product'],
          };
        });
        console.log(this.storer);
      });
  }

  change(select: string) {
    this.select = select;
    console.log(select);
  }

  testt: any;
  test(test: any) {
    this.testt = test;
    console.log(test);
  }
}
