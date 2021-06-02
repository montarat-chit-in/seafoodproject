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
  // districts: any;
  // filterdistricts: any;
  // g_district: string;
  // filters = {};
  storer;
  constructor(
    public firestore: AngularFirestore,
    public storeservice: StoreService,
    public afs: AngularFireDatabase,
    private route: Router
  ) {
    // this.firestore
    //   .collection('group')
    //   .valueChanges()
    //   .subscribe((districts) => {
    //     this.districts = districts;
    //     this.applyFilters();
    //   });
  }
  ngOnInit() {
    this.firestore
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
          };
        });
      });
  }
  // private applyFilters() {
  //   this.filterdistricts = _.filter(this.districts, _.conforms(this.filters));
  // }

  // filterExact(property: string, rule: any) {
  //   this.filters[property] = (val) => val == rule;
  //   this.applyFilters;
  // }

  detailstore(id) {
    this.route.navigate(['/store/' + id]);
    console.log(id);
  }
}
